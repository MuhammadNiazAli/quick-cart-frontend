/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuthMutation } from "@/hooks/auth/useAuthMutation";

export function SignupForm() {
  const router = useRouter();

  const [mode, setMode] = useState<"signup" | "signin">("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signupMutation, loginMutation } = useAuthMutation();

  const isLoading =
    signupMutation.isPending || loginMutation.isPending;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (mode === "signup") {
      signupMutation.mutate(
        { name, email, password },
        {
          onSuccess: (data) => {
            router.push(
              data.role === "admin" ? "/seller" : "/"
            );
          },
          onError: (err: any) => {
            setError(err?.message || "Something went wrong");
          },
        }
      );
    } else {
      loginMutation.mutate(
        { email, password },
        {
          onSuccess: (data) => {
            router.push(
              data.role === "admin" ? "/seller" : "/"
            );
          },
          onError: (err: any) => {
            setError(err?.message || "Something went wrong");
          },
        }
      );
    }
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md p-4 md:rounded-2xl md:p-8 bg-stone-950">
      <h2 className="text-xl text-neutral-200 font-medium">
        Welcome to <span className="text-[#EA580C]">Q</span>uickcart
      </h2>

      <p className="mt-2 max-w-sm text-sm text-neutral-300">
        {mode === "signup"
          ? "Create an account to get started"
          : "Login to Quickcart"}
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        {mode === "signup" && (
          <LabelInputContainer className="mb-4">
            <Label className="text-neutral-300">
              Full Name
            </Label>
            <Input
              placeholder="Full Name"
              className="bg-neutral-800 text-neutral-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </LabelInputContainer>
        )}

        <LabelInputContainer className="mb-4">
          <Label className="text-neutral-300">
            Email Address
          </Label>
          <Input
            placeholder="projectmayhem@fc.com"
            type="email"
            className="bg-neutral-800 text-neutral-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label className="text-neutral-300">
            Password
          </Label>
          <Input
            type="password"
            placeholder="••••••••"
            className="bg-neutral-800 text-neutral-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </LabelInputContainer>

        {error && (
          <p className="text-red-500 mb-2">{error}</p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="group/btn relative flex items-center justify-center gap-2 hover:gap-3.5 h-10 w-full text-neutral-300 rounded-md bg-[#ff3c00] transition-all duration-300 disabled:opacity-60"
        >
          {isLoading
            ? "Please wait..."
            : mode === "signup"
            ? "Create Account"
            : "Sign In"}
          <MoveRight size={19} />
          <BottomGradient />
        </button>

        <p className="mt-4 text-center text-sm text-neutral-300">
          {mode === "signup" ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setMode("signin")}
                className="text-[#EA580C] cursor-pointer"
              >
                Sign in
              </span>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <span
                onClick={() => setMode("signup")}
                className="text-[#EA580C] cursor-pointer"
              >
                Sign up
              </span>
            </>
          )}
        </p>

        <div className="my-8 h-px w-full bg-linear-to-r from-transparent via-neutral-700" />
      </form>
    </div>
  );
}

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent via-[#c47950] to-transparent opacity-0 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-[#EA580C] to-transparent opacity-0 blur-sm group-hover/btn:opacity-100" />
  </>
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>
    {children}
  </div>
);
