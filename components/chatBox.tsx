/* eslint-disable @next/next/no-img-element */
'use client';
import { useEffect, useRef, useState } from "react";
import InputBox from "./InputBox";

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
    timestamp?: Date;
    file?: File; // Add file property
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

    // Helper function to check if file is an image
    const isImageFile = (file: File) => {
        return file.type.startsWith('image/');
    };

    // Helper function to create image URL from file
    const createImageURL = (file: File) => {
        return URL.createObjectURL(file);
    };

    const addMessage = (text: string, file?: File) => {
        console.log('addMessage called with:', text, file);
        console.log(conversationID);
        
        if (text.trim() || file) {
            const newMessage: Message = {
                id: Date.now(),
                text: text || '',
                sender: 'user',
                timestamp: new Date(),
                file: file // Add file to message object
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
        <div className="flex flex-col h-screen">
            {/* Messages area - flexible height */}
            <div className={`flex-1 overflow-y-auto transition-all duration-500 ${messages.length > 0 ? 'pt-20 px-4' : 'pt-32'}`}>
                {messages.length > 0 && (
                    <div className="space-y-4 pb-6">
                        {messages.map((message: Message, index: number) => (
                            <div 
                                key={message.id} 
                                className={`${message.sender === 'user' ? 'flex justify-end mr-15' : 'flex justify-start ml-25'} animate-slide-in-up`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={`px-4 py-3 max-w-2xl bg-gray-800 text-blue-400 break-words border border-gray-700 rounded-lg whitespace-pre-wrap
                                    transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20
                                    ${message.sender === 'user' 
                                        ? 'hover:bg-gray-750 hover:border-blue-500/50' 
                                        : 'hover:bg-gray-750 hover:border-green-500/50 hover:text-green-400'
                                    }`}>
                                    
                                    {/* Image preview for user messages with uploaded images */}
                                    {message.sender === 'user' && message.file && isImageFile(message.file) && (
                                        <div className="mb-3">
                                            <img 
                                                src={createImageURL(message.file)} 
                                                alt="Uploaded image"
                                                className="max-w-full max-h-48 rounded-lg border border-gray-600 shadow-md hover:shadow-lg transition-shadow duration-200"
                                                style={{ objectFit: 'contain' }}
                                            />
                                            <p className="text-xs text-gray-400 mt-1 opacity-70">
                                                {message.file.name}
                                            </p>
                                        </div>
                                    )}
                                    
                                    {/* Message text */}
                                    {message.text && (
                                        <div>{message.text}</div>
                                    )}
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
            
            {/* Input box - fixed at bottom with padding for separation */}
            <div className="flex-shrink-0 p-4  from-gray-900/95 to-transparent">
                <InputBox onSend={addMessage} />
            </div>
        </div>
    );
};