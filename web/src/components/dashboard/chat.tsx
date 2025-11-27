'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Loader2 } from 'lucide-react';

type Message = {
    id: string;
    role: 'ai' | 'user' | 'system';
    content: string;
    timestamp: Date;
};

export default function ChatComponent() {
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            role: 'ai',
            content: "I've received your inputs. You want a 'Modern Minimalist' vibe for 'Apex Talent'.",
            timestamp: new Date()
        },
        {
            id: '2',
            role: 'system',
            content: "Initializing Brand Generator...",
            timestamp: new Date()
        },
        {
            id: '3',
            role: 'ai',
            content: "I've drafted a preliminary logo and landing page based on that. How does the blue header feel to you? We can make it bolder if you like.",
            timestamp: new Date()
        }
    ]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const newUserMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, newUserMsg]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);
            const newAiMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'ai',
                content: "Got it. Updating the primary color to a darker navy now...",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, newAiMsg]);
        }, 1500);
    };

    return (
        <div className="flex flex-col h-full w-full bg-white/60 backdrop-blur-xl border-r border-white/60 shadow-xl shadow-orange-500/5 overflow-hidden font-sans">

            <div id="messages" className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-orange-100 scrollbar-track-transparent">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>

                        {msg.role === 'ai' && (
                            <div className="w-8 h-8 rounded-xl bg-linear-to-br from-orange-400 to-red-400 flex items-center justify-center text-white shadow-sm shrink-0 mr-3 mt-1">
                                <Sparkles size={14} />
                            </div>
                        )}

                        <div id="message-bubble" className={`
              max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed shadow-sm
              ${msg.role === 'user'
                                ? 'bg-slate-900 text-white rounded-br-sm'
                                : msg.role === 'system'
                                    ? 'w-full bg-transparent border border-dashed border-slate-300 text-slate-500 shadow-none flex items-center gap-2 justify-center py-2'
                                    : 'bg-white border border-white/50 text-slate-600 rounded-tl-sm'
                            }
            `}>
                            {msg.role === 'system' ? (
                                <>
                                    <Loader2 size={14} className="animate-spin" />
                                    <span className="font-medium text-xs uppercase tracking-wide">{msg.content}</span>
                                </>
                            ) : (
                                msg.content
                            )}
                        </div>

                    </div>
                ))}

                {isTyping && (
                    <div id="typing-indicator" className="flex w-full justify-start">
                        <div className="w-8 h-8 rounded-xl bg-linear-to-br from-orange-400 to-red-400 flex items-center justify-center text-white shadow-sm shrink-0 mr-3 mt-1">
                            <Sparkles size={14} />
                        </div>
                        <div className="bg-white border border-white/50 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            <div id="chat-input" className="p-4 bg-white/40 border-t border-white/60 shrink-0">
                <form onSubmit={handleSend} className="relative group">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a change..."
                        className="w-full bg-white border border-slate-200 rounded-xl pl-4 pr-12 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100 transition-all shadow-sm"
                    />

                    <button
                        type="submit"
                        disabled={!input.trim()}
                        className={`absolute right-2 top-2 bottom-2 aspect-square rounded-lg flex items-center justify-center transition-all duration-200 ${input.trim()
                                ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-md'
                                : 'bg-slate-100 text-slate-300'
                            }`}
                    >
                        <Send size={16} />
                    </button>
                </form>
                <div className="text-center mt-2">
                    <span className="text-[10px] text-slate-400 font-medium">AI can make mistakes. Review generated assets.</span>
                </div>
            </div>

        </div>
    );
}