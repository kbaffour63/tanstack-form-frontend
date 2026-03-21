import { z } from "zod";

export const StepOneSchema = z.object({
  name: z.string().min(1, "Name must be at least 2 characters"),
  age: z.int32().min(1, "Age must be a positive integer"),
  email: z.email("Invalid email address"),
});
