import { Link } from '@tanstack/react-router';
import { ArrowRight, TrendingUp } from 'lucide-react';
import ProductCard from './ProductCard';
import { bestSellers } from '@/data/products';

export default function BestSellers() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm mb-2">
              <TrendingUp size={16} />
              Trending Now
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-2">
              Best Sellers
            </h2>
            <p className="text-gray-500 text-lg">Our most loved products by customers across India.</p>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all"
          >
            Shop All <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} showBestSeller />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all min-h-[44px]"
          >
            Shop All <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
