import { z } from "zod/v3";

export const postSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(50, "Title must be at most 50 characters"),
  content: z.string().min(10, "Content must be at least 10 characters"),
});
