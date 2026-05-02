"use server";

import { fetchMutation } from "convex/nextjs";
import { postSchema } from "./schemas/blog";
import { z } from "zod/v3";
import { api } from "@/convex/_generated/api";
import { revalidatePath } from "next/cache";

export async function createBlogAction(data: z.infer<typeof postSchema>) {
  const parsed = postSchema.safeParse(data);

  if (!parsed.success) {
    throw new Error(parsed.error.message);
  }

  await fetchMutation(api.posts.createPost, data);
  revalidatePath("/");
}
