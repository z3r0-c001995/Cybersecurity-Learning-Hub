import React from "react";
import { Layout } from "../components/Layout";
import { MatrixRain } from "../components/animations/MatrixRain";
import { ArrowRight, Terminal, Shield, Target } from "lucide-react";
export function Practice() {
  const challenges = [{
    title: "Web Application Security",
    description: "Learn to identify and exploit common web vulnerabilities",
    difficulty: "Intermediate",
    category: "Security"
  }, {
    title: "Network Penetration Testing",
    description: "Practice network security assessment techniques",
    difficulty: "Advanced",
    category: "Security"
  }, {
    title: "Algorithm Challenges",
    description: "Solve complex algorithmic problems and optimize solutions",
    difficulty: "Beginner",
    category: "Programming"
  }, {
    title: "Cryptography Basics",
    description: "Practice encryption and decryption techniques",
    difficulty: "Intermediate",
    category: "Security"
  }, {
    title: "Database Security",
    description: "Learn to secure and protect database systems",
    difficulty: "Advanced",
    category: "Security"
  }, {
    title: "Code Review Practice",
    description: "Find and fix security vulnerabilities in code",
    difficulty: "Intermediate",
    category: "Programming"
  }];
  return <Layout>
      <MatrixRain />
      <section className="w-full py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Practice Labs</h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            Hands-on practice environments for both cybersecurity and
            programming skills.
          </p>
        </div>
      </section>
      <section className="w-full py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => <div key={index} className="border border-gray-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all">
                <h3 className="text-xl font-semibold mb-3">
                  {challenge.title}
                </h3>
                <p className="text-gray-400 mb-4">{challenge.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="px-3 py-1 bg-gray-800 rounded-full">
                    {challenge.difficulty}
                  </span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full">
                    {challenge.category}
                  </span>
                </div>
                <button className="w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-gray-300 hover:text-white transition-colors flex items-center justify-center gap-2">
                  Start Practice <ArrowRight size={16} />
                </button>
              </div>)}
          </div>
        </div>
      </section>
      <section className="w-full py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Practice Categories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-gray-800/50">
              <Terminal className="text-cyan-500 mb-4" size={24} />
              <h3 className="text-xl font-semibold mb-2">Programming Labs</h3>
              <p className="text-gray-400">
                Interactive coding environments for practicing programming
                concepts.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gray-800/50">
              <Shield className="text-cyan-500 mb-4" size={24} />
              <h3 className="text-xl font-semibold mb-2">Security Labs</h3>
              <p className="text-gray-400">
                Safe environments for practicing security techniques and tools.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gray-800/50">
              <Target className="text-cyan-500 mb-4" size={24} />
              <h3 className="text-xl font-semibold mb-2">CTF Challenges</h3>
              <p className="text-gray-400">
                Capture the flag challenges to test your skills in real
                scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
}