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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            Ge<span className="border-b-3 border-orange-500 pb-1.5">t in Tou</span>ch
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            Have a question or want to collaborate? Send us a message or reach
            out using the details below.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-10 lg:grid-cols-2">
          <div className="space-y-5 sm:space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 shrink-0">
                <MapPin className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold">Our Location</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Available for remote collaboration and project-based work.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 shrink-0">
                <Mail className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold">
                  Email (Muhammad Niaz Ali)
                </h4>
                <a
                  href="mailto:mrniazali132@gmail.com"
                  className="text-gray-600 text-sm hover:text-orange-600 transition"
                >
                  mrniazali132@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 shrink-0">
                <Phone className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold">
                  Call / WhatsApp (Muhammad Niaz Ali)
                </h4>
                <a
                  href="tel:+923208050617"
                  className="text-gray-600 text-sm hover:text-orange-600 transition"
                >
                  0320 8050617
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 shrink-0">
                <Mail className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold">
                  Email (Ahsaan Khan)
                </h4>
                <a
                  href="mailto:ahsaankhan.div@gmail.com"
                  className="text-gray-600 text-sm hover:text-orange-600 transition"
                >
                  ahsaankhan.div@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 shrink-0">
                <Phone className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold">
                  Call / WhatsApp (Ahsaan Khan)
                </h4>
                <a
                  href="tel:+923085856344"
                  className="text-gray-600 text-sm hover:text-orange-600 transition"
                >
                  0308 5856344
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-4"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-orange-600 px-6 py-3 text-white font-semibold hover:bg-orange-500 transition"
            >
              Send Message
            </button>

            <p className="text-xs text-gray-500 text-center leading-relaxed">
              We usually respond within 24–48 hours on business days.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
