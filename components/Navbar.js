'use client';
import Link from 'next/link';
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <nav className="bg-blue-950 items-center text-white flex justify-around h-14">
      <div className="logo font-bold text-xl">GetMeAChai</div>
      <ul className="flex gap-5">
        <Link href={'/login'}>
          <button
            onClick={() => {signIn("github")}}
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login
          </button>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
