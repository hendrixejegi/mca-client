'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import UserLoginForm from '@/components/auth/user/UserLoginForm';
import Link from 'next/link';

function styleButton(formState: boolean): string {
  return cn(
    'h-11 bg-transparent text-[#5C5F61] font-semibold hover:bg-white/60 cursor-pointer rounded-[12px]',
    formState && 'bg-white text-[#3C5F95] shadow-[0_1px_2px_0_#000000]/5',
  );
}

export default function GuestLoginPage() {
  const [form, setForm] = useState<'login' | 'signup'>('login');

  const handleFormChange = (arg: typeof form) => setForm(arg);

  return (
    <Card className="bg-white rounded-[32px] shadow-[0_20px_40px_0_#2A3439]/6 ring-0 border border-[#A9B4B9]/10 p-8">
      <CardHeader className="mb-10">
        <CardTitle className="text-3xl font-extrabold leading-9 text-[#2A3439] mb-2 font-manrope">
          Welcome Back
        </CardTitle>
        <CardDescription className="text-[#566166] leading-6 mb-10">
          Please select your preferred access method below.
        </CardDescription>
        <div className="mt-6 p-1.5 bg-[#E1E9EE] rounded-[12px] grid grid-cols-2 gap-2 content-stretch">
          <Button
            onClick={() => handleFormChange('login')}
            className={styleButton(form == 'login')}
          >
            Login
          </Button>
          <Button
            onClick={() => handleFormChange('signup')}
            className={styleButton(form == 'signup')}
          >
            Sign Up
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {form == 'login' && <UserLoginForm />}
        {/* {form == "signup" && <UserSignupForm />} */}
      </CardContent>
      <CardFooter className="bg-white border-t-0">
        <p className="text-[#566166] text-center mt-12">
          By accessing this system, you agree to our{' '}
          <Link href="/" className="underline font-semibold">
            Terms of Proctoring
          </Link>{' '}
          and{' '}
          <Link href="/" className="underline font-semibold">
            Privacy Standard
          </Link>
          .
        </p>
      </CardFooter>
    </Card>
  );
}
