import React from "react";
import { Header } from "./components/Header";
import { Shield, Code, Target, Users, ChevronRight, Terminal, Brain, Lock } from "lucide-react";
export function App() {
  return <div className="min-h-screen bg-gray-900 text-white">
      <Header />
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
          <h2 className="text-3xl font-bold text-center mb-12">
            Learning Paths
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg bg-gray-800/50">
              <Shield className="text-cyan-500 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Network Security Fundamentals</li>
                <li>• Ethical Hacking</li>
                <li>• Security Analysis</li>
                <li>• Incident Response</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg bg-gray-800/50">
              <Code className="text-cyan-500 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Computer Science</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Programming Fundamentals</li>
                <li>• Data Structures & Algorithms</li>
                <li>• Web Development</li>
                <li>• System Architecture</li>
              </ul>
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
    </div>;
}