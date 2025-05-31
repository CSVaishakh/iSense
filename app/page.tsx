import Link from "next/link";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center space-y-6 px-8">
        <h1 className="text-6xl md:text-8xl font-bold text-blue-500">iSense</h1>
        <h3 className="text-xl md:text-2xl text-blue-300 font-light">Decoding Vision, Delivering Insight</h3>
        <SignedIn>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200">
            <Link href='/chat'>Chat Now</Link>
          </button>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200">
              Chat Now
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </section>
  );
}
