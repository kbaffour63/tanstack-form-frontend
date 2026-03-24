"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import z from "zod";
import { SignUpSchema } from "@/schema/auth";
import { useForm } from "@tanstack/react-form-nextjs";
import { SignUpDefaultValues } from "@/lib/default-values";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import authClient from "@/lib/auth-client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";

type SignUpSchema = z.infer<typeof SignUpSchema>;

const signUpUser = async (data: SignUpSchema) => {
  const { error } = await authClient.signUp.email({
    name: data.name,
    email: data.email,
    password: data.password,
  });

  if (error) {
    throw error;
  }
};

export default function SignUpPage() {
  const [apiError, setApiError] = useState<string | null>(null);
  const router = useRouter();
  const form = useForm({
    defaultValues: SignUpDefaultValues,
    onSubmit: async ({ value }) => {
      console.log(value);
      signUpMutation.mutate(value);
    },
    validators: {
      onChange: SignUpSchema,
      onBlur: SignUpSchema,
    },
  });

  const signUpMutation = useMutation({
    mutationFn: signUpUser,
    onSuccess: () => {
      toast.success("Account created successfully!");
      form.reset();
      router.push("/user/onboarding");
      setApiError(null);
    },
    onError: (error: Error & { status?: number }) => {
      console.log("Signup error:", error);

      const message =
        error.status === 503
          ? "Service is temporarily unavailable. Please try again shortly."
          : "An unexpected error occurred. Please try again.";

      setApiError(message);
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
              <form.Field name="email">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder="you@example.com"
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
              <form.Field name="password">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        type="password"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder="Enter your password"
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              </form.Field>
            </div>

            {apiError && <p className="text-sm text-red-500">{apiError}</p>}

            <Button
              type="submit"
              className="w-full bg-[#1e375b] hover:bg-[#163057]"
              disabled={signUpMutation.isPending}
            >
              {signUpMutation.isPending ? "Creating account..." : "Sign Up"}
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
