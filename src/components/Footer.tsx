import React from "react";
import { Shield, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
export function Footer() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter submission
  };
  return <footer className="w-full bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-cyan-500" />
              <span className="ml-2 text-xl font-bold text-white">
                CyberLearn
              </span>
            </div>
            <p className="text-gray-400">
              Empowering the next generation of cybersecurity professionals and
              software engineers.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/mentorship" className="text-gray-400 hover:text-white transition-colors">
                  Mentorship
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Get the latest updates on new courses and cybersecurity trends.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors" required />
                <button type="submit" className="px-6 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </form>
            {/* Social Links */}
            <div className="mt-6">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} CyberLearn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}