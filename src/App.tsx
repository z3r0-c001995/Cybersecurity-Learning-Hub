import React from "react";
import { Layout } from "./components/Layout";
import { NetworkBackground } from "./components/animations/NetworkBackground";
import { Shield, Code, ChevronRight, Terminal, Brain, Lock, Clock, BarChart, Users, Laptop, Network, Shield as ShieldIcon, Database, Globe, Server } from "lucide-react";
export function App() {
  return <Layout>
      <NetworkBackground />
      <section className="w-full py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Master <span className="text-cyan-500">Cybersecurity</span> and
            <br /> Computer Science
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Learn, practice, and grow with expert mentorship in a supportive
            community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-cyan-500 rounded-md hover:bg-cyan-600 flex items-center justify-center">
              Start Learning <ChevronRight className="ml-2" size={20} />
            </button>
            <button className="px-8 py-3 border border-gray-700 rounded-md hover:border-gray-600">
              Find a Mentor
            </button>
          </div>
        </div>
      </section>
      <section className="w-full py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-colors">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <Terminal className="text-cyan-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Interactive Learning
              </h3>
              <p className="text-gray-400">
                Hands-on exercises and real-world projects to build practical
                skills
              </p>
            </div>
            <div className="p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-colors">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="text-cyan-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Mentorship</h3>
              <p className="text-gray-400">
                Connect with industry professionals for guidance and support
              </p>
            </div>
            <div className="p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-colors">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <Lock className="text-cyan-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Practice Labs</h3>
              <p className="text-gray-400">
                Safe environments to practice security techniques and coding
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Featured Courses
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Explore our comprehensive curriculum designed by industry experts
          </p>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Code className="text-cyan-500" size={28} />
              <h3 className="text-2xl font-bold">Computer Science</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{
              title: "Python Programming",
              description: "Master Python fundamentals and advanced concepts",
              duration: "8 weeks",
              level: "Beginner",
              icon: <Laptop className="text-cyan-500" size={24} />
            }, {
              title: "Data Structures & Algorithms",
              description: "Essential computer science concepts and implementations",
              duration: "12 weeks",
              level: "Intermediate",
              icon: <Database className="text-cyan-500" size={24} />
            }, {
              title: "Web Development",
              description: "Full-stack web development with modern technologies",
              duration: "16 weeks",
              level: "Intermediate",
              icon: <Globe className="text-cyan-500" size={24} />
            }].map((course, index) => <div key={index} className="p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                    {course.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{course.title}</h4>
                  <p className="text-gray-400 mb-4">{course.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <BarChart size={16} />
                      {course.level}
                    </div>
                  </div>
                  <button className="mt-4 w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-gray-300 hover:text-white transition-colors">
                    View Course
                  </button>
                </div>)}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <ShieldIcon className="text-cyan-500" size={28} />
              <h3 className="text-2xl font-bold">Cybersecurity</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{
              title: "Network Security",
              description: "Learn to secure and protect network infrastructure",
              duration: "10 weeks",
              level: "Intermediate",
              icon: <Network className="text-cyan-500" size={24} />
            }, {
              title: "Ethical Hacking",
              description: "Master penetration testing and security assessment",
              duration: "14 weeks",
              level: "Advanced",
              icon: <Terminal className="text-cyan-500" size={24} />
            }, {
              title: "Cloud Security",
              description: "Secure cloud infrastructure and applications",
              duration: "12 weeks",
              level: "Intermediate",
              icon: <Server className="text-cyan-500" size={24} />
            }].map((course, index) => <div key={index} className="p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                    {course.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{course.title}</h4>
                  <p className="text-gray-400 mb-4">{course.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <BarChart size={16} />
                      {course.level}
                    </div>
                  </div>
                  <button className="mt-4 w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-gray-300 hover:text-white transition-colors">
                    View Course
                  </button>
                </div>)}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 px-4 bg-gradient-to-b from-gray-800/50 to-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-400 mb-8">
            Join thousands of students learning cybersecurity and computer
            science
          </p>
          <button className="px-8 py-3 bg-cyan-500 rounded-md hover:bg-cyan-600">
            Create Free Account
          </button>
        </div>
      </section>
    </Layout>;
}