"use client";
import * as React from "react";
import { UserButton } from "@clerk/nextjs";
import { OrganizationSwitcher } from "@clerk/nextjs";
const Nav: React.FC = () => {
  return (
    <nav className="border-2 border-gray-200 p-4 flex items-center justify-between ">
      <div>
        <h1 className="font-semibold text-2xl">RJ Insure</h1>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <OrganizationSwitcher afterSelectOrganizationUrl="/org/:slug" />
        <UserButton />
      </div>
    </nav>
  );
};
export default Nav;
