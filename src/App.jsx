import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { ForgiveButtons } from './components/ForgiveButtons';
import { ApologyLetter } from './components/ApologyLetter';
import { Coupons } from './components/Coupons';
import { Promises } from './components/Promises';
import { Heart, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { sounds } from './utils/audio';

export function App() {
  const [name, setName] = useState("My Sweetheart");
  const [mood, setMood] = useState("sad"); // 'sad' | 'pleading' | 'happy'

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-purple-50 text-slate-800 pb-16 selection:bg-pink-200 selection:text-pink-800 font-sans">
      {/* Top Banner / Decorative bar */}
      <div className="bg-pink-500 text-white text-xs font-semibold py-1.5 px-4 text-center flex items-center justify-center gap-2 shadow-sm">
        <Heart fill="currentColor" size={12} className="animate-pulse" />
        <span>Made with endless love & sincere regret • TAP ANYWHERE TO INTERACT</span>
        <Heart fill="currentColor" size={12} className="animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto px-4">
        {/* Main Header & Mascot */}
        <Hero name={name} setName={setName} mood={mood} />

        {/* Interactive Forgive Decision Buttons */}
        <ForgiveButtons name={name} setMood={setMood} />

        {/* Handwritten Apology Envelope & Letter */}
        <ApologyLetter name={name} />

        {/* Redeemable Gift Vouchers */}
        <Coupons name={name} />

        {/* Pinky Promises */}
        <Promises name={name} />

        {/* Footer */}
        <footer className="mt-16 text-center text-slate-400 text-xs py-6 border-t border-pink-100">
          <p className="flex items-center justify-center gap-1">
            Created with <Heart size={12} className="text-pink-500" fill="currentColor" /> for {name}
          </p>
          <p className="mt-1 opacity-75">I love you so much! 💕</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
