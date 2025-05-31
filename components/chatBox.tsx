'use client';
import { useEffect, useRef, useState } from "react";
import InputBox from "./InputBox";

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
    timestamp?: Date;
}

export default function ChatBox() {
    const [messages, setMessages] = useState<Message[]>([]);
    const messageEndRef = useRef<HTMLDivElement>(null);
    const [conversationID, setConversationID] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const generateConversationID = () => {
            const now = new Date();
            const date = now.getDate().toString().padStart(2, '0');
            const month = (now.getMonth() + 1).toString().padStart(2, '0');
            const year = now.getFullYear();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            
            return `${date}${month}${year}_${hours}${minutes}`;
        };
        
        setConversationID(generateConversationID());
    }, []);

    useEffect(() => {
        messageEndRef.current?.scrollIntoView({behavior:"smooth"});
    }, [messages]);

    // Hide/show welcome overlay based on messages
    useEffect(() => {
        const overlay = document.querySelector('.chat-welcome-overlay') as HTMLElement;
        if (overlay) {
            if (messages.length > 0) {
                overlay.style.opacity = '0';
                overlay.style.pointerEvents = 'none';
                overlay.style.transform = 'translateY(-20px)';
            } else {
                overlay.style.opacity = '1';
                overlay.style.pointerEvents = 'none';
                overlay.style.transform = 'translateY(0)';
            }
        }
    }, [messages]);

    const addMessage = (text: string, file?: File) => {
        console.log('addMessage called with:', text, file);
        console.log(conversationID);
        
        if (text.trim() || file) {
            const newMessage: Message = {
                id: Date.now(),
                text: file ? `${text} [Attached: ${file.name}]` : text,
                sender: 'user',
                timestamp: new Date()
            };
            
            console.log('Adding new message:', newMessage);
            setMessages(prev => {
                const updated = [...prev, newMessage];
                console.log('Updated messages:', updated);
                return updated;
            });
            
            setIsLoading(true);
            
            // Call API
            const formData = new FormData();
            if (text) formData.append('message', text);
            if (file) formData.append('file', file);

            fetch('/api/chat', {
                method: 'POST',
                body: formData
            })
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    const botMessage: Message = {
                        id: Date.now() + 1,
                        text: data.message || 'Sorry, I couldn\'t process that.',
                        sender: 'bot',
                        timestamp: new Date()
                    };
                    setMessages(prev => [...prev, botMessage]);
                    setIsLoading(false);
                }, 500);
            })
            .catch(() => {
                setIsLoading(false);
            });
        }
    };

    console.log('Current messages:', messages);

    return(
        <div className="flex flex-col relative z-10" style={{ height: 'calc(100vh - 120px)' }}>
            {/* Messages area with proper spacing for footer */}
            <div className={`flex-1 overflow-y-auto transition-all duration-500 ${messages.length > 0 ? 'pt-4 px-4' : 'pt-20'} pb-24`}>
                {messages.length > 0 && (
                    <div className="space-y-4 pb-4">
                        {messages.map((message: Message, index: number) => (
                            <div 
                                key={message.id} 
                                className={`${message.sender === 'user' ? 'flex justify-end' : 'flex justify-start'} animate-slide-in-up`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={`px-4 py-3 max-w-2xl bg-gray-800 text-blue-400 break-words border border-gray-700 rounded-lg 
                                    transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20
                                    ${message.sender === 'user' 
                                        ? 'hover:bg-gray-750 hover:border-blue-500/50' 
                                        : 'hover:bg-gray-750 hover:border-green-500/50 hover:text-green-400'
                                    }`}>
                                    {message.text}
                                </div>
                            </div>
                        ))}
                        
                        {isLoading && (
                            <div className="flex justify-start animate-slide-in-up">
                                <div className="px-4 py-3 max-w-2xl bg-gray-800 text-blue-400 border border-gray-700 rounded-lg">
                                    <div className="flex items-center space-x-2">
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                        <span className="text-sm opacity-70">AI is thinking...</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
                <div ref={messageEndRef} />
            </div>
            
            {/* Floating input box - positioned above footer */}
            <div className="fixed bottom-24 left-0 right-0 z-30 px-4">
                <InputBox onSend={addMessage} />
            </div>
        </div>
    );
};