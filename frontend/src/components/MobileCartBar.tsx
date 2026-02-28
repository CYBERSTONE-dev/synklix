import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface MobileCartBarProps {
  productName: string;
  price: number;
  onAddToCart: () => void;
  visible: boolean;
}

export default function MobileCartBar({ productName, price, onAddToCart, visible }: MobileCartBarProps) {
  if (!visible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-gray-200 shadow-lg px-4 py-3">
      <div className="flex items-center gap-3 max-w-lg mx-auto">
        <div className="flex-1 min-w-0">
          <p className="text-xs text-gray-500 truncate">{productName}</p>
          <p className="text-base font-bold text-[#111111]">${price.toFixed(2)}</p>
        </div>
        <button
          onClick={onAddToCart}
          className="flex items-center gap-2 bg-[#4DA6FF] text-white font-bold px-6 py-3 rounded-full hover:bg-[#3a95f0] transition-colors text-sm whitespace-nowrap"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
