import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { Shield, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signin logic
    console.log("Form submitted:", formData);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <Layout>
      <div className="w-full min-h-screen py-20 px-4">
        <div className="max-w-md mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-cyan-500" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
            <p className="text-gray-400">
              Sign in to continue your learning journey
            </p>
          </motion.div>
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="you@example.com" required />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input type={showPassword ? "text" : "password"} id="password" name="password" value={formData.password} onChange={handleChange} className="w-full pl-10 pr-12 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="••••••••" required />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300">
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <div className="flex justify-end mt-2">
                  <Link to="/forgot-password" className="text-sm text-cyan-500 hover:text-cyan-400">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <motion.button whileHover={{
              scale: 1.01
            }} whileTap={{
              scale: 0.99
            }} type="submit" className="w-full px-4 py-3 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors flex items-center justify-center">
                Sign In
              </motion.button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Don't have an account?{" "}
                <Link to="/signup" className="text-cyan-500 hover:text-cyan-400">
                  Sign up
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>;
}