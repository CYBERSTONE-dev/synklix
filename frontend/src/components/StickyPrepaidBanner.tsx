import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";

const STORAGE_KEY = "synklix_prepaid_banner_dismissed";

export default function StickyPrepaidBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] lg:hidden">
      <div className="bg-[#111111] text-white flex items-center justify-between px-3 py-2 gap-2">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className="text-sm">🔥</span>
          <p className="text-xs font-semibold truncate">
            Prepaid Orders: Extra ₹100 OFF + Free Shipping
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Link
            to="/shop"
            className="bg-[#4DA6FF] text-white text-xs font-bold px-3 py-1.5 rounded-full hover:bg-[#3a95ee] transition-colors whitespace-nowrap"
          >
            Shop Now
          </Link>
          <button
            onClick={dismiss}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Dismiss banner"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
