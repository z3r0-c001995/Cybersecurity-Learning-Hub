import React from "react";
import { Users, Star, MessageSquare, Calendar } from "lucide-react";
import { Layout } from "../components/Layout";
export function Mentorship() {
  const mentors = [{
    name: "Sarah Johnson",
    role: "Security Engineer",
    specialty: "Web Security",
    experience: "8 years",
    rating: 4.9,
    availability: "Available"
  }, {
    name: "Michael Chen",
    role: "Senior Developer",
    specialty: "Full-Stack Development",
    experience: "10 years",
    rating: 4.8,
    availability: "Limited"
  }, {
    name: "Emma Williams",
    role: "Cybersecurity Analyst",
    specialty: "Network Security",
    experience: "6 years",
    rating: 4.9,
    availability: "Available"
  }];
  return <Layout>
      <section className="w-full py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Expert Mentorship</h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            Connect with experienced professionals for personalized guidance in
            your learning journey.
          </p>
        </div>
      </section>
      <section className="w-full py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Available Mentors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => <div key={index} className="border border-gray-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
                    <Users className="text-cyan-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{mentor.name}</h3>
                    <p className="text-gray-400">{mentor.role}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-400">
                    <span className="font-semibold text-white">Specialty:</span>{" "}
                    {mentor.specialty}
                  </p>
                  <p className="text-gray-400">
                    <span className="font-semibold text-white">
                      Experience:
                    </span>{" "}
                    {mentor.experience}
                  </p>
                  <div className="flex items-center gap-2">
                    <Star className="text-yellow-500" size={16} />
                    <span>{mentor.rating}/5.0</span>
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${mentor.availability === "Available" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}`}>
                    {mentor.availability}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-md text-white transition-colors flex items-center justify-center gap-2">
                    <MessageSquare size={16} /> Message
                  </button>
                  <button className="flex-1 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-gray-300 hover:text-white transition-colors flex items-center justify-center gap-2">
                    <Calendar size={16} /> Schedule
                  </button>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </Layout>;
}