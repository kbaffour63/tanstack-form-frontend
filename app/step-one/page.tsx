"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useForm } from "@tanstack/react-form";
import { StepOneDefaultValues } from "@/lib/default-values";
import {
  FieldDescription,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";

export default function StepOne() {
  const form = useForm({
    defaultValues: StepOneDefaultValues,
    onSubmit: async (value) => {
      console.log(value);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <FieldGroup>
        <div className="min-h-screen bg-background px-4 py-10">
          <div className="mx-auto w-full max-w-xl rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="mb-8">
              <p className="mb-2 text-sm font-medium text-muted-foreground">
                Step 1 of 5
              </p>
              <h2 className="text-2xl font-semibold text-foreground">
                Personal Information
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us a little about yourself to get started.
              </p>
            </div>

            <div className="space-y-5">
              <form.Field name="name">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <>
                      <FieldDescription className="mb-2 block text-sm font-medium text-foreground">
                        Full Name
                      </FieldDescription>
                      <Input
                        type="text"
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder="Enter your full name"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </>
                  );
                }}
              </form.Field>

              <form.Field name="age">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <>
                      <FieldDescription className="mb-2 block text-sm font-medium text-foreground">
                        Age
                      </FieldDescription>
                      <Input
                        type="text"
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) =>
                          field.handleChange(Number(e.target.value))
                        }
                        aria-invalid={isInvalid}
                        placeholder="Enter your age"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </>
                  );
                }}
              </form.Field>

              <form.Field name="email">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <>
                      <FieldDescription className="mb-2 block text-sm font-medium text-foreground">
                        Email Address
                      </FieldDescription>
                      <Input
                        type="email"
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder="your@email.com"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </>
                  );
                }}
              </form.Field>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
              <Link
                href="/"
                className="inline-flex items-center rounded-lg border border-border px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Back
              </Link>

              <Button
                type="submit"
                className="inline-flex items-center rounded-lg bg-foreground px-5 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </FieldGroup>
    </form>
  );
}
