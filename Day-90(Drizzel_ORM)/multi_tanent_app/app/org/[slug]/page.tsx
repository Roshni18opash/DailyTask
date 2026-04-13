"use client";
import Nav from "@/app/components/Nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";
export default function OrgLandingPage() {
  const [blogContent, setBlogContent] = React.useState("");
  const [blogTitle, setBlogTitle] = React.useState("");
  return (
    <main>
      <Nav />
      <div className="grid w-full gap-2 p-10">
        <Input
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
          placeholder="Title"
        />
        <Textarea //this is controlled com
          value={blogContent}
          onChange={(e) => setBlogContent(e.target.value)}
          className="mt-2"
          placeholder="Enter your blog content..."
        />
        <Button size="sm" className="mt-2">
          create
        </Button>
      </div>
    </main>
  );
}
