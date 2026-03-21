"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import z from "zod";
import { SignUpSchema } from "@/schema/auth";
import { useForm } from "@tanstack/react-form-nextjs";
import { SignUpDefaultValues } from "@/lib/default-values";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

type SignUpSchema = z.infer<typeof SignUpSchema>;

export default function SignUpPage() {
  const form = useForm({
    defaultValues: SignUpDefaultValues,
    onSubmit: async (value) => {
      console.log(value);
    },
    validators: {
      onChange: SignUpSchema,
      onBlur: SignUpSchema,
    },
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-background px-4 py-10">
        <section className="w-full max-w-md rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-6 space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create your account
            </h1>
            <p className="text-sm text-muted-foreground">
              Sign up to get started.
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <form.Field name="name">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder="John Doe"
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              </form.Field>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" placeholder="you@example.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </div>

          <p className="mt-5 text-center text-sm text-muted-foreground">
            Already have an account?
            <Link
              href="/auth/login"
              className="font-medium text-primary hover:underline"
            >
              Login
            </Link>
          </p>
        </section>
      </main>
    </form>
  );
}
