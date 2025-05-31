import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";


const Footer: React.FC = () =>{
  return(
    <section className="bg-gray-950 border-t border-blue-900 py-4">
      <section className="container mx-auto px-8 flex justify-between items-center">
        <h1 className="text-2xl md:text-2xl  text-blue-500">©iSense 2025</h1>
        <nav className="flex space-x-4">
          <Link href="https://x.com/iSense25" className="hover:opacity-80 transition-opacity">
            <Image src={'x.svg'} alt="X" width={15} height={15} />
          </Link>
          <Link href="https://instagram.com/iSense25" className="hover:opacity-80 transition-opacity">
            <Image src={'instagram.svg'} alt="Instagram" width={15} height={15} />
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
          <main className="flex-1">
            {children}
          </main>
          <Footer></Footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
