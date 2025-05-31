import ChatBox from "@/components/chatBox";

export default async function Chat() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      
      {/* Welcome elements - more compact layout */}
      <div className="chat-welcome-overlay absolute top-0 left-0 right-0 bottom-45 z-0 pointer-events-none">
        {/* Compact welcome section */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center animate-fade-in">
          {/* Welcome text */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-blue-400 mb-3 animate-glow-pulse">
              Welcome to iSense
            </h2>
            <p className="text-gray-400 text-base max-w-sm mx-auto leading-relaxed">
              Upload an image and start a conversation
            </p>
          </div>

          {/* Horizontal layout: Features + Chatbot */}
          <div className="flex items-center justify-center space-x-12">
            {/* Feature highlights - vertical stack */}
            <div className="flex flex-col space-y-4 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-center">
                <div className="text-xl mb-1">📸</div>
                <span className="text-blue-300 text-xs">Image Analysis</span>
              </div>
              <div className="text-center">
                <div className="text-xl mb-1">💭</div>
                <span className="text-blue-300 text-xs">Smart Insights</span>
              </div>
              <div className="text-center">
                <div className="text-xl mb-1">⚡</div>
                <span className="text-blue-300 text-xs">Instant Response</span>
              </div>
            </div>
            
            {/* Floating chatbot icon - side by side */}
            <div className="animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="relative">
                {/* Main chatbot circle */}
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl animate-pulse-slow">
                  <div className="text-white text-2xl">🤖</div>
                </div>
                
                {/* Animated rings around the bot */}
                <div className="absolute inset-0 w-20 h-20 border-2 border-blue-500/30 rounded-full animate-ping"></div>
                <div className="absolute -inset-1 w-22 h-22 border border-blue-400/20 rounded-full animate-pulse"></div>
                
                {/* Floating message bubbles */}
                <div className="absolute -top-4 -left-6 bg-blue-500/20 backdrop-blur-sm rounded-lg px-2 py-1 animate-bounce-slow">
                  <span className="text-blue-300 text-xs">Hi! 👋</span>
                </div>
                
                <div className="absolute -bottom-3 -right-5 bg-purple-500/20 backdrop-blur-sm rounded-lg px-2 py-1 animate-bounce-slow" style={{ animationDelay: '1s' }}>
                  <span className="text-purple-300 text-xs">Upload!</span>
                </div>
              </div>
            </div>

            {/* Additional features - vertical stack */}
            <div className="flex flex-col space-y-4 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-center">
                <div className="text-xl mb-1">🎯</div>
                <span className="text-blue-300 text-xs">Accurate</span>
              </div>
              <div className="text-center">
                <div className="text-xl mb-1">🔒</div>
                <span className="text-blue-300 text-xs">Secure</span>
              </div>
              <div className="text-center">
                <div className="text-xl mb-1">✨</div>
                <span className="text-blue-300 text-xs">Easy to Use</span>
              </div>
            </div>
          </div>

          {/* Quick start tip */}
          <div className="mt-6 animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-gray-500 text-xs">
              💡 Tip: Click the + button below to upload your first image
            </p>
          </div>
        </div>
      </div>
      
      <ChatBox />
    </section>
  );
}