import React from "react";
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react";
import { Layout } from "../components/Layout";
export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };
  return <Layout>
      <section className="w-full py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            Have questions? We're here to help. Reach out to our team for
            support or inquiries.
          </p>
        </div>
      </section>
      <section className="w-full py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Your name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input type="email" className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="your@email.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors h-32" placeholder="Your message" required></textarea>
                </div>
                <button type="submit" className="w-full px-6 py-3 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-cyan-500 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">support@cyberlearn.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-cyan-500 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-cyan-500 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-400">
                      123 Tech Street, San Francisco, CA 94105
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageSquare className="text-cyan-500 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Live Chat</h3>
                    <p className="text-gray-400">
                      Available Monday to Friday, 9am - 5pm PST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
}