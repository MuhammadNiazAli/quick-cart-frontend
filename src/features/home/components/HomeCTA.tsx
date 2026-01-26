/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSubscribe } from "@/hooks/dealsubscribe/useSubscribe";

const HomeCTA = () => {
  const [email, setEmail] = useState("");

  const { mutate: subscribe, isPending } = useSubscribe();

  const [toast, setToast] = useState<{
    show: boolean;
    type: "success" | "error";
    text: string;
  }>({ show: false, type: "success", text: "" });

  const getRole = () => {
    if (typeof document !== "undefined") {
      return document.cookie
        .split("; ")
        .find((row) => row.startsWith("role="))
        ?.split("=")[1];
    }
    return null;
  };

  const showToast = (type: "success" | "error", text: string) => {
    setToast({ show: true, type, text });
    window.setTimeout(() => {
      setToast((p) => ({ ...p, show: false }));
    }, 2600);
  };

  const handleSubscribe = () => {
    const role = getRole();

    if (role === "partner") {
      showToast("error", "This action is not allowed for your role");
      return;
    }

    const trimmed = email.trim();

    if (!trimmed) {
      showToast("error", "Please enter your email");
      return;
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    if (!isValidEmail) {
      showToast("error", "Please enter a valid email");
      return;
    }

    subscribe(
      { email: trimmed, discount: 20 },
      {
        onSuccess: () => {
          setEmail("");
          showToast("success", "Thank you for subscribing!");
        },
        onError: (error: any) => {
          showToast("error", error?.message || "Subscription failed");
        },
      },
    );
  };

  return (
    <div className="w-full bg-white py-16 md:py-20 lg:py-24 lg:-mb-40">
      <div
        className={`fixed left-1/2 top-6 z-9999 -translate-x-1/2 transition-all duration-300 ${
          toast.show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
        aria-live="polite"
        aria-atomic="true"
      >
        <div
          className={`flex items-center gap-2 rounded-xl border px-4 py-3 shadow-lg backdrop-blur-sm ${
            toast.type === "success"
              ? "bg-white/95 border-emerald-200"
              : "bg-white/95 border-rose-200"
          }`}
        >
          <span
            className={`inline-flex h-2.5 w-2.5 rounded-full ${
              toast.type === "success" ? "bg-emerald-500" : "bg-rose-500"
            }`}
          />
          <p className="text-sm font-medium text-[#374151]">{toast.text}</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-15">
        <div className="rounded-2xl bg-[#E6E9F2] px-0 py-10 md:px-12 lg:px-16 xl:px-0">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-8 lg:gap-12">
            <div className="w-full max-w-55 md:max-w-65 lg:ml-20 lg:max-w-50 flex justify-center md:justify-start">
              <Image
                src="/assets/jbl_soundbox_image.png"
                alt="JBL Soundbox"
                width={200}
                height={500}
                className="h-auto w-full object-contain"
                priority
              />
            </div>

            <div className="text-center max-w-xl flex flex-col justify-center">
              <h2 className="text-3xl font-bold leading-tight text-[#374151] md:text-4xl lg:text-3xl -mb-3">
                Level Up Your
                <br />
                Gaming Experience
              </h2>

              <p className="mt-5 text-base text-[#374151ac] md:text-lg lg:text-[15px] -mb-6">
                From immersive sound to precise controls—
                <br className="hidden sm:block" />
                everything you need to win
              </p>

              <div className="mt-8 mb-10">
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 rounded-[5px] bg-orange-600 px-10 py-2.5 text-base font-semibold text-white shadow-md transition-all md:px-10 md:py-2.5 md:text-sm group"
                >
                  Buy now
                  <Image
                    src="/assets/arrow_icon_white.svg"
                    alt="Arrow"
                    width={16}
                    height={20}
                    className="transition-transform duration-300 group-hover:translate-x-1.5 -ml-2"
                  />
                </Link>
              </div>
            </div>

            <div className="w-full max-w-100 md:max-w-65 lg:max-w-75 flex justify-center -mt-11 md:justify-end">
              <Image
                src="/assets/md_controller_image.png"
                alt="Xbox Controller"
                width={400}
                height={400}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-medium text-[#374151] md:text-4xl">
            Subscribe now & get 20% off
          </h3>

          <p className="mt-3 text-base text-gray-600/70 font-medium md:text-[16px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <div className="mt-8 flex items-center justify-center">
            <input
              type="email"
              placeholder="Enter your email id"
              className="w-full max-w-md rounded-l-[5px] rounded-r-none border border-gray-300 px-5 py-2.5 text-base md:py-2.75"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSubscribe();
              }}
              disabled={isPending}
            />
            <button
              className="rounded-r-[5px] bg-orange-600 px-8 py-2.5 text-base font-normal text-white shadow-md transition-all md:px-10 md:py-2.5 md:text-lg cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              onClick={handleSubscribe}
              disabled={isPending}
              type="button"
            >
              {isPending ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCTA;
