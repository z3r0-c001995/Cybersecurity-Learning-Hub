import React, { useState } from "react";
import { Shield, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="w-full bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-cyan-500" />
            <span className="ml-2 text-xl font-bold text-white">
              CyberLearn
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link to="/learn" className="text-gray-300 hover:text-white">
              Learn
            </Link>
            <Link to="/practice" className="text-gray-300 hover:text-white">
              Practice
            </Link>
            <Link to="/mentorship" className="text-gray-300 hover:text-white">
              Mentorship
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden md:block px-4 py-2 rounded-md bg-cyan-500 text-white hover:bg-cyan-600">
              Get Started
            </button>
            <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
            <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-white">
              Home
            </Link>
            <Link to="/learn" className="block px-3 py-2 text-gray-300 hover:text-white">
              Learn
            </Link>
            <Link to="/practice" className="block px-3 py-2 text-gray-300 hover:text-white">
              Practice
            </Link>
            <Link to="/mentorship" className="block px-3 py-2 text-gray-300 hover:text-white">
              Mentorship
            </Link>
            <button className="w-full mt-2 px-4 py-2 rounded-md bg-cyan-500 text-white hover:bg-cyan-600">
              Get Started
            </button>
          </div>
        </div>}
    </header>;
}