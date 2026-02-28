import { ShoppingCart, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useCart } from "@/contexts/CartContext";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  showBestSeller?: boolean;
}

function getStockFromId(id: string): number {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    const char = id.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash % 20) + 1;
}

export default function ProductCard({ product, showBestSeller = false }: ProductCardProps) {
  const { addItem } = useCart();

  const discountPercent =
    product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  const stock = getStockFromId(product.id);
  const isLowStock = stock < 8;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      category: product.category,
    });
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col">
      {/* Image */}
      <Link to="/product/$id" params={{ id: product.id }} className="block relative overflow-hidden">
        <div className="aspect-square bg-gray-50 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1.5">
          {discountPercent && (
            <span className="bg-[#4DA6FF] text-white text-xs font-bold px-2 py-0.5 rounded-full">
              -{discountPercent}%
            </span>
          )}
          {showBestSeller && product.isBestSeller && (
            <span className="bg-[#111111] text-white text-xs font-bold px-2 py-0.5 rounded-full">
              Best Seller
            </span>
          )}
        </div>

        {/* Low stock */}
        {isLowStock && (
          <div className="absolute bottom-2 left-2 right-2">
            <span className="bg-orange-500/90 text-white text-xs font-semibold px-2 py-1 rounded-full block text-center">
              ⚡ Only {stock} left!
            </span>
          </div>
        )}
      </Link>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs text-[#4DA6FF] font-semibold uppercase tracking-wide mb-1">
          {product.category}
        </span>
        <Link to="/product/$id" params={{ id: product.id }}>
          <h3 className="font-semibold text-[#111111] text-sm leading-snug mb-2 hover:text-[#4DA6FF] transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={12}
              className={
                star <= Math.floor(product.rating)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-200 fill-gray-200"
              }
            />
          ))}
          <span className="text-xs text-gray-400 ml-1">({product.reviewCount})</span>
        </div>

        {/* Benefit tagline */}
        {product.benefit && (
          <p className="text-xs text-gray-500 mb-3 line-clamp-1">{product.benefit}</p>
        )}

        {/* Price */}
        <div className="flex items-center gap-2 mb-3 mt-auto">
          <span className="text-lg font-extrabold text-[#111111]">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-gray-400 line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="w-full flex items-center justify-center gap-2 bg-[#4DA6FF] text-white py-3 rounded-full font-semibold text-sm hover:bg-[#3a95ee] transition-all min-h-[44px] active:scale-95"
        >
          <ShoppingCart size={15} />
          Quick Add
        </button>
      </div>
    </div>
  );
}
