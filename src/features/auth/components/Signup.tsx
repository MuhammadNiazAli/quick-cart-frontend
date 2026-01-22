/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation"; // Next.js 13+ router

interface SignupResponse {
  _id: string;
  name: string;
  email: string;
  role: string;
  token: string;
}

export function SignupForm() {
  const router = useRouter();

  const [signup, setsignup] = useState<'signup' | 'signin'>('signup');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const BACKEND_URL = 'http://localhost:8000'; 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const body: any = { email, password };
      if (signup === 'signup') body.name = name;

      const res = await fetch(
        signup === 'signup'
          ? `${BACKEND_URL}/api/auth/signup`
          : `${BACKEND_URL}/api/auth/login`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
          credentials: 'include',
        }
      );

      const data: SignupResponse | { message: string } = await res.json();

      if (!res.ok) throw new Error('message' in data ? data.message : 'Something went wrong');

    
      router.push('/');
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none p-4 md:rounded-2xl md:p-8 bg-stone-950">
      <h2 className="text-xl text-neutral-200 font-medium">
        Welcome to <span className="text-[#EA580C]">Q</span>uickcart
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-300">
        {signup === 'signup'
          ? 'Create an account to get started'
          : 'Login to Quickcart'}
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        {signup === 'signup' && (
          <LabelInputContainer className="mb-4">
            <Label htmlFor="firstname" className="text-neutral-300">Full Name</Label>
            <Input
              id="firstname"
              placeholder="Full Name"
              type="text"
              className="bg-neutral-800 text-neutral-300/95"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </LabelInputContainer>
        )}

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-neutral-300">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            className="bg-neutral-800 text-neutral-300/95"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="password" className="text-neutral-300/95">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            className="bg-neutral-800 text-neutral-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </LabelInputContainer>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <button
          className="group/btn relative flex items-center justify-center gap-2 hover:gap-3.5 h-10 w-full text-neutral-300 rounded-md bg-[#ff3c00] shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] transition-all duration-300 cursor-pointer"
          type="submit"
          disabled={loading}
        >
          {signup === 'signup' ? 'Create Account' : 'Sign In'}
          <MoveRight size={19}/>
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
