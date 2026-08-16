'use client';

import React, { useState } from 'react';
import { Sparkles, MessageSquare, X, Send, Cpu, ArrowRight } from 'lucide-react';

export default function AskAIWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hello! I am Nexus AI Assistant. How can I help you choose your tech career track today?' }
  ]);
  const [inputMsg, setInputMsg] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;

    const newMsgs = [...messages, { sender: 'user', text: inputMsg }];
    setMessages(newMsgs);
    setInputMsg('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { 
          sender: 'ai', 
          text: 'Nexus Talent Labs offers 100% practical, lab-based programs in AI & ML, Full Stack, DevOps, and Cybersecurity with guaranteed placement assistance. Would you like to view our Fast-Track August batch schedule?' 
        }
      ]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-400 shadow-2xl shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all"
        >
          <div className="px-4 py-3 rounded-[15px] bg-[#09090b] text-white flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-blue-600/20 text-cyan-400 border border-blue-500/30">
              <Cpu className="w-4 h-4 animate-pulse" />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block leading-none">Instant Help</span>
              <span className="text-xs font-bold text-white font-['Outfit']">Ask AI Assistant</span>
            </div>
          </div>
        </button>
      ) : (
        <div className="w-80 sm:w-96 glass-panel rounded-3xl p-5 border border-white/20 shadow-2xl space-y-4 animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-xl bg-blue-600/20 text-cyan-400 border border-blue-500/30">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white font-['Outfit']">Nexus AI Assistant</h4>
                <span className="text-[10px] text-emerald-400 font-semibold block">Online • 24/7 Academic Support</span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="h-60 overflow-y-auto space-y-3 pr-1 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[82%] p-3 rounded-2xl ${
                    m.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-white/[0.04] border border-white/10 text-zinc-200 rounded-bl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="flex gap-2">
            <input
              type="text"
              placeholder="Ask about courses, fees, placements..."
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              className="flex-1 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
