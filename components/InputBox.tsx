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

        console.log('Sending message:', message, 'File:', file); // Debug log
        
        // Call the onSend function passed from parent
        onSend(message, file || undefined);

        // Reset form
        setMessage('');
        setFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <form onSubmit={handleSend}>
            <div className="flex items-end gap-2 p-4 bg-gray-950 border-blue-900/20 max-w-4xl mx-auto">
                <div className="flex-1 relative">
                    <textarea
                        className="w-full min-h-[44px] max-h-32 p-3 pr-12 text-sm bg-gray-950 border border-gray-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-white"
                        placeholder="Type your message..."
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
                        <div className="text-xs text-blue-400 mt-1">📎 {file.name}</div>
                    )}
                </div>

                <div className="flex gap-2">
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileSelect}
                        className="hidden"
                    />
                    <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <Plus size={15} />
                    </button>

                    <button
                        type="submit"
                        className="flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!message.trim() && !file}
                    >
                        <Send size={15} />
                    </button>
                </div>
            </div>
        </form>
    );
};

export default InputBox;
