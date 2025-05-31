import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const Footer: React.FC = () => {
  return(
    <section className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 border-t border-blue-900/20 py-6 animate-slide-up backdrop-blur-sm">
      <section className="container mx-auto px-8 flex justify-between items-center">
        <h1 className="text-2xl md:text-2xl text-blue-500 animate-glow-pulse hover:text-blue-400 transition-all duration-300 transform hover:scale-105">
          ©iSense 2025
        </h1>
        <nav className="flex space-x-6 animate-fade-in-left">
          <Link 
            href="https://x.com/iSense25" 
            className="hover:opacity-80 transition-all duration-300 transform hover:scale-125 hover:rotate-12 animate-bounce-in"
            style={{ animationDelay: '0.1s' }}
          >
            <Image 
              src={'x.svg'} 
              alt="X" 
              width={20} 
              height={20} 
              className="filter brightness-0 invert opacity-70 hover:opacity-100 transition-all duration-300" 
            />
          </Link>
          <Link 
            href="https://instagram.com/iSense25" 
            className="hover:opacity-80 transition-all duration-300 transform hover:scale-125 hover:rotate-12 animate-bounce-in"
            style={{ animationDelay: '0.2s' }}
          >
            <Image 
              src={'instagram.svg'} 
              alt="Instagram" 
              width={20} 
              height={20} 
              className="filter brightness-0 invert opacity-70 hover:opacity-100 transition-all duration-300" 
            />
          </Link>
        </nav>
      </section>
    </section>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-black min-h-screen flex flex-col">
          <Header/>
          <main className="flex-1 animate-main-fade-in">
            {children}
          </main>
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}
