"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";
import { createBlog } from "../actions";
import { useOrganization } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ArrowLeft, Send, Sparkles } from "lucide-react";

export default function CreateBlogPage() {
  const [blogContent, setBlogContent] = React.useState("");
  const [blogTitle, setBlogTitle] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const { organization, isLoaded } = useOrganization();
  const router = useRouter();

  const handleCreateBlog = async () => {
    if (!organization?.id || !blogTitle || !blogContent) return;
    
    setLoading(true);
    try {
      await createBlog({
        body: blogContent.trim(),
        orgId: organization.id,
        title: blogTitle,
      });
      router.push(`/org/${organization.slug || organization.id}`);
    } catch (error) {
      console.error("Failed to create blog:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isLoaded) return <div className="h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-24">
        
        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors mb-12 text-sm font-semibold uppercase tracking-widest"
        >
          <ArrowLeft size={16} />
          Go Back
        </button>

        <header className="space-y-4 mb-16">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-tighter">
            <Sparkles size={16} />
            <span>Composer</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Create New Entry</h1>
          <p className="text-slate-500 text-lg">
            Draft your organization's perspective. Content will be immediately isolated to the <span className="text-slate-900 font-semibold">{organization?.name}</span> workspace.
          </p>
        </header>

        <div className="space-y-10">
          <div className="space-y-4">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Entry Title</label>
            <Input
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
              placeholder="e.g. Quarterly Review Q3 2026"
              className="h-16 text-xl border-slate-100 focus:border-blue-500 focus:ring-0 rounded-none border-t-0 border-l-0 border-r-0 border-b-2 transition-all px-0"
            />
          </div>
          
          <div className="space-y-4">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Content Body</label>
            <Textarea
              value={blogContent}
              onChange={(e) => setBlogContent(e.target.value)}
              placeholder="The future of our organization starts with these words..."
              className="min-h-[400px] text-lg border-slate-100 focus:border-blue-500 focus:ring-0 rounded-xl transition-all resize-none p-6 bg-slate-50/50"
            />
          </div>

          <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
            <div className="text-xs text-slate-400 font-medium">
              Autosaved to draft • {new Date().toLocaleDateString()}
            </div>
            <Button 
              onClick={handleCreateBlog} 
              disabled={loading || !blogTitle || !blogContent}
              className="bg-black text-white hover:bg-slate-800 h-14 px-10 rounded-full font-bold shadow-xl shadow-slate-200 transition-all active:scale-95"
            >
              {loading ? "Publishing..." : "Publish Entry"}
              <Send size={18} className="ml-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
