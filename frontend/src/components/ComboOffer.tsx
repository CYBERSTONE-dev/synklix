import { Plus, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { products } from '@/data/products';

interface ComboOfferProps {
  currentProductId: string;
}

export default function ComboOffer({ currentProductId }: ComboOfferProps) {
  const { addItem } = useCart();

  const currentProduct = products.find((p) => p.id === currentProductId);
  // Pick 2 products that are not the current one
  const comboProducts = products.filter((p) => p.id !== currentProductId).slice(0, 2);

  if (!currentProduct || comboProducts.length < 2) return null;

  const allProducts = [currentProduct, ...comboProducts];
  const originalTotal = allProducts.reduce((sum, p) => sum + p.price, 0);
  const discountedTotal = Math.round(originalTotal * 0.85);
  const savings = Math.round(originalTotal - discountedTotal);

  const handleAddCombo = () => {
    allProducts.forEach((p) => {
      addItem({
        id: p.id,
        name: p.name,
        price: p.price,
        originalPrice: p.originalPrice,
        image: p.image,
        category: p.category,
      });
    });
  };

  return (
    <div className="border border-orange-200 bg-orange-50 rounded-xl p-5 mt-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          BEST
        </span>
        <h4 className="font-bold text-brand-black">Combo Offer — Buy Together & Save 15%</h4>
      </div>

      <div className="flex items-center gap-3 mb-4 overflow-x-auto pb-2">
        {allProducts.map((product, index) => (
          <div key={product.id} className="flex items-center gap-3 shrink-0">
            <div className="text-center">
              <div className="w-20 h-20 rounded-xl overflow-hidden border border-gray-200 bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-gray-600 mt-1 max-w-[80px] truncate">{product.name}</p>
              <p className="text-xs font-bold text-brand-black">₹{product.price}</p>
            </div>
            {index < allProducts.length - 1 && (
              <div className="w-7 h-7 bg-orange-200 rounded-full flex items-center justify-center shrink-0">
                <Plus size={14} className="text-orange-600" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p className="text-sm text-gray-500 line-through">₹{originalTotal.toFixed(2)}</p>
          <p className="text-xl font-extrabold text-brand-black">
            ₹{discountedTotal}{' '}
            <span className="text-sm font-normal text-green-600">Save ₹{savings}</span>
          </p>
        </div>
        <button
          onClick={handleAddCombo}
          className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-orange-600 transition-all min-h-[44px]"
        >
          <ShoppingCart size={16} />
          Add Combo to Cart
        </button>
      </div>
    </div>
  );
}
