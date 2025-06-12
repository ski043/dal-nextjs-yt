import { BlogCreationForm } from "@/components/web/BlogCreationForm";
import { Suspense } from "react";

import { RenderBlogs } from "@/components/web/RenderBlogArticles";

export default async function Home() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto mt-20 px-4 mb-32 md:px-6 lg:px-8">
      <BlogCreationForm />
      <Suspense fallback={<div>Loading...</div>}>
        <RenderBlogs />
      </Suspense>
    </div>
  );
}
