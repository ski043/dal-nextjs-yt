/* eslint-disable @next/next/no-img-element */

import { getBlogs } from "@/app/data/blog/get-all-blog-articles";
import { CardContent, CardDescription, CardTitle } from "../ui/card";

import { Card } from "../ui/card";

export async function RenderBlogs() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await getBlogs();

  return (
    <div className="grid grid-cols-3 gap-8 mt-20">
      {data.map((blog) => (
        <Card key={blog.id} className="pt-0">
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="w-full h-60 object-cover rounded-t-lg"
          />

          <CardContent>
            <CardTitle>{blog.title}</CardTitle>
            <CardDescription className="line-clamp-3 mt-1">
              {blog.content}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
