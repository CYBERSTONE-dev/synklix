import { useEffect, useState } from 'react';
import { X, Gift } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const SESSION_KEY = 'synklix_exit_popup_shown';
    if (sessionStorage.getItem(SESSION_KEY)) return;

    let inactivityTimer: ReturnType<typeof setTimeout>;

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 10) {
        showPopup();
      }
    };

    const resetInactivity = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(showPopup, 30000);
    };

    const showPopup = () => {
      if (sessionStorage.getItem(SESSION_KEY)) return;
      setVisible(true);
      sessionStorage.setItem(SESSION_KEY, 'true');
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchstart', resetInactivity);
      clearTimeout(inactivityTimer);
    };

    // Desktop: exit intent
    document.addEventListener('mousemove', handleMouseMove);

    // Mobile: inactivity timer
    document.addEventListener('touchstart', resetInactivity);
    resetInactivity();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchstart', resetInactivity);
      clearTimeout(inactivityTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in zoom-in-95 fade-in duration-300">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift size={32} className="text-brand-blue" />
          </div>
          <h2 className="text-2xl font-extrabold text-brand-black mb-2">
            Wait! Don't Leave Without Your Discount 🎁
          </h2>
          <p className="text-gray-500 mb-2">
            Get an exclusive <span className="font-bold text-brand-blue">10% OFF</span> on your first prepaid order.
          </p>
          <p className="text-sm text-gray-400 mb-6">
            Limited time offer — valid today only!
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <p className="text-xs text-gray-500 mb-1">Use code at checkout</p>
            <p className="text-2xl font-extrabold text-brand-blue tracking-widest">SYNKLIX10</p>
          </div>

          <Link
            to="/shop"
            onClick={() => setVisible(false)}
            className="block w-full bg-brand-blue text-white py-4 rounded-full font-bold text-base hover:bg-blue-600 transition-all min-h-[44px] text-center"
          >
            Claim Offer & Shop Now
          </Link>
          <button
            onClick={() => setVisible(false)}
            className="mt-3 text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            No thanks, I'll pay full price
          </button>
        </div>
      </div>
    </div>
  );
}
