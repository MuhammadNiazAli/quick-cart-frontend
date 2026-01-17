"use client";

import React, { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const ContactUsSection: React.FC = () => {
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
    alert("Thank you for contacting us! We will get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We’d love to hear from you! Send us a message or use the contact
            info below.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
         
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                <MapPin className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold">Our Address</h4>
                <p className="text-gray-600 text-sm">
                  123 Ecommerce St, Cityville, Country
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                <Mail className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold">Email Us</h4>
                <p className="text-gray-600 text-sm">support@ecommerce.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                <Phone className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold">Call Us</h4>
                <p className="text-gray-600 text-sm">+123 456 7890</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-4"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-orange-600 px-6 py-3 text-white font-semibold hover:bg-orange-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
