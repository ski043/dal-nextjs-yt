import "server-only";

import { prisma } from "@/lib/db";
import { verifyUser } from "../user/verify-user";

export async function getBlogs() {
  const user = await verifyUser();
  const blogs = await prisma.blog.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return blogs;
}
