"use client";

import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { blogCreationSchema, BlogCreationType } from "@/lib/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { createBlog } from "@/app/actions";
import { toast } from "sonner";

export function BlogCreationForm() {
  const [isPending, startTransition] = useTransition();
  // 1. Define your form.
  const form = useForm<BlogCreationType>({
    resolver: zodResolver(blogCreationSchema),
    defaultValues: {
      title: "",
      content: "",
      thumbnail: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: BlogCreationType) {
    startTransition(async () => {
      await createBlog(values);
      form.reset();
      toast.success("Blog created successfully");
    });
  }
  return (
    <Card className="max-w-xl mx-auto w-full">
      <CardHeader>
        <CardTitle>Create a new blog</CardTitle>
        <CardDescription>
          Create a new blog with the following form
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="thumbnail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Thumbnail URL</FormLabel>
                  <FormControl>
                    <Input placeholder="Thumbnail" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Content" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isPending}>
              {isPending ? "Creating..." : "Create"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
