import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Edit3, Check } from 'lucide-react';
import { sounds } from '../utils/audio';

export function Mascot({ mood }) {
  // mood: 'sad' | 'pleading' | 'happy' | 'crying'
  return (
    <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto my-4 flex items-center justify-center">
      {/* Background Soft Glow */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className={`absolute inset-0 rounded-full blur-xl ${
          mood === 'happy' ? 'bg-pink-300' : 'bg-rose-200'
        }`}
      />

      {/* SVG Bear Mascot */}
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full relative z-10 drop-shadow-md cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => sounds.playSqueak()}
      >
        {/* Bear Ears */}
        <circle cx="55" cy="55" r="28" fill="#FBBF24" />
        <circle cx="55" cy="55" r="16" fill="#F472B6" opacity="0.6" />
        <circle cx="145" cy="55" r="28" fill="#FBBF24" />
        <circle cx="145" cy="55" r="16" fill="#F472B6" opacity="0.6" />

        {/* Bear Head */}
        <circle cx="100" cy="110" r="70" fill="#FCD34D" />

        {/* Cheeks */}
        <ellipse cx="65" cy="120" rx="12" ry="8" fill="#FB7185" opacity="0.7" />
        <ellipse cx="135" cy="120" rx="12" ry="8" fill="#FB7185" opacity="0.7" />

        {/* Snout */}
        <ellipse cx="100" cy="122" rx="22" ry="16" fill="#FFFBEB" />
        <ellipse cx="100" cy="116" rx="8" ry="6" fill="#78350F" />

        {/* Eyes & Expressions depending on mood */}
        {mood === 'happy' ? (
          <>
            {/* Happy Curved Eyes ^ ^ */}
            <path d="M 68 100 Q 78 88 88 100" stroke="#78350F" strokeWidth="5" strokeLinecap="round" fill="none" />
            <path d="M 112 100 Q 122 88 132 100" stroke="#78350F" strokeWidth="5" strokeLinecap="round" fill="none" />
            {/* Happy Smile */}
            <path d="M 90 126 Q 100 138 110 126" stroke="#78350F" strokeWidth="4" strokeLinecap="round" fill="none" />
            {/* Sparkles around eyes */}
            <circle cx="55" cy="88" r="3" fill="#EC4899" />
            <circle cx="145" cy="88" r="3" fill="#EC4899" />
          </>
        ) : mood === 'pleading' ? (
          <>
            {/* Big Pleading Glossy Eyes */}
            <circle cx="78" cy="98" r="11" fill="#78350F" />
            <circle cx="75" cy="95" r="4" fill="#FFFFFF" />
            <circle cx="81" cy="101" r="2" fill="#FFFFFF" />

            <circle cx="122" cy="98" r="11" fill="#78350F" />
            <circle cx="119" cy="95" r="4" fill="#FFFFFF" />
            <circle cx="125" cy="101" r="2" fill="#FFFFFF" />

            {/* Sad eyebrows */}
            <path d="M 68 86 Q 78 92 88 88" stroke="#78350F" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M 112 88 Q 122 92 132 86" stroke="#78350F" strokeWidth="3" strokeLinecap="round" fill="none" />

            {/* Small wobbly mouth ~ */}
            <path d="M 94 128 Q 100 124 106 128" stroke="#78350F" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          </>
        ) : (
          <>
            {/* Sad Droopy Eyes */}
            <circle cx="78" cy="98" r="9" fill="#78350F" />
            <circle cx="76" cy="96" r="3" fill="#FFFFFF" />
            <circle cx="122" cy="98" r="9" fill="#78350F" />
            <circle cx="120" cy="96" r="3" fill="#FFFFFF" />

            {/* Teardrops */}
            <motion.path
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              d="M 68 112 C 68 112 64 122 68 126 C 72 126 72 118 68 112 Z"
              fill="#60A5FA"
            />
            <motion.path
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
              d="M 132 112 C 132 112 128 122 132 126 C 136 126 136 118 132 112 Z"
              fill="#60A5FA"
            />

            {/* Downward Mouth */}
            <path d="M 92 130 Q 100 122 108 130" stroke="#78350F" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          </>
        )}

        {/* Paws holding a heart */}
        {mood === 'happy' ? (
          <g>
            <motion.path
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 1 }}
              d="M 100 135 L 82 155 C 75 162 85 172 100 185 C 115 172 125 162 118 155 Z"
              fill="#EC4899"
            />
            {/* Left & Right Paws */}
            <circle cx="76" cy="150" r="12" fill="#FCD34D" stroke="#78350F" strokeWidth="2" />
            <circle cx="124" cy="150" r="12" fill="#FCD34D" stroke="#78350F" strokeWidth="2" />
          </g>
        ) : (
          <g>
            {/* Little Heart being held tightly */}
            <path
              d="M 100 142 C 95 132 80 135 80 148 C 80 158 100 170 100 170 C 100 170 120 158 120 148 C 120 135 105 132 100 142 Z"
              fill="#F43F5E"
            />
            <circle cx="76" cy="150" r="11" fill="#FCD34D" stroke="#78350F" strokeWidth="1.5" />
            <circle cx="124" cy="150" r="11" fill="#FCD34D" stroke="#78350F" strokeWidth="1.5" />
          </g>
        )}
      </motion.svg>
    </div>
  );
}

