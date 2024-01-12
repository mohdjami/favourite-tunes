import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import { SignUpForm } from "@/components/SignUpForm";
import Container from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your account",
};

export default function Signin() {
  return (
    <main className="container flex h-screen w-screen flex-col items-center justify-center p-10 ">
      <Container>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute left-4 top-4 md:left-8 md:top-20"
          )}
        >
          <>
            <Icons.back className="mr-2 h-4 w-4" /> Back
          </>
        </Link>
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] bg-white-600 rounded-lg shadow-lg p-4">
          <div className="flex flex-col space-y-2 text-center ">
            <h1 className="text-2xl font-semibold tracking-tight">
              {" "}
              Sign up to Continue
            </h1>
          </div>
          <SignUpForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="hover:text-brand underline underline-offset-4"
            >
              Sign in
            </Link>
          </p>
        </div>
      </Container>
    </main>
  );
}
