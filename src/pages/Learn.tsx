import React from "react";
import { Layout } from "../components/Layout";
import { CyberGrid } from "../components/animations/CyberGrid";
import { Book, Video, CheckCircle, Trophy, ArrowRight } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import { AnimatedCard } from "../components/AnimatedCard";
import { motion } from "framer-motion";
export function Learn() {
  const learningTracks = [{
    title: "Cybersecurity Fundamentals",
    description: "Master the basics of cybersecurity and build a strong foundation",
    modules: 12,
    hours: 40,
    level: "Beginner"
  }, {
    title: "Advanced Web Security",
    description: "Learn to identify and fix security vulnerabilities in web applications",
    modules: 8,
    hours: 35,
    level: "Intermediate"
  }, {
    title: "Computer Science Essentials",
    description: "Core computer science concepts and programming fundamentals",
    modules: 15,
    hours: 50,
    level: "Beginner"
  }];
  return <Layout>
      <CyberGrid />
      <AnimatedSection>
        <section className="w-full py-20 px-4 bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.h1 initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="text-4xl font-bold mb-6">
              Learning Paths
            </motion.h1>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="text-xl text-gray-400 mb-8 max-w-2xl">
              Structured learning paths designed to take you from beginner to
              expert in cybersecurity and computer science.
            </motion.p>
          </div>
        </section>
      </AnimatedSection>
      <section className="w-full py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningTracks.map((track, index) => <AnimatedCard key={index} delay={index * 0.1}>
                <div className="border border-gray-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all">
                  <h3 className="text-xl font-semibold mb-3">{track.title}</h3>
                  <p className="text-gray-400 mb-4">{track.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <motion.div whileHover={{
                  scale: 1.05
                }} className="flex items-center gap-1">
                      <Book size={16} />
                      {track.modules} modules
                    </motion.div>
                    <motion.div whileHover={{
                  scale: 1.05
                }} className="flex items-center gap-1">
                      <Video size={16} />
                      {track.hours} hours
                    </motion.div>
                  </div>
                  <motion.button whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} className="w-full px-4 py-2 mt-2 bg-gray-800 hover:bg-gray-700 rounded-md text-gray-300 hover:text-white transition-colors flex items-center justify-center gap-2">
                    Start Learning <ArrowRight size={16} />
                  </motion.button>
                </div>
              </AnimatedCard>)}
          </div>
        </div>
      </section>
      <AnimatedSection delay={0.3}>
        <section className="w-full py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <CheckCircle className="text-cyan-500 mb-4" size={24} />
                <h3 className="text-xl font-semibold mb-2">
                  Self-Paced Learning
                </h3>
                <p className="text-gray-400">
                  Learn at your own pace with lifetime access to all course
                  materials.
                </p>
              </div>
              <div className="p-6">
                <Trophy className="text-cyan-500 mb-4" size={24} />
                <h3 className="text-xl font-semibold mb-2">
                  Earn Certificates
                </h3>
                <p className="text-gray-400">
                  Get certified upon completion of each learning path.
                </p>
              </div>
              <div className="p-6">
                <Video className="text-cyan-500 mb-4" size={24} />
                <h3 className="text-xl font-semibold mb-2">Video Content</h3>
                <p className="text-gray-400">
                  High-quality video lessons with practical demonstrations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </Layout>;
}