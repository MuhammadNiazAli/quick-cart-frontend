'use client';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import logo from '../../../../public/assets/logo.svg'
import { MoveRight } from "lucide-react";

export function SignupForm() {
  const [signup, setsignup] = useState('signup');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none p-4 md:rounded-2xl md:p-8 bg-stone-950">
      <h2 className="text-xl text-neutral-200 font-medium">
        Welcome to <span className="text-[#EA580C]">Q</span>uickcart
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-300">
        Login to <span className="text-[#EA580C]">Q</span>uickcart if you can because we don&apos;t have a login flow
        yet
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          {
            signup === 'signup' ?(
              <LabelInputContainer>
            <Label htmlFor="firstname" className="text-neutral-300">Full Name</Label>
            <Input
              id="firstname"
              placeholder="Full Name"
              type="text"
              className="bg-neutral-800 text-neutral-300/95"/>
          </LabelInputContainer>
            ):null
          }
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-neutral-300">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            className="bg-neutral-800 text-neutral-300/95"/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password" className="text-neutral-300/95">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            className="bg-neutral-800 text-neutral-300"/>
        </LabelInputContainer>
        <button
          className="group/btn relative flex items-center justify-center gap-2 hover:gap-3.5 h-10 w-full text-neutral-300 rounded-md bg-[#ff3c00] shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] transition-all duration-300 cursor-pointer"
          type="submit"
        >
          {
            signup === 'signup' ? 'Create Account' : 'Sign In'
          }<MoveRight size={19}/>
          <BottomGradient />
        </button>
        <p className="mt-4 text-center text-sm text-neutral-300">
          {signup === 'signup' ? (
            <>
              Already have an account?{' '}
              <a 
              className="text-[#EA580C] hover:text-[#EA580C]/80 cursor-pointer"
              onClick={()=>setsignup('signin')}
              >Sign in</a>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <a 
              className="text-[#EA580C] hover:text-[#EA580C]/80 cursor-pointer"
              onClick={()=>setsignup('signup')}
              >Sign Up</a>
            </>
          )}
        </p>
        <div className="my-8 h-px w-full bg-linear-to-r from-transparent via-neutral-700" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent via-[#c47950] to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-[#EA580C] to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};