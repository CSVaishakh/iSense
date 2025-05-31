import { SignedOut, SignedIn, SignInButton } from "@clerk/nextjs";
import React from "react";
import Link from "next/link";

export default function About() {
    return(
        <section className="min-h-screen bg-black text-white py-12 px-8">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-blue-500 mb-4">iSense</h1>
                    <h3 className="text-xl md:text-2xl text-gray-300">Decoding Vision, Delivering Insight</h3>
                </div>
                
                <div className="mb-12">
                    <h2 className="text-3xl font-semibold text-blue-500 mb-6">Features</h2>
                    <ul className="space-y-4 text-lg text-gray-300">
                        <li className="flex items-start">
                            <span className="mr-3">🧠</span>
                            <span><strong className="text-white">AI-Powered Image Understanding</strong> – Combines caption generation and contextual Q&A</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3">📜</span>
                            <span><strong className="text-white">History Tracking</strong> – Keep a log of all your previous analyses</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3">🙍‍♂️</span>
                            <span><strong className="text-white">Profile Management</strong> – Personalize your AI experience</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3">📱</span>
                            <span><strong className="text-white">Fully Responsive</strong> – Works across desktops, tablets, and smartphones</span>
                        </li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-3xl font-semibold text-blue-500 mb-6">⚙️ Tech Stack</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
                        <div className="bg-gray-950 border border-blue-900/20 rounded-lg p-6">
                            <h4 className="text-xl font-bold text-blue-400 mb-4">Frontend</h4>
                            <ul className="list-disc list-inside space-y-2 text-gray-300">
                                <li>React 19 + TypeScript + Vite</li>
                                <li>React Router for routing</li>
                                <li>ESLint for code quality</li>
                            </ul>
                        </div>
                        <div className="bg-gray-950 border border-blue-900/20 rounded-lg p-6">
                            <h4 className="text-xl font-bold text-blue-400 mb-4">Backend</h4>
                            <ul className="list-disc list-inside space-y-2 text-gray-300">
                                <li>FastAPI – for blazing-fast APIs</li>
                                <li>Groq - backend ai</li>
                                <li>Designed for extensibility and high performance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center space-y-6 px-8 mt-12">
                <SignedOut>
                    <SignInButton mode="modal">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200">
                            Chat Now
                        </button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <Link href="/chat">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200">
                            Chat Now
                        </button>
                    </Link>
                </SignedIn>
            </div>
        </section>
    );
};