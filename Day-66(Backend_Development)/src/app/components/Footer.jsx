import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-6 mt-auto text-center">
      <p>© 2026 Tech World. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <Link href="#" className="hover:text-blue-400">
          Privacy
        </Link>
        <Link href="#" className="hover:text-blue-400">
          Terms
        </Link>
        <Link href="#" className="hover:text-blue-400">
          Contact
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
