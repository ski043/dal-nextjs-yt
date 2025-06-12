import { z } from "zod";

export const blogCreationSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  thumbnail: z.string().min(1),
});

export type BlogCreationType = z.infer<typeof blogCreationSchema>;
