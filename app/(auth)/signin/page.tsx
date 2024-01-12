import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import { SignUpForm } from "@/components/SignUpForm";
import Container from "@/components/ui/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your account",
};

export default function Signin() {
  return (
    <main className="container flex  flex-col items-center justify-center  sm:p-10  sm:mt-10">
      <Container>
        <div className="flex justify-center">
          <Card className="w-[450px] space-y-8">
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>
                We use password-less authentication for simplicity.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <SignUpForm />
            </CardContent>
          </Card>
        </div>
      </Container>

      <p className="px-8 text-center text-sm text-muted-foreground ">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="hover:text-brand underline underline-offset-4 "
        >
          Sign up
        </Link>
      </p>
    </main>
  );
}
