import Link from "next/link";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 flex items-center justify-center animate-fade-in relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 -right-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="text-center space-y-8 px-8 animate-slide-in-up relative z-10">
        {/* Main Title with enhanced styling */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-blue-500 animate-glow-pulse hover:text-blue-400 transition-all duration-300 transform hover:scale-105">
            iSense
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto animate-pulse"></div>
        </div>

        {/* Enhanced tagline */}
        <h3 className="text-xl md:text-2xl text-blue-300 font-light animate-slide-in-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
          Decoding Vision, Delivering Insight
        </h3>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl mb-3">👁️</div>
            <h4 className="text-blue-400 font-semibold mb-2">Vision Analysis</h4>
            <p className="text-gray-400 text-sm">Upload images and get intelligent insights powered by advanced AI</p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl mb-3">💬</div>
            <h4 className="text-blue-400 font-semibold mb-2">Smart Chat</h4>
            <p className="text-gray-400 text-sm">Have natural conversations about your images and get detailed explanations</p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="text-blue-400 font-semibold mb-2">Instant Results</h4>
            <p className="text-gray-400 text-sm">Get immediate analysis and responses with cutting-edge AI technology</p>
          </div>
        </div>

        {/* Enhanced CTA buttons */}
        <div className="space-y-4 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
          <SignedIn>
            <Link href='/chat'>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 animate-pulse-glow text-lg">
                Start Analyzing →
              </button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 animate-pulse-glow text-lg">
                Get Started Free →
              </button>
            </SignInButton>
          </SignedOut>
        </div>

        {/* Demo showcase */}
        <div className="mt-12 animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-blue-400 font-semibold mb-4">Try it now:</h4>
            <div className="bg-gray-800/50 rounded-lg p-4 text-left">
              <div className="flex items-start space-x-3 mb-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="text-gray-300 text-sm">Upload any image</div>
              </div>
              <div className="flex items-start space-x-3 mb-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="text-gray-300 text-sm">Ask questions about what you see</div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="text-gray-300 text-sm">Get intelligent insights instantly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}