import React from 'react';
import Link from "next/link";

export default function SignupPage() {
  return (
    <form action='/http://localhost:3000/api/auth/callback/credentials' method='POST' className="flex flex-col items-center gap-1 w-60">

      <input type="hidden" name="csrfToken" value="914b6e3d8c3233d84219f0bc18b49db1881baa7dc3a70bceffa14cf06e418c16" />

      <h1 className="text-xl tracking-wide"><b>Sign-Up page</b></h1>

      <label htmlFor="input-name-for-credentials-provider">Name</label>
      <input name="username" id="input-name-for-credentials-provider" type="text" placeholder="username" className="px-2 border-2 border-slate-500 rounded-md" />

      <label htmlFor="input-email-for-credentials-provider">Email</label>
      <input name="email" id="input-email-for-credentials-provider" type="text" placeholder="email" className="px-2 border-2 border-slate-500 rounded-md" />

      <label htmlFor="input-password-for-credentials-provider">Password</label>
      <input name="password" id="input-password-for-credentials-provider" type="password" placeholder="password" className="px-2 border-2 border-slate-500 rounded-md" />
      
      <button type="submit" className="border-2 bg-slate-600 text-white w-28 rounded-md">Continue</button>

      <Link href={"/login"} className="underline"><i>login page</i></Link>
    </form>
  )
}

