import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, Sparkles, X, ChevronDown, Feather } from 'lucide-react';
import { sounds } from '../utils/audio';

export function ApologyLetter({ name }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    sounds.playPop();
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-12 px-4 max-w-xl mx-auto">
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-500 bg-rose-100 px-3 py-1 rounded-full mb-2">
          <Feather size={14} /> From The Heart
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
          A Handwritten Letter For You ✉️
        </h2>
        <p className="text-slate-500 text-sm mt-1">Tap the envelope to open and read</p>
      </div>

      {/* ENVELOPE CARD */}
      <div className="relative cursor-pointer group" onClick={toggleOpen}>
        {!isOpen ? (
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-br from-rose-200 via-pink-100 to-rose-300 p-8 rounded-3xl shadow-lg border-2 border-rose-300 relative overflow-hidden flex flex-col items-center justify-center min-h-[220px]"
          >
            {/* Envelope Flap Lines */}
            <div className="absolute top-0 inset-x-0 h-28 bg-rose-300/40 clip-path-triangle border-b border-rose-300/60 pointer-events-none" />

            {/* Heart Seal Stamp */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-16 h-16 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-md z-10 my-2"
            >
              <Heart fill="currentColor" size={28} />
            </motion.div>

            <span className="font-script text-2xl text-rose-800 font-bold z-10 mt-1">
              For {name}'s Eyes Only 🔒
            </span>
            <p className="text-xs text-rose-600 font-medium z-10 mt-1 flex items-center gap-1">
              <span>Click to open letter</span>
              <ChevronDown size={14} className="animate-bounce" />
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-amber-50/90 border-2 border-amber-200/80 p-6 sm:p-8 rounded-3xl shadow-xl relative text-left backdrop-blur-sm"
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleOpen();
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-amber-100 transition"
              title="Close Letter"
            >
              <X size={20} />
            </button>

            {/* Stamp Detail */}
            <div className="absolute top-4 right-14 w-10 h-12 border-2 border-dashed border-rose-300 bg-rose-50 flex items-center justify-center text-rose-400 text-xs rounded rotate-3">
              💌
            </div>

            <div className="font-script text-3xl text-rose-700 font-bold mb-4">
              My Dearest {name},
            </div>

            <div className="space-y-4 text-slate-700 font-sans leading-relaxed text-sm sm:text-base">
              <p>
                I am writing this because I truly want to apologize for what happened. I care about you more than words can express, and knowing that I upset or hurt you weighs heavily on my heart.
              </p>
              <p>
                Please know it was never my intention to make you feel bad. You mean so much to me, and your happiness and comfort will always be my highest priority.
              </p>
              <p>
                I promise to be more thoughtful, attentive, and caring moving forward. Thank you for being such an amazingly kind, patient, and special person in my life.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-200 flex items-center justify-between">
              <div>
                <p className="font-script text-2xl text-rose-700 font-bold">Forever Yours,</p>
                <p className="text-xs text-slate-500 italic">With all my love & sincere apologies ❤️</p>
              </div>

              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="text-3xl"
              >
                🧸
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
