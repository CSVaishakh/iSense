"use client";

interface ComingSoonProps {
    title: string;
    description: string;
    features: Array<{
        icon: string;
        label: string;
    }>;
    mainIcon: string;
    linkText?: string;
    linkHref?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({
    title,
    description,
    features,
    mainIcon,
    linkText,
    linkHref
}) => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            </div>
            
            {/* Main content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <div className="text-center animate-fade-in">
                    {/* Coming soon message */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-blue-400 mb-4 animate-glow-pulse">
                            {title}
                        </h1>
                        <h2 className="text-2xl font-semibold text-gray-300 mb-3">
                            Coming Soon
                        </h2>
                        <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* Feature preview */}
                    <div className="flex justify-center items-center space-x-8 mb-8">
                        {features.map((feature, index) => (
                            <div 
                                key={index}
                                className="text-center animate-slide-in-up flex flex-col items-center" 
                                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                            >
                                <div className="text-3xl mb-2 h-12 flex items-center justify-center">{feature.icon}</div>
                                <span className="text-blue-300 text-sm">{feature.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Floating icon - properly centered */}
                    <div className="flex justify-center mb-8">
                        <div className="animate-float" style={{ animationDelay: '0.6s' }}>
                            <div className="relative flex justify-center items-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl animate-pulse-slow">
                                    <div className="text-white text-3xl">{mainIcon}</div>
                                </div>
                                <div className="absolute inset-0 w-24 h-24 border-2 border-blue-500/30 rounded-full animate-ping"></div>
                                <div className="absolute -inset-1 w-26 h-26 border border-blue-400/20 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    </div>

                    {/* Status message */}
                    {linkText && linkHref && (
                        <div className="animate-slide-in-up" style={{ animationDelay: '0.7s' }}>
                            <p className="text-gray-500 text-sm">
                                💡 {linkText} <a href={linkHref} className="text-blue-400 hover:text-blue-300 transition-colors underline">here</a>
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes slide-in-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                @keyframes glow-pulse {
                    0%, 100% { text-shadow: 0 0 5px rgba(59, 130, 246, 0.3); }
                    50% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.3); }
                }
                
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                
                @keyframes pulse-slow {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
                
                .animate-fade-in { animation: fade-in 0.8s ease-out; }
                .animate-slide-in-up { animation: slide-in-up 0.6s ease-out forwards; opacity: 0; }
                .animate-float { animation: float 3s ease-in-out infinite; }
                .animate-glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }
                .animate-blob { animation: blob 7s infinite; }
                .animation-delay-2000 { animation-delay: 2s; }
                .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
            `}</style>
        </section>
    );
};

export default ComingSoon;