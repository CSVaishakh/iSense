import { SignedOut, SignedIn, SignInButton } from "@clerk/nextjs";
import React from "react";
import Link from "next/link";

export default function About() {
    return(
        <section className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-3/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto max-w-4xl px-8 py-12 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold text-blue-500 mb-6 animate-glow-pulse hover:text-blue-400 transition-all duration-300 transform hover:scale-105">
                        iSense
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto animate-pulse mb-6"></div>
                    <h3 className="text-xl md:text-2xl text-blue-300 font-light animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
                        Decoding Vision, Delivering Insight
                    </h3>
                </div>
                
                {/* Features Section */}
                <div className="mb-16 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
                    <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center animate-glow-pulse">
                        ✨ Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
                            <div className="flex items-start space-x-4">
                                <span className="text-3xl">🧠</span>
                                <div>
                                    <h4 className="text-blue-400 font-semibold mb-2">AI-Powered Image Understanding</h4>
                                    <p className="text-gray-300">Combines caption generation and contextual Q&A for deep image analysis</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105 animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
                            <div className="flex items-start space-x-4">
                                <span className="text-3xl">📜</span>
                                <div>
                                    <h4 className="text-blue-400 font-semibold mb-2">History Tracking</h4>
                                    <p className="text-gray-300">Keep a comprehensive log of all your previous analyses and conversations</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105 animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
                            <div className="flex items-start space-x-4">
                                <span className="text-3xl">🙍‍♂️</span>
                                <div>
                                    <h4 className="text-blue-400 font-semibold mb-2">Profile Management</h4>
                                    <p className="text-gray-300">Personalize your AI experience with custom preferences and settings</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105 animate-slide-in-up" style={{ animationDelay: '0.7s' }}>
                            <div className="flex items-start space-x-4">
                                <span className="text-3xl">📱</span>
                                <div>
                                    <h4 className="text-blue-400 font-semibold mb-2">Fully Responsive</h4>
                                    <p className="text-gray-300">Works seamlessly across desktops, tablets, and smartphones</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Tech Stack Section */}
                <div className="mb-16 animate-slide-in-up" style={{ animationDelay: '0.8s' }}>
                    <h3 className="text-3xl font-bold text-blue-400 mb-8 text-center animate-glow-pulse">
                        ⚙️ Tech Stack
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm border border-blue-900/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 animate-slide-in-up" style={{ animationDelay: '0.9s' }}>
                            <h4 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
                                <span className="mr-3">🎨</span>
                                Frontend
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-300">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                    <span>Next.js 15 + TypeScript</span>
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                    <span>Tailwind CSS for styling</span>
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                    <span>Clerk for authentication</span>
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                    <span>Modern animations & effects</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm border border-purple-900/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 animate-slide-in-up" style={{ animationDelay: '1s' }}>
                            <h4 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
                                <span className="mr-3">⚡</span>
                                Backend
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-300">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                    <span>FastAPI for blazing-fast APIs</span>
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                    <span>Groq AI for intelligent processing</span>
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                    <span>Optimized for performance</span>
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                    <span>Scalable architecture</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Additional Info Section */}
                <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 mb-12 animate-slide-in-up" style={{ animationDelay: '1.1s' }}>
                    <h4 className="text-blue-400 font-semibold mb-4 text-center text-xl">🚀 Why Choose iSense?</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="space-y-2">
                            <div className="text-2xl">🎯</div>
                            <h5 className="text-blue-300 font-medium">Accurate</h5>
                            <p className="text-gray-400 text-sm">State-of-the-art AI models ensure precise image analysis</p>
                        </div>
                        <div className="space-y-2">
                            <div className="text-2xl">🔒</div>
                            <h5 className="text-blue-300 font-medium">Secure</h5>
                            <p className="text-gray-400 text-sm">Your data is protected with enterprise-grade security</p>
                        </div>
                        <div className="space-y-2">
                            <div className="text-2xl">✨</div>
                            <h5 className="text-blue-300 font-medium">User-Friendly</h5>
                            <p className="text-gray-400 text-sm">Intuitive interface designed for seamless interaction</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center space-y-6 animate-slide-in-up" style={{ animationDelay: '1.2s' }}>
                    <SignedOut>
                        <SignInButton mode="modal">
                            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 animate-pulse-glow text-lg">
                                Start Your Journey →
                            </button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <Link href="/chat">
                            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 animate-pulse-glow text-lg">
                                Continue Analyzing →
                            </button>
                        </Link>
                    </SignedIn>
                    
                    {/* Secondary info */}
                    <div className="mt-5 text-gray-400 text-sm animate-fade-in" style={{ animationDelay: '1.3s' }}>
                        💡 Join thousands of users already discovering insights with iSense
                    </div>
                </div>
            </div>
        </section>
    );
};