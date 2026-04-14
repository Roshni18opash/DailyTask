"use client";
import Nav from "@/app/components/Nav";
import { OrganizationSwitcher, useAuth, SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Box } from "lucide-react";
import * as React from "react";

export default function Home() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return <div className="h-screen flex items-center justify-center text-slate-400">Loading...</div>;

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Nav />
      
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-10 text-center">
          
          <div className="space-y-4">
            <div className="mx-auto w-20 h-20 bg-card rounded-3xl shadow-2xl flex items-center justify-center border border-primary/20 relative group">
              <div className="absolute inset-0 bg-primary/10 blur-xl group-hover:bg-primary/20 transition-all rounded-full" />
              <Box className="text-primary relative" size={40} />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-foreground tracking-tighter">Project Console</h1>
              <p className="text-muted-foreground text-sm font-medium">Enterprise multi-tenant management</p>
            </div>
          </div>

          <div className="bg-card p-10 rounded-[3rem] border border-border shadow-2xl shadow-black/50 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16" />
            
            {!isSignedIn ? (
              <div className="space-y-6 relative">
                <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                  Authentication required to access <br /> isolated tenant environments.
                </p>
                <SignInButton mode="modal">
                  <Button className="w-full bg-primary hover:bg-primary/90 hover:scale-[1.02] text-white h-16 rounded-2xl font-bold transition-all shadow-xl shadow-primary/20">
                    Sign In to Continue
                    <ArrowRight size={20} className="ml-2" />
                  </Button>
                </SignInButton>
              </div>
            ) : (
              <div className="space-y-8 relative">
                <div className="space-y-2">
                  <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">Workspace Selection</p>
                  <p className="text-foreground/80 text-sm">Select an verified organization to enter.</p>
                </div>
                
                <div className="flex justify-center border-b border-primary/10 pb-8">
                  <OrganizationSwitcher 
                    afterSelectOrganizationUrl="/org/:slug"
                    afterCreateOrganizationUrl="/org/:slug"
                    appearance={{
                      elements: {
                        rootBox: "w-full",
                        organizationSwitcherTrigger: "w-full justify-center h-16 rounded-2xl border-border bg-background hover:bg-accent text-foreground font-bold transition-all px-6",
                        organizationPreviewMainIdentifier: "text-foreground font-bold",
                        organizationPreviewSecondaryIdentifier: "text-muted-foreground",
                      }
                    }}
                  />
                </div>

                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em]">
                    Isolation Protocols Active
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="pt-8 border-t border-border/50">
            <div className="flex items-center justify-center gap-6">
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest hover:text-primary transition-colors cursor-help">
                Build v1.4.2
              </p>
              <div className="w-1 h-1 bg-border rounded-full" />
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest hover:text-primary transition-colors cursor-help">
                Node: US-EAST
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

