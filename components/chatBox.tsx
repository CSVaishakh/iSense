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

    useEffect(() => {
        messageEndRef.current?.scrollIntoView({behavior:"smooth"});
    }, [messages]);

    const addMessage = (text: string, file?: File) => {
        console.log('addMessage called with:', text, file); // Debug log
        
        if (text.trim() || file) {
            const newMessage: Message = {
                id: Date.now(),
                text: file ? `${text} [Attached: ${file.name}]` : text,
                sender: 'user',
                timestamp: new Date()
            };
            
            console.log('Adding new message:', newMessage); // Debug log
            setMessages(prev => {
                const updated = [...prev, newMessage];
                console.log('Updated messages:', updated); // Debug log
                return updated;
            });
            
            // Add bot response logic here
        }
    };

    console.log('Current messages:', messages); // Debug log

    return(
        <div className="flex flex-col h-175 bg-gray-950 m25px">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 ? (
                    <div className="text-gray-400 text-center">No messages yet...</div>
                ) : (
                    messages.map((message: Message) => (
                        <div key={message.id} className={message.sender === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                            <div className={`px-4 py-2 max-w-xs rounded-lg break-words ${message.sender === 'user' ? 'bg-blue-500 text-white rounded-br-none' : 'bg-gray-800 text-white rounded-bl-none'}`}>
                                {message.text}
                            </div>
                        </div>
                    ))
                )}
                <div ref={messageEndRef} />
            </div>
            
            <InputBox onSend={addMessage} />
        </div>
    );
};