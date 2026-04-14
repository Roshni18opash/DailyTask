"use client";
import * as React from "react";
import { useOrganization } from "@clerk/nextjs";
import { SelectBlogType } from "@/db/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, BookText, Calendar, Building2, Trash2 } from "lucide-react";
import { createBlog, getBlogs, deleteBlog } from "./actions";

export default function OrgLandingPage() {
  const [blogContent, setBlogContent] = React.useState("");
  const [blogTitle, setBlogTitle] = React.useState("");
  const [blogs, setBlogs] = React.useState<SelectBlogType[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [isPublishing, setIsPublishing] = React.useState(false);

  const { organization, isLoaded } = useOrganization();

  const fetchBlogs = React.useCallback(async () => {
    if (organization?.id) {
      setLoading(true);
      try {
        const data = await getBlogs(organization.id);
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    }
  }, [organization?.id]);

  React.useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const handleCreateBlog = async () => {
    if (!organization?.id || !blogTitle || !blogContent) return;
    
    setIsPublishing(true);
    try {
      await createBlog({
        body: blogContent.trim(),
        orgId: organization.id,
        title: blogTitle,
      });
      setBlogTitle("");
      setBlogContent("");
      fetchBlogs();
    } catch (error) {
      console.error("Failed to create blog:", error);
    } finally {
      setIsPublishing(false);
    }
  };

  const handleDeleteBlog = async (id: number) => {
    if (!confirm("Are you sure you want to delete this entry?")) return;
    try {
      await deleteBlog(id);
      fetchBlogs();
    } catch (error) {
      console.error("Failed to delete blog:", error);
    }
  };

  if (!isLoaded) return <div className="h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto p-6 md:p-16 space-y-16">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-slate-100">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 font-bold text-xs uppercase tracking-[0.2em]">
              <Building2 size={14} />
              <span>Workspace Console</span>
            </div>
            <h1 className="text-5xl font-bold text-slate-900 tracking-tight leading-none">
              {organization?.name || "Organization"}
            </h1>
            <p className="text-slate-500 text-lg max-w-lg">
              Manage internal communications, publish updates, and maintain tenant-isolated documentation.
            </p>
          </div>
        </div>

        {/* Composer Section (Inline) */}
        <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 space-y-8">
           <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
            <Plus size={14} className="text-blue-600" />
            <span>New Entry</span>
          </div>
          <div className="space-y-6">
            <Input
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
              placeholder="Entry Title..."
              className="text-2xl font-bold border-none bg-transparent focus-visible:ring-0 px-0 placeholder:text-slate-300"
            />
            <Textarea
              value={blogContent}
              onChange={(e) => setBlogContent(e.target.value)}
              placeholder="Write something significant..."
              className="min-h-[140px] text-lg border-none bg-transparent focus-visible:ring-0 px-0 resize-none placeholder:text-slate-300"
            />
            <div className="pt-6 border-t border-slate-200 flex justify-end">
              <Button 
                onClick={handleCreateBlog} 
                disabled={isPublishing || !blogTitle || !blogContent}
                className="bg-black text-white hover:bg-slate-800 h-14 px-10 rounded-2xl font-bold transition-all"
              >
                {isPublishing ? "Publishing..." : "Publish Entry"}
              </Button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <BookText size={18} className="text-blue-600" />
              <h2>Internal Repository</h2>
              <span className="ml-2 text-xs font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded uppercase">
                {blogs.length} Entries
              </span>
            </div>
          </div>
          
          {loading ? (
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-48 bg-slate-50 animate-pulse rounded-3xl"></div>
              ))}
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-24 border-2 border-dashed border-slate-100 rounded-[2rem]">
              <p className="text-slate-400 font-medium">No entries found for this workspace.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {blogs.map((blog) => (
                <div 
                  key={blog.id} 
                  className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/50 transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                        <Calendar size={12} className="text-blue-600" />
                        <span>{new Date().toLocaleDateString()}</span>
                      </div>
                      <button 
                        onClick={() => handleDeleteBlog(blog.id)}
                        className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-slate-500 line-clamp-2 leading-relaxed text-sm">
                        {blog.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}




