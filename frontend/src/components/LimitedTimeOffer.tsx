import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { Clock, Zap } from 'lucide-react';

function getTimeLeft() {
  const now = new Date();
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  const diff = end.getTime() - now.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { hours, minutes, seconds };
}

const offerBanners = [
  { emoji: "🔥", text: "Limited Time Offer: 10% OFF on Prepaid Orders" },
  { emoji: "🎉", text: "Buy 2 Get 1 Free (Selected Products)" },
  { emoji: "⚡", text: "Prepaid Orders Get Dispatch in 24 Hours" },
];

export default function LimitedTimeOffer() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section className="py-16 md:py-20 bg-brand-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-blue/20 text-brand-blue px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          <Zap size={14} />
          Flash Sale
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
          Limited Time Deal
        </h2>
        <p className="text-gray-400 text-lg mb-6">
          Grab these exclusive deals before they're gone!
        </p>

        {/* Offer Banners */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8 justify-center">
          {offerBanners.map(({ emoji, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm font-semibold text-white flex-1 justify-center"
            >
              <span className="text-lg">{emoji}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Countdown */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <Clock size={14} />
            Ends in:
          </div>
          {[
            { label: 'HRS', value: pad(time.hours) },
            { label: 'MIN', value: pad(time.minutes) },
            { label: 'SEC', value: pad(time.seconds) },
          ].map(({ label, value }, i) => (
            <div key={label} className="flex items-center gap-2">
              {i > 0 && <span className="text-brand-blue font-bold text-2xl">:</span>}
              <div className="bg-brand-blue/10 border border-brand-blue/30 rounded-xl px-4 py-3 min-w-[64px] text-center">
                <span className="text-brand-blue font-extrabold text-2xl">{value}</span>
                <p className="text-gray-500 text-xs mt-0.5">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-brand-blue text-white px-10 py-4 rounded-full font-bold text-base hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 min-h-[44px]"
        >
          <Zap size={18} />
          Shop the Sale
        </Link>
      </div>
    </section>
  );
}
