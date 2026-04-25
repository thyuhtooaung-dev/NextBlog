import z from "zod/v3";

export const postSchema = z.object({
  title: z.string().min(3, "Title is required").max(50),
  content: z.string().min(10, "Content is required"),
});
