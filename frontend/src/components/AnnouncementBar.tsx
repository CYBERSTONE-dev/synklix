import { useState } from 'react';
import { X } from 'lucide-react';

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-brand-blue text-white py-2 px-4 text-center text-sm font-medium relative">
      <span className="block sm:inline">
        🚚 Free Shipping on Prepaid Orders Across India — COD Available | Order Now →
      </span>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-white/80 transition-colors"
        aria-label="Dismiss announcement"
      >
        <X size={16} />
      </button>
    </div>
  );
}
