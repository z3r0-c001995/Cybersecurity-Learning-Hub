import React from "react";
import { Shield, Target, Users, Award } from "lucide-react";
import { Layout } from "../components/Layout";
export function About() {
  return <Layout>
      <section className="w-full py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About CyberLearn</h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            Empowering the next generation of cybersecurity professionals and
            software engineers.
          </p>
        </div>
      </section>
      <section className="w-full py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-400 mb-6">
                At CyberLearn, we're committed to providing high-quality
                education in cybersecurity and computer science. Our platform is
                designed to bridge the gap between theory and practical
                application, ensuring our students are well-prepared for
                real-world challenges.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="text-cyan-500 mt-1" size={20} />
                  <p className="text-gray-400">
                    Industry-leading curriculum developed by experts
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="text-cyan-500 mt-1" size={20} />
                  <p className="text-gray-400">
                    Practical, hands-on learning experiences
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="text-cyan-500 mt-1" size={20} />
                  <p className="text-gray-400">
                    Supportive community of learners and professionals
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-gray-800/50 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-500 mb-2">
                    10K+
                  </div>
                  <div className="text-gray-400">Active Students</div>
                </div>
                <div className="p-6 bg-gray-800/50 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-500 mb-2">
                    50+
                  </div>
                  <div className="text-gray-400">Expert Mentors</div>
                </div>
                <div className="p-6 bg-gray-800/50 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-500 mb-2">
                    95%
                  </div>
                  <div className="text-gray-400">Success Rate</div>
                </div>
                <div className="p-6 bg-gray-800/50 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-500 mb-2">
                    200+
                  </div>
                  <div className="text-gray-400">Practice Labs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Why Choose CyberLearn?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-gray-800/50">
              <Award className="text-cyan-500 mb-4" size={24} />
              <h3 className="text-xl font-semibold mb-2">
                Industry Recognition
              </h3>
              <p className="text-gray-400">
                Our certifications are recognized by leading technology
                companies.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gray-800/50">
              <Target className="text-cyan-500 mb-4" size={24} />
              <h3 className="text-xl font-semibold mb-2">Practical Focus</h3>
              <p className="text-gray-400">
                Learn by doing with our hands-on labs and real-world projects.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gray-800/50">
              <Users className="text-cyan-500 mb-4" size={24} />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-400">
                Join a global community of cybersecurity enthusiasts and
                professionals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
}