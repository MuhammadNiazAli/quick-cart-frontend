"use client";

import React, { useState } from "react";
import { Mail, User, MessageSquare } from "lucide-react";

const ContactUsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you! We will get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-2xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Contact Us
          </h2>
          <p className="mt-3 text-gray-600">
            Have questions or need assistance? Send us a message.
          </p>
        </div>

        
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-4"
        >
          
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

         
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

        
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            />
          </div>

         
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-500 text-white font-semibold py-3 rounded-full transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUsForm;
