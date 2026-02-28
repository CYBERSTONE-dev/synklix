import { useNavigate } from "@tanstack/react-router";
import { ShieldCheck, Truck, RefreshCw, Star } from "lucide-react";

export default function HeroBanner() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('/assets/generated/pattern-bg.dim_1200x400.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#4DA6FF]/10 text-[#4DA6FF] px-4 py-2 rounded-full text-sm font-semibold">
              <Star className="w-4 h-4 fill-[#4DA6FF]" />
              Trusted by 50,000+ Indian Customers
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#111111] leading-tight">
              Smart Shopping{" "}
              <span className="text-[#4DA6FF]">Starts at</span>{" "}
              Synklix
            </h1>

            {/* Subheading */}
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Premium Quality Products | Fast India Shipping | Cash on Delivery Available
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate({ to: "/shop" })}
                className="bg-[#4DA6FF] hover:bg-[#3a95ee] text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 shadow-lg min-h-[44px]"
              >
                Shop Now
              </button>
              <button
                onClick={() => navigate({ to: "/shop" })}
                className="border-2 border-[#4DA6FF] text-[#4DA6FF] hover:bg-[#4DA6FF] hover:text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 min-h-[44px]"
              >
                Explore Deals
              </button>
            </div>

            {/* Trust micro-badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-full border border-gray-100">
                <Truck className="w-4 h-4 text-[#4DA6FF]" />
                <span className="font-medium">🚚 Pan India Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-full border border-gray-100">
                <ShieldCheck className="w-4 h-4 text-[#4DA6FF]" />
                <span className="font-medium">🔒 Secure Payments</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-full border border-gray-100">
                <RefreshCw className="w-4 h-4 text-[#4DA6FF]" />
                <span className="font-medium">💸 Easy Returns</span>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/assets/generated/hero-product-collage.dim_1200x600.png"
                alt="Synklix Products"
                className="w-full max-w-lg rounded-2xl shadow-2xl object-cover"
              />
              {/* Floating badge 1 */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                <div>
                  <p className="text-xs text-gray-500">Prepaid Delivery</p>
                  <p className="text-sm font-bold text-[#111111]">3–5 Days</p>
                </div>
              </div>
              {/* Floating badge 2 */}
              <div className="absolute -bottom-4 -right-4 bg-[#4DA6FF] rounded-xl shadow-lg px-4 py-3 text-white">
                <p className="text-xs opacity-90">Prepaid Discount</p>
                <p className="text-lg font-bold">₹100 OFF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
