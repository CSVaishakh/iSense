"use client";

import { Plus, Send } from 'lucide-react';
import React, { useRef, useState, ChangeEvent, FormEvent } from 'react';

interface InputBoxProps {
    onSend: (message: string, file?: File) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ onSend }) => {
    const [message, setMessage] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSend = (e: FormEvent) => {
        e.preventDefault();
        if (!message.trim() && !file) return;

        console.log('Sending message:', message, 'File:', file);
        
        onSend(message, file || undefined);

        setMessage('');
        setFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="animate-slide-in-up">
            <form onSubmit={handleSend}>
                <div className="bg-gradient-to-r from-gray-900/95 via-gray-850/95 to-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl max-w-4xl mx-auto p-4 animate-float-up">
                    <div className="flex items-end gap-3">
                        <div className="flex-1 relative">
                            <textarea
                                className="w-full min-h-[44px] max-h-32 p-3 text-sm bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 placeholder-gray-400 text-white transition-all duration-300 hover:bg-gray-750/80 hover:border-gray-500/50 animate-fade-in shadow-inner"
                                placeholder="Type your message or upload an image..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        handleSend(e);
                                    }
                                }}
                                rows={1}
                            />
                            {file && (
                                <div className="text-xs text-blue-400 mt-2 p-2 bg-gray-700/80 backdrop-blur-sm rounded-lg border border-blue-500/30 animate-slide-in-up">
                                    <span className="animate-pulse">📎</span> {file.name}
                                    <button 
                                        type="button"
                                        onClick={() => {
                                            setFile(null);
                                            if (fileInputRef.current) fileInputRef.current.value = '';
                                        }}
                                        className="ml-2 text-red-400 hover:text-red-300 transition-colors"
                                    >
                                        ✕
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="flex gap-2">
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileSelect}
                                accept="image/*"
                                className="hidden"
                            />
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="flex items-center justify-center w-12 h-12 text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-transparent transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 animate-bounce-in shadow-lg"
                                title="Upload Image"
                            >
                                <Plus size={16} className="animate-pulse" />
                            </button>

                            <button
                                type="submit"
                                className="flex items-center justify-center w-12 h-12 text-white bg-gradient-to-r from-green-600 to-green-700 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:ring-offset-2 focus:ring-offset-transparent transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 animate-bounce-in shadow-lg"
                                disabled={!message.trim() && !file}
                                style={{ animationDelay: '0.1s' }}
                                title="Send Message"
                            >
                                <Send size={16} className={!message.trim() && !file ? '' : 'animate-pulse'} />
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            
            <style jsx>{`
                @keyframes slide-in-up {
                    from { 
                        opacity: 0; 
                        transform: translateY(20px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                }
                
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
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
                
                @keyframes float-up {
                    0% { 
                        transform: translateY(10px);
                        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                    }
                    100% { 
                        transform: translateY(0);
                        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4), 0 0 20px rgba(59, 130, 246, 0.1);
                    }
                }
                
                .animate-slide-in-up {
                    animation: slide-in-up 0.6s ease-out forwards;
                }
                
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out;
                }
                
                .animate-bounce-in {
                    animation: bounce-in 0.6s ease-out forwards;
                    opacity: 0;
                }
                
                .animate-float-up {
                    animation: float-up 0.8s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default InputBox;
