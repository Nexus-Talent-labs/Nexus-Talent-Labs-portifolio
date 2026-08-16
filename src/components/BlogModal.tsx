'use client';

import React from 'react';
import { BlogPost } from '@/data/blog';
import { X, Clock, Calendar, User, Share2, Sparkles, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import Magnet from '@/components/reactbits/Magnet';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onOpenApply: () => void;
}

export default function BlogModal({ post, onClose, onOpenApply }: BlogModalProps) {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl glass-panel rounded-3xl border border-white/20 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-[#09090b]/90 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-blue-500/10 border border-blue-500/20 text-cyan-300">
              {post.category}
            </span>
            <span className="text-xs text-zinc-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-cyan-400" /> {post.readTime}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Article Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 custom-scrollbar">
          
          {/* Title & Metadata */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit'] leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-b border-white/10 pb-6 text-xs text-zinc-400">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm border border-white/20">
                  {post.author.avatar}
                </div>
                <div>
                  <span className="text-white font-semibold block">{post.author.name}</span>
                  <span className="text-zinc-500 text-[11px]">{post.author.role}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-zinc-500">
                <Calendar className="w-3.5 h-3.5" /> Published on {post.date}
              </div>
            </div>
          </div>

          {/* Excerpt Box */}
          <div className="p-5 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-sm text-cyan-200 leading-relaxed italic">
            "{post.excerpt}"
          </div>

          {/* Full Content Paragraphs */}
          <div className="space-y-6 text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
            {post.content.map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-xl font-bold text-white font-['Outfit'] pt-4 text-cyan-300">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              return (
                <p key={idx} className="text-zinc-300 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Article Footer CTA Box */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-purple-950/40 to-black/60 border border-white/15 space-y-4 text-center">
            <h4 className="text-xl font-bold text-white font-['Outfit']">
              Ready to Master Enterprise Software & AI Engineering?
            </h4>
            <p className="text-xs text-zinc-300 max-w-lg mx-auto leading-relaxed">
              Build production-grade capstones and receive 1-on-1 mentorship from top Silicon Valley tech leads at Nexus Talent Labs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Magnet strength={15}>
                <button
                  onClick={() => {
                    onClose();
                    onOpenApply();
                  }}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-bold text-xs text-white shadow-xl flex items-center gap-2 hover:opacity-90"
                >
                  <Sparkles className="w-4 h-4 text-cyan-300" /> Apply For Admissions
                </button>
              </Magnet>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-semibold text-xs text-zinc-300"
              >
                Close Article
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
