"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const HomeHeader: React.FC = () => {
  return (
    <section className="bg-gray-950 border-b border-blue-900/20 py-4">
      <section className="container mx-auto px-8 flex justify-between items-center">
        <h1 className="text-blue-500 text-2xl font-bold">iSense</h1>
        <nav className="flex space-x-6 items-center">
          <Link href="/about" className="text-blue-500 hover:text-white transition-colors">
            <h2 className="text-lg font-medium">About</h2>
          </Link>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-blue-500 hover:text-white transition-colors">
                <h2 className="text-lg font-medium">Sign In</h2>
              </button>
            </SignInButton>
          </SignedOut>
        </nav>
      </section>
    </section>
  );
};

const AboutHeader: React.FC = () => {
  return (
    <section className="bg-gray-950 border-b border-blue-900/20 py-4">
      <section className="container mx-auto px-8 flex justify-between items-center">
        <Link href="/" className="text-blue-500 hover:text-blue-300 transition-colors">
          <h1 className="text-2xl font-bold">iSense</h1>
        </Link>
        <nav className="flex space-x-6 items-center">
          <SignedIn>
            <Link href="/history" className="text-blue-500 hover:text-white transition-colors">
              <h2 className="text-lg font-medium">History</h2>
            </Link>
            <UserButton afterSignOutUrl="/about" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-blue-500 hover:text-white transition-colors">
                <h2 className="text-lg font-medium">Sign In</h2>
              </button>
            </SignInButton>
          </SignedOut>
        </nav>
      </section>
    </section>
  );
};

const ChatHeader: React.FC = () => {
  return (
    <section className="bg-gray-950 border-b border-blue-900/20 py-4">
      <section className="container mx-auto px-8 flex justify-between items-center">
        <Link href="/" className="text-blue-500 hover:text-blue-300 transition-colors">
          <h1 className="text-2xl font-bold">iSense</h1>
        </Link>
        <nav className="flex space-x-6 items-center">
          <SignedIn>
            <Link href="/history" className="text-blue-500 hover:text-white transition-colors">
              <h2 className="text-lg font-medium">History</h2>
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-blue-500 hover:text-white transition-colors">
                <h2 className="text-lg font-medium">Sign In</h2>
              </button>
            </SignInButton>
          </SignedOut>
        </nav>
      </section>
    </section>
  );
};

const HistoryHeader: React.FC = () => {
  return (
    <section className="bg-gray-950 border-b border-blue-900/20 py-4">
      <section className="container mx-auto px-8 flex justify-between items-center">
        <Link href="/" className="text-blue-500 hover:text-blue-300 transition-colors">
          <h1 className="text-2xl font-bold">iSense</h1>
        </Link>
        <nav className="flex space-x-6">
          <SignedIn>
            <Link href="/chat" className="text-blue-500 hover:text-white transition-colors">
              <h2 className="text-lg font-medium">Chat</h2>
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </nav>
      </section>
    </section>
  );
};

const Header: React.FC = () => {
  const route = usePathname();
  if (route === '/') return <HomeHeader />;
  else if (route === '/chat') return <ChatHeader />;
  else if (route === '/about') return <AboutHeader />;
  else if (route === '/history') return <HistoryHeader />;
  else return <HomeHeader />; // fallback
};

export default Header;