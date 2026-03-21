import z from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Email is required"),
  password: z.string().min(1, "Password must be at least 6 characters"),
});

export type SignUpSchemaa = z.infer<typeof SignUpSchema>;
