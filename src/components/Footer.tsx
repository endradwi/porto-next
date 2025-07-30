"use client";

import { motion } from "framer-motion";
// import { useState } from "react";
import {  Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Footer = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
    
  //   // Simulate form submission
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     setFormData({ name: "", email: "", subject: "", message: "" });
  //     alert("Thank you for your feedback! I'll get back to you soon.");
  //   }, 1000);
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <footer id="contact" className="bg-[#13005A] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Feel free to leave your feedback and suggestions. Feel free to reach out if you have any questions or just want to say hello!
          </p>
        </motion.div> */}

        {/* Contact Information & Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-[#03C988]">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-[#03C988] w-5 h-5" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-300">Jakarta, Indonesia</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="text-[#03C988] w-5 h-5" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">endra.dwi.jamaludin@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="text-[#03C988] w-5 h-5" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-300">+62 812-3456-7890</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-[#03C988]">Follow Me</h3>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://github.com/endradwi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 bg-[#03C988] text-[#13005A] px-4 py-3 rounded-lg font-semibold hover:bg-[#02A876] transition-all duration-200"
              >
                <Github size={20} />
                GitHub
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/endrdwijamaludin"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 bg-[#03C988] text-[#13005A] px-4 py-3 rounded-lg font-semibold hover:bg-[#02A876] transition-all duration-200"
              >
                <Linkedin size={20} />
                LinkedIn
              </motion.a>
              
            </div>
          </div>
        </motion.div>

        {/* <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#1C82AD] border border-[#03C988] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03C988] focus:border-transparent text-white placeholder-gray-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#1C82AD] border border-[#03C988] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03C988] focus:border-transparent text-white placeholder-gray-300"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#1C82AD] border border-[#03C988] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03C988] focus:border-transparent text-white placeholder-gray-300"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 bg-[#1C82AD] border border-[#03C988] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03C988] focus:border-transparent resize-none text-white placeholder-gray-300"
              placeholder="Your feedback and suggestions..."
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-[#03C988] text-[#13005A] px-6 py-3 rounded-lg font-semibold hover:bg-[#02A876] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mx-auto"
          >
            <Send size={18} />
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form> */}

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 pt-8 border-t border-[#03C988]"
        >
          <p className="text-gray-400">
            © 2024 Endra Dwi Jamaludin. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 