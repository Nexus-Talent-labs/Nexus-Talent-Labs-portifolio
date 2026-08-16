'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Linkedin, CheckCircle2 } from 'lucide-react';

export interface FacultyMemberItem {
  id: string;
  initials: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  photo: string;
}

interface FacultyFlipCardProps {
  member: FacultyMemberItem;
}

export default function FacultyFlipCard({ member }: FacultyFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-full h-[380px] [perspective:1200px] cursor-pointer group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-full h-full rounded-3xl"
      >
        {/* FRONT SIDE: Full Photo of Person */}
        <div
          style={{ backfaceVisibility: 'hidden' }}
          className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#0a0b12]"
        >
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b12] via-[#0a0b12]/40 to-transparent" />

          {/* Top Initials Badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-extrabold bg-black/60 border border-white/20 text-cyan-300 backdrop-blur-md">
              {member.initials}
            </span>
          </div>

          {/* Bottom Person Summary */}
          <div className="absolute bottom-5 left-5 right-5 z-10 space-y-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-blue-500/20 border border-blue-400/30 text-cyan-300 inline-block">
              {member.role}
            </span>
            <h3 className="text-xl font-extrabold text-white font-['Outfit']">
              {member.name}
            </h3>
            <p className="text-xs text-zinc-300 font-mono flex items-center gap-1">
              Hover to Flip Profile 🔄
            </p>
          </div>
        </div>

        {/* BACK SIDE: Flipped 180 deg - Small Image Top Center + Full Details */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
          className="absolute inset-0 w-full h-full rounded-3xl p-6 bg-gradient-to-b from-[#0e101d] to-[#080912] border border-cyan-500/40 shadow-[0_20px_50px_rgba(56,189,248,0.15)] flex flex-col justify-between text-center"
        >
          {/* Top Center Small Image */}
          <div className="space-y-3 pt-2">
            <div className="relative w-20 h-20 mx-auto rounded-full p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-400 shadow-xl border border-white/20">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover rounded-full"
              />
              <span className="absolute bottom-0 right-0 p-1 bg-blue-600 rounded-full border border-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              </span>
            </div>

            {/* Name & Role */}
            <div>
              <h3 className="text-lg font-extrabold text-white font-['Outfit']">
                {member.name}
              </h3>
              <p className="text-xs font-bold text-cyan-400 mt-0.5">
                {member.role}
              </p>
              <p className="text-[11px] text-zinc-400 font-medium mt-1 leading-snug">
                {member.company}
              </p>
            </div>
          </div>

          {/* Bio Description */}
          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-zinc-300 leading-relaxed font-sans text-left">
            <p className="line-clamp-4">{member.bio}</p>
          </div>

          {/* Footer Status */}
          <div className="flex items-center justify-between text-[11px] pt-1 text-zinc-400 border-t border-white/10">
            <span className="flex items-center gap-1 text-cyan-300 font-semibold">
              <Award className="w-3.5 h-3.5 text-purple-400" /> Verified Mentor
            </span>
            <span className="font-mono text-cyan-400 font-bold">Nexus Labs</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
