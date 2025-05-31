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
    <section className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 border-b border-blue-900/20 py-4 animate-slide-down backdrop-blur-sm">
      <section className="container mx-auto px-8 flex justify-between items-center">
        <h1 className="text-blue-500 text-3xl font-bold animate-glow-pulse hover:text-blue-400 transition-all duration-300 transform hover:scale-105">
          iSense
        </h1>
        <nav className="flex space-x-6 items-center animate-fade-in-right">
          <Link href="/about" className="text-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
            <h2 className="text-lg font-medium">About</h2>
          </Link>
          <SignedIn>
            <div className="animate-bounce-in">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 px-4 py-2 rounded-lg hover:bg-blue-500/10 hover:shadow-md animate-pulse-glow">
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
    <section className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 border-b border-blue-900/20 py-4 animate-slide-down backdrop-blur-sm">
      <section className="container mx-auto px-8 flex justify-between items-center">
        <Link href="/" className="text-blue-500 hover:text-blue-300 transition-all duration-300 transform hover:scale-105">
          <h1 className="text-3xl font-bold animate-glow-pulse">iSense</h1>
        </Link>
        <nav className="flex space-x-6 items-center animate-fade-in-right">
          <SignedIn>
            <Link href="/chat" className="text-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
              <h2 className="text-lg font-medium">Chat</h2>
            </Link>
            <Link href="/history" className="text-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
              <h2 className="text-lg font-medium">History</h2>
            </Link>
            <div className="animate-bounce-in">
              <UserButton afterSignOutUrl="/about" />
            </div>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <h2 className="text-lg font-medium">Chat</h2>
              </button>
            </SignInButton>
            <SignInButton mode="modal">
              <button className="text-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 px-4 py-2 rounded-lg hover:bg-blue-500/10 hover:shadow-md animate-pulse-glow">
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
    <section className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 border-b border-blue-900/20 py-4 animate-slide-down backdrop-blur-sm">
      <section className="container mx-auto px-8 flex justify-between items-center">
        <Link href="/" className="text-blue-500 hover:text-blue-300 transition-all duration-300 transform hover:scale-105">
          <h1 className="text-3xl font-bold animate-glow-pulse">iSense</h1>
        </Link>
        <nav className="flex space-x-6 items-center animate-fade-in-right">
          <SignedIn>
            <Link href="/history" className="text-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
              <h2 className="text-lg font-medium">History</h2>
            </Link>
            <div className="animate-bounce-in">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 px-4 py-2 rounded-lg hover:bg-blue-500/10 hover:shadow-md animate-pulse-glow">
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
    <section className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 border-b border-blue-900/20 py-4 animate-slide-down backdrop-blur-sm">
      <section className="container mx-auto px-8 flex justify-between items-center">
        <Link href="/" className="text-blue-500 hover:text-blue-300 transition-all duration-300 transform hover:scale-105">
          <h1 className="text-3xl font-bold animate-glow-pulse">iSense</h1>
        </Link>
        <nav className="flex space-x-6 animate-fade-in-right">
          <SignedIn>
            <Link href="/chat" className="text-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
              <h2 className="text-lg font-medium">Chat</h2>
            </Link>
            <div className="animate-bounce-in">
              <UserButton afterSignOutUrl="/" />
            </div>
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

// Add the CSS animations
const styles = `
  <style>
    @keyframes slide-down {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fade-in-right {
      from {
        opacity: 0;
        transform: translateX(20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes bounce-in {
      0% {
        opacity: 0;
        transform: scale(0.3);
      }
      50% {
        opacity: 1;
        transform: scale(1.05);
      }
      70% {
        transform: scale(0.9);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    @keyframes glow-pulse {
      0%, 100% {
        text-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
      }
      50% {
        text-shadow: 0 0 20px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.3);
      }
    }
    
    @keyframes pulse-glow {
      0%, 100% {
        box-shadow: 0 0 5px rgba(59, 130, 246, 0.2);
      }
      50% {
        box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
      }
    }
    
    .animate-slide-down {
      animation: slide-down 0.6s ease-out;
    }
    
    .animate-fade-in-right {
      animation: fade-in-right 0.8s ease-out 0.2s both;
    }
    
    .animate-bounce-in {
      animation: bounce-in 0.6s ease-out 0.4s both;
    }
    
    .animate-glow-pulse {
      animation: glow-pulse 2s ease-in-out infinite;
    }
    
    .animate-pulse-glow {
      animation: pulse-glow 2s ease-in-out infinite;
    }
  </style>
`;

// Add to document head if you're using this in a Next.js app
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}