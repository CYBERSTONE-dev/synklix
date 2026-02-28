import { X, ShoppingBag, Plus, Minus, Trash2, Lock, Info } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Link } from '@tanstack/react-router';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 shadow-drawer flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-[#111111]">
            Your Cart ({totalItems} {totalItems === 1 ? 'item' : 'items'})
          </h2>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
              <ShoppingBag size={36} className="text-gray-400" />
            </div>
            <div>
              <p className="text-lg font-semibold text-[#111111]">Your cart is empty</p>
              <p className="text-sm text-gray-500 mt-1">Add some products to get started</p>
            </div>
            <button
              onClick={closeCart}
              className="mt-2 bg-[#4DA6FF] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#3a95f0] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex gap-3 pb-4 border-b border-gray-100 last:border-0">
                  <Link
                    to="/product/$id"
                    params={{ id: item.id }}
                    onClick={closeCart}
                    className="shrink-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[72px] h-[72px] object-cover rounded-xl border border-gray-100"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to="/product/$id"
                      params={{ id: item.id }}
                      onClick={closeCart}
                    >
                      <p className="text-sm font-semibold text-[#111111] line-clamp-2 hover:text-[#4DA6FF] transition-colors">
                        {item.name}
                      </p>
                    </Link>
                    <p className="text-sm font-bold text-[#4DA6FF] mt-0.5">₹{item.price.toLocaleString('en-IN')}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2.5 py-1 hover:bg-gray-50 transition-colors text-gray-600"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2.5 py-1 hover:bg-gray-50 transition-colors text-gray-600"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1.5 hover:bg-red-50 hover:text-red-500 rounded-full transition-colors text-gray-400"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-5 py-4 border-t border-gray-100 space-y-3">
              {/* Subtotal */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Subtotal</span>
                <span className="text-lg font-bold text-[#111111]">₹{totalPrice.toLocaleString('en-IN')}</span>
              </div>

              {/* RTO Reduction Message */}
              <div className="flex items-start gap-2 bg-[#4DA6FF]/8 border border-[#4DA6FF]/25 rounded-xl px-3 py-3">
                <Info size={15} className="text-[#4DA6FF] shrink-0 mt-0.5" />
                <div className="text-xs text-gray-700 space-y-0.5">
                  <p className="font-semibold text-[#111111]">⚡ Prepaid Orders Are Processed First</p>
                  <p className="text-gray-500">COD Orders May Take Additional 1–2 Days To Confirm.</p>
                  <p className="text-[#4DA6FF] font-semibold">Choose Prepaid &amp; Save ₹100!</p>
                </div>
              </div>

              {/* Trust line */}
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <Lock size={12} className="text-[#4DA6FF]" />
                <span>🔒 Secure Checkout — SSL Encrypted</span>
              </div>

              {/* Payment icons */}
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <div className="bg-gray-100 rounded px-2 py-1 text-xs font-bold text-gray-600">VISA</div>
                <div className="bg-gray-100 rounded px-2 py-1 text-xs font-bold text-gray-600">MC</div>
                <div className="bg-gray-100 rounded px-2 py-1 text-xs font-bold text-gray-600">UPI</div>
                <div className="bg-gray-100 rounded px-2 py-1 text-xs font-bold text-gray-600">COD</div>
                <div className="bg-gray-100 rounded px-2 py-1 text-xs font-bold text-gray-600">NetBanking</div>
              </div>

              {/* CTA */}
              <button className="w-full bg-[#4DA6FF] text-white font-bold py-4 rounded-full hover:bg-[#3a95f0] transition-colors text-sm">
                Proceed to Checkout →
              </button>

              <button
                onClick={closeCart}
                className="w-full text-center text-sm text-gray-500 hover:text-[#4DA6FF] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
