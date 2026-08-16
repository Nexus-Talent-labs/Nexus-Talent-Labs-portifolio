'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Bot, Zap, ShieldCheck, ArrowUp } from 'lucide-react';

export default function AskAIWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [popupPositionClass, setPopupPositionClass] = useState('bottom-full mb-3 right-0');
  const [dockedSide, setDockedSide] = useState<'left' | 'right' | 'none'>('none');
  const widgetRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hello! I am your Nexus AI Career Agent. How can I assist you with technology tracks, certifications, and placement support today?' }
  ]);
  const [inputMsg, setInputMsg] = useState('');

  // Track scroll depth to toggle Scroll To Top arrow button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate popup direction AND handle edge docking
  const handleDragEnd = () => {
    if (!widgetRef.current) return;
    const rect = widgetRef.current.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Detect if dropped close to left or right edges (within 100px)
    if (rect.left < 100) {
      setDockedSide('left');
    } else if (windowWidth - rect.right < 100) {
      setDockedSide('right');
    } else {
      setDockedSide('none');
    }

    // Direction calculation for chat popup
    const isTopHalf = rect.top < windowHeight / 2;
    const isLeftHalf = rect.left < windowWidth / 2;

    let verticalClass = isTopHalf ? 'top-full mt-3' : 'bottom-full mb-3';
    let horizontalClass = isLeftHalf ? 'left-0' : 'right-0';

    setPopupPositionClass(`${verticalClass} ${horizontalClass}`);
  };

  const handleToggle = () => {
    handleDragEnd();
    setIsOpen((prev) => !prev);
  };

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
          text: 'Nexus Talent Labs offers 100% practical, lab-based programs in AI & ML, Full Stack, DevOps, and Cybersecurity with guaranteed placement assistance. Would you like to schedule a 1-on-1 career advisory call?' 
        }
      ]);
    }, 800);
  };

  // Determine edge docking CSS transform classes
  let dockingClass = '';
  if (dockedSide === 'left') {
    dockingClass = '-translate-x-3/4 opacity-60 hover:translate-x-0 hover:opacity-100';
  } else if (dockedSide === 'right') {
    dockingClass = 'translate-x-3/4 opacity-60 hover:translate-x-0 hover:opacity-100';
  }

  return (
    // Draggable Container with Edge Docking Physics
    <motion.div 
      ref={widgetRef}
      drag
      dragMomentum={true}
      dragElastic={0.1}
      onDragEnd={handleDragEnd}
      className={`fixed bottom-6 right-6 z-50 cursor-grab active:cursor-grabbing select-none transition-all duration-300 ${dockingClass}`}
    >
      <div className="relative flex flex-col items-center group">
        
        {/* FLOATING SCROLL-UP ARROW BUTTON (Positioned Directly Above AI Bot) */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              onClick={scrollToTop}
              aria-label="Scroll to top of screen"
              title="Scroll to top of page"
              className="mb-2.5 p-2.5 rounded-full bg-[#09090b]/95 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-cyan-500/20 backdrop-blur-md shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group/arrow cursor-pointer"
            >
              <ArrowUp className="w-4 h-4 group-hover/arrow:-translate-y-0.5 transition-transform text-cyan-300" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Borderless Draggable AI Bot Trigger Button */}
        <button
          onClick={handleToggle}
          aria-label="Open Draggable AI Agent Assistant"
          className="group/btn relative p-3 rounded-full bg-[#09090b]/90 backdrop-blur-md hover:scale-110 active:scale-95 transition-transform shadow-2xl"
        >
          <div className="relative flex items-center justify-center text-cyan-400 group-hover/btn:text-cyan-300 transition-colors">
            <Bot className="w-7 h-7" />
            <Zap className="w-3.5 h-3.5 text-purple-400 absolute -top-1 -right-1 animate-pulse" />

            {/* Online Live Status Ping Indicator */}
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute -top-1 -left-1 animate-ping" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute -top-1 -left-1" />
          </div>
        </button>

        {/* Edge Docking Peek Indicator */}
        {dockedSide !== 'none' && !isOpen && (
          <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-0.5 rounded-full whitespace-nowrap pointer-events-none">
            TAP TO UN-DOCK
          </span>
        )}

        {/* SMART DIRECTIONAL CHAT POPUP (Opens Up/Down/Left/Right based on Bot Position) */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className={`absolute ${popupPositionClass} w-80 sm:w-96 glass-panel rounded-3xl p-5 border border-cyan-500/30 bg-[#090b22]/95 backdrop-blur-xl shadow-[0_0_50px_rgba(56,189,248,0.25)] space-y-4 cursor-default z-50`}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="relative p-2 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 text-white shadow-md">
                  <Bot className="w-4 h-4" />
                  <Sparkles className="w-2.5 h-2.5 text-cyan-300 absolute -top-0.5 -right-0.5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-white font-['Outfit'] flex items-center gap-1.5">
                    Nexus AI Agent <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  </h4>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold block">
                    ACTIVE • EDGE DOCKING ENABLED
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Container */}
            <div className="h-64 overflow-y-auto space-y-3 pr-1 text-xs [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      m.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-none shadow-md'
                        : 'bg-white/[0.05] border border-cyan-500/30 text-zinc-200 rounded-bl-none font-sans'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="flex gap-2 pt-1">
              <input
                type="text"
                placeholder="Ask AI Agent about courses & placements..."
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/15 text-white text-xs focus:outline-none focus:border-cyan-400 font-sans"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
