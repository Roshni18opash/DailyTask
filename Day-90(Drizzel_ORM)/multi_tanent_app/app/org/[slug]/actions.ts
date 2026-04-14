'use server'

import { blogTable, CreateBlogType } from "@/db/schema"
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from "drizzle-orm";


const db = drizzle(process.env.DATABASE_URL!);


export const createBlog = async (payload: CreateBlogType) => {
  const [result] = await db.insert(blogTable).values(payload).returning({
    id: blogTable.id
  })
  return result.id;
};

export const getBlogs = async (orgId: string) => {
  const blogs = await db.select().from(blogTable).where(eq(blogTable.orgId, orgId));
  // Map to plain objects to ensure RSC serialization
  return blogs.map(blog => ({ ...blog }));
};


export const deleteBlog = async (id: number) => {
  return await db.delete(blogTable).where(eq(blogTable.id, id));
};
