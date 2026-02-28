import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "@tanstack/react-router";
import {
  Star,
  ShieldCheck,
  Truck,
  RefreshCw,
  ChevronLeft,
  Plus,
  Minus,
  CheckCircle,
  AlertCircle,
  Package,
  Clock,
} from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import MobileCartBar from "@/components/MobileCartBar";
import DeliveryTimeWidget from "@/components/DeliveryTimeWidget";
import PrepaidBenefitsBox from "@/components/PrepaidBenefitsBox";
import RecentlyPurchasedToast from "@/components/RecentlyPurchasedToast";
import ProductCard from "@/components/ProductCard";

function useOfferCountdown() {
  const getSecondsLeft = () => {
    const now = new Date();
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    return Math.max(0, Math.floor((end.getTime() - now.getTime()) / 1000));
  };

  const [secondsLeft, setSecondsLeft] = useState(getSecondsLeft());

  useEffect(() => {
    const interval = setInterval(() => setSecondsLeft(getSecondsLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const h = Math.floor(secondsLeft / 3600);
  const m = Math.floor((secondsLeft % 3600) / 60);
  const s = secondsLeft % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

export default function ProductDetail() {
  const { id } = useParams({ from: "/product/$id" });
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [showMobileBar, setShowMobileBar] = useState(false);
  const addToCartRef = useRef<HTMLButtonElement>(null);
  const offerCountdown = useOfferCountdown();

  const product = products.find((p) => p.id === id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowMobileBar(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (addToCartRef.current) observer.observe(addToCartRef.current);
    return () => observer.disconnect();
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#111111] mb-4">Product Not Found</h2>
          <Link to="/shop" className="bg-[#4DA6FF] text-white px-6 py-3 rounded-full font-semibold">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const discountPercent =
    product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  // Deterministic stock count from product id
  const stockCount = (product.id.charCodeAt(product.id.length - 1) % 8) + 3;
  const isLowStock = stockCount <= 5;

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        category: product.category,
      });
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#4DA6FF] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-[#4DA6FF] transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-[#111111] font-medium truncate max-w-[200px]">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-gray-500 hover:text-[#4DA6FF] transition-colors mb-6 text-sm"
        >
          <ChevronLeft size={16} />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {discountPercent && (
              <div className="absolute top-4 left-4 bg-[#4DA6FF] text-white text-sm font-bold px-3 py-1.5 rounded-full">
                -{discountPercent}% OFF
              </div>
            )}
            {product.isBestSeller && (
              <div className="absolute top-4 right-4 bg-[#111111] text-white text-sm font-bold px-3 py-1.5 rounded-full">
                Best Seller
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-5">
            {/* Category & tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-[#4DA6FF] uppercase tracking-wide bg-blue-50 px-3 py-1 rounded-full">
                {product.category}
              </span>
              <span className="text-xs font-semibold text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full">
                💳 Prepaid Discount Available
              </span>
            </div>

            {/* Name */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#111111] leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    className={
                      star <= Math.floor(product.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-200 fill-gray-200"
                    }
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-[#111111]">{product.rating}</span>
              <span className="text-sm text-gray-400">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-extrabold text-[#111111]">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-xl text-gray-400 line-through">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                  <span className="text-sm font-bold text-green-600">
                    Save ₹{(product.originalPrice - product.price).toLocaleString("en-IN")}
                  </span>
                </>
              )}
            </div>

            {/* Trust/Info lines below price */}
            <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 space-y-1.5">
              {[
                "Cash on Delivery Available",
                "Get ₹100 OFF on Prepaid Orders",
                "Ships Within 24–48 Hours",
                "7-Day Easy Replacement",
              ].map((line) => (
                <div key={line} className="flex items-center gap-2 text-sm text-green-800">
                  <CheckCircle size={14} className="text-green-600 shrink-0" />
                  <span className="font-medium">{line}</span>
                </div>
              ))}
            </div>

            {/* Urgency indicators */}
            <div className="flex flex-col sm:flex-row gap-2">
              {/* Low stock */}
              <div className={`flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-lg flex-1 ${
                isLowStock
                  ? "bg-red-50 border border-red-200 text-red-700"
                  : "bg-orange-50 border border-orange-200 text-orange-700"
              }`}>
                <Package size={14} className="shrink-0" />
                {isLowStock
                  ? `🔴 Only ${stockCount} Items Left In Stock!`
                  : `⚠️ Only ${stockCount} Items Left In Stock`}
              </div>
              {/* Offer countdown */}
              <div className="flex items-center gap-2 text-sm font-semibold bg-yellow-50 border border-yellow-200 text-yellow-800 px-3 py-2 rounded-lg flex-1">
                <Clock size={14} className="shrink-0" />
                <span>🔥 Offer Ends Tonight! <span className="font-mono">{offerCountdown}</span></span>
              </div>
            </div>

            {/* Delivery Time Widget */}
            <DeliveryTimeWidget compact />

            {/* Benefits */}
            <div>
              <h3 className="font-bold text-[#111111] text-sm mb-2">Product Benefits:</h3>
              <ul className="space-y-1.5">
                {[product.benefit, ...product.features].map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle size={14} className="text-[#4DA6FF] mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-[#111111]">Quantity:</span>
              <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center font-semibold text-[#111111]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                ref={addToCartRef}
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-full font-bold text-base transition-all shadow-md min-h-[44px] ${
                  addedToCart
                    ? "bg-green-500 text-white"
                    : "bg-[#4DA6FF] hover:bg-[#3a95ee] text-white hover:shadow-lg"
                }`}
              >
                {addedToCart ? "✓ Added to Cart!" : "Add to Cart"}
              </button>
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-full font-bold text-base bg-[#111111] hover:bg-gray-800 text-white transition-all shadow-md min-h-[44px]"
              >
                Buy Now &amp; Save ₹100 (Prepaid)
              </button>
            </div>

            {/* COD notice */}
            <div className="flex items-center gap-2 text-sm text-green-700 font-semibold">
              <CheckCircle size={15} className="text-green-600" />
              COD Available — Cash on Delivery accepted across India
            </div>

            {/* Checkout message */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex gap-3">
              <AlertCircle size={18} className="text-yellow-600 shrink-0 mt-0.5" />
              <div className="text-sm text-gray-700 space-y-1">
                <p className="font-semibold text-yellow-800">Cash on Delivery Available</p>
                <p>But <strong>Prepaid Orders</strong> get Faster Dispatch, ₹100 Discount &amp; Free Shipping.</p>
                <p className="text-gray-500">COD Orders may require a Confirmation Call before Shipping.</p>
              </div>
            </div>

            {/* Prepaid Benefits Box */}
            <PrepaidBenefitsBox />

            {/* Trust icons */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { icon: Truck, label: "Free Shipping", sub: "On prepaid orders" },
                { icon: ShieldCheck, label: "Secure Payment", sub: "SSL encrypted" },
                { icon: RefreshCw, label: "Easy Replacement", sub: "7-day policy" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col items-center text-center p-3 bg-gray-50 rounded-xl">
                  <Icon size={18} className="text-[#4DA6FF] mb-1" />
                  <p className="text-xs font-semibold text-[#111111]">{label}</p>
                  <p className="text-xs text-gray-400">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-extrabold text-[#111111] mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Sticky Bar */}
      <MobileCartBar
        productName={product.name}
        price={product.price}
        onAddToCart={handleAddToCart}
        visible={showMobileBar}
      />

      {/* Floating COD Available tag — mobile only, above MobileCartBar */}
      {showMobileBar && (
        <div className="fixed bottom-20 right-4 z-40 lg:hidden">
          <div className="bg-green-500 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg flex items-center gap-1.5">
            <span>💰</span>
            <span>COD Available</span>
          </div>
        </div>
      )}

      <RecentlyPurchasedToast />
    </div>
  );
}
