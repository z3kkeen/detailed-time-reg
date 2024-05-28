import React from 'react';
import Link from "next/link";
import { signIn } from 'next-auth/react';

const handleSignIn = async (e: any) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const username = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');


  try {
      const result = await signIn('credentials', {
          redirect: false,
          username,
          email,
          password,
      });
      
      // Handle successful sign-in
  } catch (error) {
      // Handle sign-in error
  }
}

export default function SignInPage() {
  return (
    <form onSubmit={handleSignIn} method='POST' className="flex flex-col items-center gap-1 w-60">
      <h1 className="text-xl tracking-wide"><b>Login page</b></h1>
      <input name="username" type="text" placeholder="username" className="px-2 border-2 border-slate-500 rounded-md" />
      <input name="email" type="text" placeholder="email" className="px-2 border-2 border-slate-500 rounded-md" />
      <input name="password" type="password" placeholder="password" className="px-2 border-2 border-slate-500 rounded-md" />
      
      <button type='submit' className="border-2 bg-slate-600 text-white w-28 rounded-md">Continue</button>
      <Link href={"/signup"} className="underline"><i>sign-up page</i></Link>
    </form>
  )
}