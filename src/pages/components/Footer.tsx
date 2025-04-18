import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left">
          &copy; {year} The Impossible Store. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to="business/privacy" className="text-sm hover:underline">
            Privacy Policy
          </Link>
          <Link to="business/TOS" className="text-sm hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;