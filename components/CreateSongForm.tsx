"use client";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { JSX, SVGProps, SetStateAction, useEffect, useState } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Container from "@/components/ui/container";
import { fetchSongs } from "@/lib/api/fetchSongs";
import { useSession } from "next-auth/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Song } from "@/types";
import { redirect, useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import exp from "constants";

const FormSchema = z.object({
  title: z.string().min(1, "title is required").max(100),
  artistName: z.string().min(1, "artist is required"),
});
const CreateSongForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      artistName: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      console.log(values);
      const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/songs`, {
        method: "POST",
        body: JSON.stringify(values),
      });
      values.artistName = "";
      values.title = "";
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex-1 overflow-auto py-2">
      <Form {...form}>
        <form
          className="grid gap-4 px-4 text-sm font-medium"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Song Name</FormLabel>
                <FormControl>
                  <Input placeholder="song name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="artistName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Artist</FormLabel>
                <FormControl>
                  <Input placeholder="Name of Artist" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="mt-4" type="submit">
            Add Song
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateSongForm;
