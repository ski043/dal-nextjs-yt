"use server";

import { prisma } from "@/lib/db";
import { blogCreationSchema, BlogCreationType } from "@/lib/zodSchemas";
import { revalidatePath } from "next/cache";

export async function createBlog(blog: BlogCreationType) {
  const result = blogCreationSchema.safeParse(blog);

  if (!result.success) {
    throw new Error("Invalid blog data");
  }

  await prisma.blog.create({
    data: {
      title: result.data.title,
      content: result.data.content,
      thumbnail: result.data.thumbnail,
    },
  });

  revalidatePath("/");
}