export function Hero({ name, setName, mood }) {
  const [isEditing, setIsEditing] = useState(false);

  // Floating background hearts data
  const hearts = Array.from({ length: 12 });

  return (
    <div className="relative pt-8 pb-4 text-center px-4 overflow-hidden">
      {/* Floating Animated Ambient Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {hearts.map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300 opacity-40"
            style={{
              left: `${(i * 9 + 4) % 100}%`,
              top: `${(i * 15 + 10) % 90}%`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, (i % 2 === 0 ? 10 : -10), 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <Heart size={16 + (i % 4) * 6} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Main Title Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 bg-pink-100/80 backdrop-blur-sm border border-pink-200 text-pink-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4 shadow-sm"
      >
        <Sparkles className="w-4 h-4 text-pink-500 animate-spin" style={{ animationDuration: '4s' }} />
        <span>Sincere Apology Card & Interactive Wish</span>
        <Sparkles className="w-4 h-4 text-pink-500 animate-spin" style={{ animationDuration: '4s' }} />
      </motion.div>

      {/* Editable Target Name Header */}
      <div className="flex items-center justify-center gap-2 mb-2 relative z-10">
        {isEditing ? (
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-2xl shadow-md border border-pink-300">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-2xl sm:text-3xl font-bold text-pink-600 focus:outline-none text-center max-w-[220px]"
              autoFocus
              maxLength={20}
            />
            <button
              onClick={() => setIsEditing(false)}
              className="bg-pink-500 text-white p-1.5 rounded-xl hover:bg-pink-600 transition"
              title="Save Name"
            >
              <Check size={18} />
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 group">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-pink-600 tracking-tight">
              Dearest <span className="underline decoration-pink-300 decoration-wavy underline-offset-4">{name}</span> 💕
            </h1>
            <button
              onClick={() => setIsEditing(true)}
              className="text-pink-400 hover:text-pink-600 opacity-60 group-hover:opacity-100 transition p-1"
              title="Change Name"
            >
              <Edit3 size={20} />
            </button>
          </div>
        )}
      </div>

      <p className="text-base sm:text-lg text-slate-600 max-w-md mx-auto font-medium">
        {mood === 'happy'
          ? "Yay!! You just made my entire world light up with happiness! ✨🎉"
          : "I made a mistake, and my heart won't stop aching until I make things right..."}
      </p>

      {/* Mascot Render */}
      <Mascot mood={mood} />
    </div>
  );
}
