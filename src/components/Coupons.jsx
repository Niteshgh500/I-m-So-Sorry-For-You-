import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, CheckCircle, Ticket, Heart, Utensils, Tv, Sparkles } from 'lucide-react';
import { sounds } from '../utils/audio';

const COUPONS_DATA = [
  {
    id: 1,
    title: "1x Free Boba & Dessert Date",
    description: "Valid for your favorite boba drink and any sweet treat of your choice, fully on me! 🧋🍰",
    icon: "🧋",
    color: "bg-amber-100 text-amber-800 border-amber-300",
    buttonBg: "bg-amber-500 hover:bg-amber-600",
  },
  {
    id: 2,
    title: "1x 'Win Any Argument' Pass",
    description: "Play this card anytime and I will instantly agree that you were right all along! 👑🏆",
    icon: "👑",
    color: "bg-purple-100 text-purple-800 border-purple-300",
    buttonBg: "bg-purple-500 hover:bg-purple-600",
  },
  {
    id: 3,
    title: "Unlimited Bear Hugs & Cuddles",
    description: "Redeemable 24/7 for warm, cozy bear hugs whenever you feel sad or tired 🫂💖",
    icon: "🫂",
    color: "bg-pink-100 text-pink-800 border-pink-300",
    buttonBg: "bg-pink-500 hover:bg-pink-600",
  },
  {
    id: 4,
    title: "Movie Night Pick of Your Choice",
    description: "You pick the movie, the snacks, and I promise no complaining even if it's 3 hours long! 🍿🎬",
    icon: "🍿",
    color: "bg-rose-100 text-rose-800 border-rose-300",
    buttonBg: "bg-rose-500 hover:bg-rose-600",
  },
];

export function Coupons({ name }) {
  const [redeemed, setRedeemed] = useState({});

  const handleRedeem = (id) => {
    sounds.playPop();
    setRedeemed((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="my-12 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-pink-600 bg-pink-100 px-3 py-1 rounded-full mb-2">
          <Gift size={14} /> VIP Apology Perks
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
          Redeemable Apology Coupons 🎟️
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          Special vouchers issued especially for {name}! Click to claim anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {COUPONS_DATA.map((coupon) => {
          const isRedeemed = redeemed[coupon.id];

          return (
            <motion.div
              key={coupon.id}
              whileHover={{ y: -4 }}
              className={`rounded-3xl p-6 border-2 shadow-md relative overflow-hidden transition-all flex flex-col justify-between ${coupon.color}`}
            >
              {/* Ticket Notch Styling */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-rose-50 border-r-2 border-slate-200" />
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-rose-50 border-l-2 border-slate-200" />

              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="text-3xl p-2 bg-white/80 rounded-2xl shadow-sm">
                    {coupon.icon}
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest opacity-60 uppercase">
                    COUPON #{coupon.id}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-1">{coupon.title}</h3>
                <p className="text-xs sm:text-sm opacity-85 leading-relaxed mb-4">
                  {coupon.description}
                </p>
              </div>

              {/* Redeem Button or Stamp */}
              <div className="mt-2 pt-3 border-t border-current/10 flex items-center justify-between">
                <span className="text-xs font-semibold opacity-75">
                  Expiry: Never Expires ✨
                </span>

                {isRedeemed ? (
                  <motion.div
                    initial={{ scale: 0.5, rotate: -12 }}
                    animate={{ scale: 1, rotate: -6 }}
                    className="flex items-center gap-1 font-bold text-xs uppercase px-3 py-1.5 bg-green-600 text-white rounded-full shadow"
                  >
                    <CheckCircle size={14} /> REDEEMED!
                  </motion.div>
                ) : (
                  <button
                    onClick={() => handleRedeem(coupon.id)}
                    className={`text-white text-xs font-bold px-4 py-2 rounded-xl shadow transition cursor-pointer flex items-center gap-1.5 ${coupon.buttonBg}`}
                  >
                    <Ticket size={14} /> Redeem Now
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
