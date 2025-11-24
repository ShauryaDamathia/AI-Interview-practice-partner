import React from "react";
import { CopyrightIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex justify-center items-center">
        {/* Copyright Section */}
        <div className="flex items-center text-sm">
          <CopyrightIcon className="mr-2 h-5 w-5 text-gray-400" />
          <span>{new Date().getFullYear()} Train&Gain AI. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
