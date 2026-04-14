"use client";
import * as React from "react";
import { UserButton, OrganizationSwitcher, useAuth, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { Home as HomeIcon } from "lucide-react";

const Nav: React.FC = () => {
  const { isLoaded, isSignedIn } = useAuth();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group transition-all">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-100 group-hover:scale-110 transition-transform">
              <HomeIcon size={20} />
            </div>
            <h1 className="font-bold text-xl text-slate-900 tracking-tight">
              RJ <span className="text-blue-600">Insure</span>
            </h1>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">Platform</Link>
            <Link href="/" className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">Pricing</Link>
            <Link href="/" className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">Developers</Link>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          {!isLoaded ? (
            <div className="w-20 h-8 bg-slate-100 animate-pulse rounded-lg" />
          ) : isSignedIn ? (
            <>
              <OrganizationSwitcher 
                afterSelectOrganizationUrl="/org/:slug"
                afterCreateOrganizationUrl="/org/:slug"
                appearance={{
                  elements: {
                    rootBox: "hover:bg-slate-50 rounded-lg transition-colors p-1",
                    organizationSwitcherTrigger: "focus:shadow-none focus:ring-0 text-slate-600 font-medium"
                  }
                }}
              />
              <div className="h-6 w-[1px] bg-slate-200 mx-2" />
              <UserButton appearance={{ elements: { userButtonAvatarBox: "w-9 h-9 border border-slate-200 shadow-sm" } }} />
            </>
          ) : (
            <div className="flex items-center gap-4">
              <SignInButton mode="modal">
                <button className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                  Sign In
                </button>
              </SignInButton>
              <Link href="/sign-up">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-blue-100 transition-all active:scale-95">
                  Join Now
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Nav;


