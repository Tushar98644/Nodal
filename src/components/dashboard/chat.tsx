'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Loader2, CheckCircle2 } from 'lucide-react';
import { ChatComponentProps, Message } from '@/types';

export const ChatComponent = ({ onSubmit, isLoading }: ChatComponentProps) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'ai',
      content: "I've drafted a logo and landing page based on your inputs. Use this chat to refine the design (e.g., 'Make the primary color blue')."
    }
  ]);

  useEffect(() => {
    if (!isLoading && messages.length > 1) {
      const lastMsg = messages[messages.length - 1];
      if (lastMsg.role === 'user') {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          role: 'system',
          content: "Assets updated successfully."
        }]);
      }
    }
  }, [isLoading]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');

    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', content: userText }]);
    onSubmit(userText);
  };

  return (
    <div className="relative w-full h-full flex flex-col font-sans text-slate-900 bg-white/40 overflow-hidden pt-12">
      
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#FFDAC1] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-0 w-[250px] h-[250px] bg-[#FFCCB6] rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="flex-1 overflow-y-auto p-4 md:p-6 pb-32 scrollbar-thin scrollbar-thumb-orange-100/50 scrollbar-track-transparent z-10 w-full">
        <div className="flex flex-col space-y-6">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex w-full group ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              
              {msg.role === 'ai' && (
                <div className="w-8 h-8 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500 shrink-0 mr-3 shadow-sm mt-1 border border-orange-200/50">
                  <Sparkles size={14} fill="currentColor" />
                </div>
              )}

              <div className={`
                max-w-[85%] text-sm leading-relaxed transition-all duration-300
                ${msg.role === 'user' 
                  ? 'bg-slate-900 text-white rounded-2xl rounded-tr-sm px-5 py-3 shadow-lg shadow-slate-900/10' 
                  : msg.role === 'system'
                    ? 'bg-transparent text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2 py-1 ml-1'
                    : 'bg-white/80 backdrop-blur-md border border-white/60 shadow-sm text-slate-700 rounded-2xl rounded-tl-sm px-5 py-3'
                }
              `}>
                {msg.role === 'system' ? (
                  <>
                    {msg.content.includes("updated") ? <CheckCircle2 size={12} className="text-green-500" /> : <Loader2 size={12} className="animate-spin text-orange-400" />}
                    {msg.content}
                  </>
                ) : (
                  msg.content
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex w-full justify-start animate-fade-in-up">
              <div className="w-8 h-8 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500 shrink-0 mr-3 shadow-sm mt-1 border border-orange-200/50">
                <Sparkles size={14} fill="currentColor" />
              </div>
              <div className="bg-white/60 backdrop-blur-sm border border-white/60 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1.5 h-[46px]">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} className="h-4" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-linear-to-t from-white via-white/95 to-transparent z-20">
        <form onSubmit={handleSend} className="relative max-w-2xl mx-auto w-full">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              placeholder={isLoading ? "Generating assets..." : "Type a change..."}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-4 pr-12 py-3.5 text-sm md:text-base text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className={`absolute right-2 aspect-square p-2 rounded-lg flex items-center justify-center transition-all duration-200 ${
                input.trim() && !isLoading
                  ? 'bg-slate-900 text-white hover:bg-orange-500 shadow-md cursor-pointer transform hover:scale-105 active:scale-95'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} className={input.trim() ? "translate-x-0.5" : ""} />}
            </button>
          </div>
          
          <div className="mt-2 text-center">
             <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold opacity-60">AI Chat Assistant</span>
          </div>
        </form>
      </div>
    </div>
  );
}