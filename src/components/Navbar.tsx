import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-[#800080] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Layout className="h-8 w-8 text-white" />
            <span className="text-white font-semibold text-xl">AI Templates</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}