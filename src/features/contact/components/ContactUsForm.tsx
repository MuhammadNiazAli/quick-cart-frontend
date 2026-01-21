"use client";

import React, { useMemo, useState } from "react";
import { Mail, User, MessageSquare, Users } from "lucide-react";

type ContactPerson = "niaz" | "ahsaan";

const ContactUsForm: React.FC = () => {
  const [contactTo, setContactTo] = useState<ContactPerson>("niaz");

  const contactMeta = useMemo(() => {
    return contactTo === "niaz"
      ? {
          label: "Muhammad Niaz Ali",
          email: "mrniazali132@gmail.com",
          phoneText: "0320 8050617",
          phoneHref: "+923208050617",
        }
      : {
          label: "Ahsaan Khan",
          email: "ahsaankhan.div@gmail.com",
          phoneText: "0308 5856344",
          phoneHref: "+923085856344",
        };
  }, [contactTo]);

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

    const payload = {
      ...formData,
      contactTo: contactMeta.label,
      contactEmail: contactMeta.email,
    };

    console.log(payload);
    alert(`Thanks! Your message will be sent to ${contactMeta.label}.`);

    setFormData({ name: "", email: "", message: "" });
    setContactTo("niaz");
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 lg:-mb-15">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Contact Us
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Choose who you want to contact, then send your message.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-4"
        >
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-900 flex items-center gap-2">
              <Users className="h-4 w-4 text-gray-500" />
              Contact Person
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setContactTo("niaz")}
                className={`rounded-xl border px-4 py-3 text-left transition cursor-pointer ${
                  contactTo === "niaz"
                    ? "border-orange-600 bg-orange-50"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <p className="font-semibold text-gray-900">Muhammad Niaz Ali</p>
                <p className="text-xs text-gray-600">mrniazali132@gmail.com</p>
                <p className="text-xs text-gray-600">0320 8050617</p>
              </button>

              <button
                type="button"
                onClick={() => setContactTo("ahsaan")}
                className={`rounded-xl border px-4 py-3 text-left transition cursor-pointer ${
                  contactTo === "ahsaan"
                    ? "border-orange-600 bg-orange-50"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <p className="font-semibold text-gray-900">Ahsaan Khan</p>
                <p className="text-xs text-gray-600">
                  ahsaankhan.div@gmail.com
                </p>
                <p className="text-xs text-gray-600">0308 5856344</p>
              </button>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed">
              Selected:{" "}
              <span className="font-semibold text-gray-700">
                {contactMeta.label}
              </span>{" "}
              •{" "}
              <a
                className="hover:text-orange-600 transition"
                href={`mailto:${contactMeta.email}`}
              >
                {contactMeta.email}
              </a>{" "}
              •{" "}
              <a
                className="hover:text-orange-600 transition"
                href={`tel:${contactMeta.phoneHref}`}
              >
                {contactMeta.phoneText}
              </a>
            </p>
          </div>

          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
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
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
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
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
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
