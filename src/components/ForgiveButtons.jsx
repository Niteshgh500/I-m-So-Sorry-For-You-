import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, PartyPopper, Smile, Frown, Gift } from 'lucide-react';
import { sounds } from '../utils/audio';

const PLEADING_MESSAGES = [
  "No 🥺",
  "Are you sure? 🥺",
  "Pwease reconsider? 🥺👉👈",
  "Look at my sad eyes... 🥺",
  "I'll buy you Boba / Dessert! 🧋",
  "I'll do all chores for a week! 🧼",
  "Don't break my tiny bear heart 💔",
  "What if I give unlimited hugs? 🫂",
  "Pretty please with cherry on top? 🍒",
  "Okay last chance to click YES! 💖",
];

export function ForgiveButtons({ name, setMood, onForgiven }) {
  const [noCount, setNoCount] = useState(0);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [isForgiven, setIsForgiven] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Dynamic growth factor for YES button based on 'No' clicks
  const yesScale = Math.min(1 + noCount * 0.22, 2.5);

  const handleYesClick = () => {
    sounds.playFanfare();
    setIsForgiven(true);
    setMood('happy');
    if (onForgiven) onForgiven();

    // Trigger sweet confetti burst
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#f472b6', '#fb7185', '#38bdf8', '#fcd34d', '#c084fc'],
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });

    setShowModal(true);
  };

  const handleNoInteraction = () => {
    sounds.playSqueak();
    setNoCount((prev) => prev + 1);
    setMood('pleading');

    // Calculate a random offset to make 'No' button run away playfully
    const randomX = (Math.random() - 0.5) * 260;
    const randomY = (Math.random() - 0.5) * 160;
    setNoPos({ x: randomX, y: randomY });
  };

  const currentNoText = PLEADING_MESSAGES[Math.min(noCount, PLEADING_MESSAGES.length - 1)];

  return (
    <div className="my-8 text-center px-4 relative z-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 flex items-center justify-center gap-2">
        <span>Will you forgive me, {name}?</span>
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          🥺
        </motion.span>
      </h2>

      {!isForgiven ? (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 min-h-[120px] relative">
          {/* YES BUTTON */}
          <motion.button
            style={{ scale: yesScale }}
            whileHover={{ scale: yesScale * 1.08 }}
            whileTap={{ scale: yesScale * 0.95 }}
            onClick={handleYesClick}
            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-pink-300/50 hover:shadow-xl transition-all flex items-center gap-2 border-2 border-pink-200 cursor-pointer text-lg"
          >
            <Heart fill="currentColor" size={22} className="animate-pulse" />
            <span>Yes, I forgive you! 💕</span>
          </motion.button>

          {/* NO / RUNAWAY BUTTON */}
          <motion.button
            animate={{ x: noPos.x, y: noPos.y }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onMouseEnter={handleNoInteraction}
            onClick={handleNoInteraction}
            className="bg-slate-200 hover:bg-rose-100 text-slate-700 font-semibold px-6 py-3 rounded-full shadow border border-slate-300 hover:border-rose-300 text-sm transition-colors cursor-pointer select-none"
          >
            {currentNoText}
          </motion.button>
        </div>
      ) : (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-pink-100 border border-pink-300 text-pink-800 p-6 rounded-3xl max-w-md mx-auto shadow-md"
        >
          <div className="flex items-center justify-center gap-2 text-2xl font-bold mb-2">
            <PartyPopper className="text-pink-600" />
            <span>THANK YOU SO MUCH! ❤️</span>
            <PartyPopper className="text-pink-600" />
          </div>
          <p className="text-sm sm:text-base font-medium">
            You just made me the happiest person ever! I promise to make it up to you every single day! 🥰✨
          </p>
        </motion.div>
      )}

      {/* CELEBRATION MODAL */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl border-4 border-pink-200 relative overflow-hidden"
            >
              <div className="text-6xl mb-4">🥳💖🎉</div>
              <h3 className="text-2xl font-extrabold text-pink-600 mb-2">
                Yay! Forgiveness Granted!
              </h3>
              <p className="text-slate-600 mb-6 text-sm sm:text-base">
                Thank you for being so forgiving and sweet, {name}! Scroll down to read my special letter and claim your custom apology coupons! 🎟️✨
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition cursor-pointer text-base"
              >
                Claim My Apology Gifts! 🎁
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
