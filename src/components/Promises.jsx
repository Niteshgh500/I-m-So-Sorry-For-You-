import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, ShieldCheck, Sun, Sparkles, SmilePlus } from 'lucide-react';
import { sounds } from '../utils/audio';

const PROMISES = [
  {
    icon: <Sun className="text-amber-500" size={24} />,
    title: "I'll Listen More Attentively",
    description: "I promise to give you my full attention, put away distractions, and truly hear what's on your mind.",
  },
  {
    icon: <Heart className="text-rose-500" size={24} />,
    title: "I'll Cherish Your Feelings",
    description: "Your emotions matter deeply to me. I'll make sure you always feel valued, loved, and respected.",
  },
  {
    icon: <ShieldCheck className="text-emerald-500" size={24} />,
    title: "I'll Be More Patient & Gentle",
    description: "No matter how hectic life gets, I will stay patient, calm, and treat you with endless tenderness.",
  },
  {
    icon: <SmilePlus className="text-sky-500" size={24} />,
    title: "I'll Bring You Daily Smiles",
    description: "I will make it my mission to fill your days with laughter, cozy moments, and silly little happy surprises.",
  },
];

export function Promises({ name }) {
  const [activePromise, setActivePromise] = useState(null);

  return (
    <div className="my-12 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-pink-600 bg-pink-100 px-3 py-1 rounded-full mb-2">
          <Star size={14} /> Pinky Promises
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
          My Sincere Promises To You 💖
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          Four solemn promises I am making to keep {name} happy and loved!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PROMISES.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              sounds.playPop();
              setActivePromise(activePromise === idx ? null : idx);
            }}
            className={`p-6 rounded-3xl border-2 transition-all cursor-pointer shadow-sm ${
              activePromise === idx
                ? 'bg-rose-100 border-rose-400 shadow-md'
                : 'bg-white border-pink-100 hover:border-pink-300'
            }`}
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-pink-50 rounded-2xl shadow-inner">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-base sm:text-lg">
                {item.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
