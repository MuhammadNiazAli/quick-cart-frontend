"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { MoveRight } from "lucide-react";

const AccessAccount = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordsMatch = password === confirmPassword;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!passwordsMatch) return;
    console.log("Signup submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-3xl bg-stone-950 p-6 md:p-8 rounded-xl shadow-input">
        <h2 className="text-xl text-neutral-200 font-medium">
          Create <span className="text-[#EA580C]">Account</span>
        </h2>
        <p className="mt-1 text-sm text-neutral-300">
          Fill the details below to get started
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LabelInputContainer>
              <Label className="text-neutral-300">Full Name</Label>
              <Input
                placeholder="John Doe"
                className="bg-neutral-800 text-neutral-300"
                required
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label className="text-neutral-300">Phone Number</Label>
              <Input
                placeholder="+92 3xx xxxxxxx"
                type="tel"
                className="bg-neutral-800 text-neutral-300"
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label className="text-neutral-300">Email Address</Label>
              <Input
                placeholder="email@example.com"
                type="email"
                className="bg-neutral-800 text-neutral-300"
                required
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label className="text-neutral-300">Role</Label>
              <select className="h-10 rounded-md bg-neutral-800 text-neutral-300 px-3">
                <option>Viewer</option>
                <option>Partner</option>
              </select>
            </LabelInputContainer>
          </div>

          {/* PASSWORDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LabelInputContainer>
              <Label className="text-neutral-300">Password</Label>
              <Input
                placeholder="••••••••"
                type="password"
                className="bg-neutral-800 text-neutral-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label className="text-neutral-300">Confirm Password</Label>
              <Input
                placeholder="••••••••"
                type="password"
                className="bg-neutral-800 text-neutral-300"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {!passwordsMatch && (
                <p className="text-xs text-red-400">Passwords do not match</p>
              )}
            </LabelInputContainer>
          </div>

          <label className="flex items-center gap-2 text-xs text-neutral-400">
            <input type="checkbox" required />I agree to the Terms & Conditions
          </label>

          <button
            disabled={!passwordsMatch}
            type="submit"
            className={`group/btn relative flex h-10 w-full md:w-60 items-center justify-center gap-2 rounded-md transition-all cursor-pointer lg:ml-55 
              ${
                passwordsMatch
                  ? "bg-[#ff3c00] text-neutral-200 hover:gap-3.5"
                  : "bg-neutral-700 text-neutral-400 cursor-not-allowed"
              }`}
          >
            Create Account
            <MoveRight size={18} />
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccessAccount;

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px h-px bg-linear-to-r from-transparent via-[#c47950] to-transparent opacity-0 group-hover/btn:opacity-100 transition" />
    <span className="absolute inset-x-10 -bottom-px mx-auto h-px w-1/2 bg-linear-to-r from-transparent via-[#EA580C] to-transparent opacity-0 blur-sm group-hover/btn:opacity-100 transition" />
  </>
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex flex-col space-y-1", className)}>{children}</div>
);
