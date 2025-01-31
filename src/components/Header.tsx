import React, { useState } from "react";
import { Shield, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navItems = [{
    path: "/",
    label: "Home"
  }, {
    path: "/learn",
    label: "Learn"
  }, {
    path: "/practice",
    label: "Practice"
  }, {
    path: "/mentorship",
    label: "Mentorship"
  }, {
    path: "/about",
    label: "About"
  }, {
    path: "/contact",
    label: "Contact"
  }];
  const handleGetStarted = () => {
    navigate("/signup");
  };
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    type: "spring",
    stiffness: 100,
    damping: 20
  }} className="w-full bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div whileHover={{
          scale: 1.05
        }} className="flex items-center">
            <Shield className="h-8 w-8 text-cyan-500" />
            <span className="ml-2 text-xl font-bold text-white">
              CyberLearn
            </span>
          </motion.div>
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map(item => <motion.div key={item.path} whileHover={{
            y: -2
          }} transition={{
            type: "spring",
            stiffness: 300
          }}>
                <Link to={item.path} className="text-gray-300 hover:text-white transition-colors">
                  {item.label}
                </Link>
              </motion.div>)}
            <Link to="/signin" className="text-gray-300 hover:text-white transition-colors">
              Sign In
            </Link>
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} onClick={() => navigate("/signup")} className="px-4 py-2 rounded-md bg-cyan-500 text-white hover:bg-cyan-600 transition-colors">
              Get Started
            </motion.button>
          </nav>
          <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && <div className="md:hidden">
          <nav className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
            {navItems.map(item => <Link key={item.path} to={item.path} className="block px-3 py-2 text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </Link>)}
            <Link to="/signin" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
              Sign In
            </Link>
            <button onClick={() => {
          navigate("/signup");
          setIsMenuOpen(false);
        }} className="w-full mt-2 px-4 py-2 rounded-md bg-cyan-500 text-white hover:bg-cyan-600 transition-colors">
              Get Started
            </button>
          </nav>
        </div>}
    </motion.header>;
}