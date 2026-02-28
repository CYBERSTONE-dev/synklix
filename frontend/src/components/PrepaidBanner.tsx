import { useNavigate } from "@tanstack/react-router";
import { Tag, AlertCircle } from "lucide-react";
import DeliveryTimeWidget from "./DeliveryTimeWidget";

export default function PrepaidBanner() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#4DA6FF] py-10 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
          <Tag className="w-4 h-4" />
          Exclusive Prepaid Offer
        </div>

        {/* Headline */}
        <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">
          Get 10% OFF + Free Shipping on Prepaid Orders
        </h2>

        {/* Sub-copy */}
        <p className="text-white/90 text-base lg:text-lg mb-4 max-w-2xl mx-auto">
          Prepaid orders are processed faster and dispatched with priority. Help us serve you better — prepaid orders also help avoid fake or unconfirmed COD orders.
        </p>

        {/* COD notice */}
        <div className="flex items-start gap-2 bg-white/15 rounded-xl px-4 py-3 mb-6 max-w-2xl mx-auto text-left">
          <AlertCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
          <p className="text-white/90 text-sm">
            <strong>COD is available</strong> across India, but prepaid orders get priority dispatch, faster delivery, and an exclusive 10% discount. Choose prepaid for the best experience!
          </p>
        </div>

        {/* Delivery Time Widget */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-3 bg-white/20 border-2 border-white/40 rounded-xl px-5 py-4 flex-1">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                <span className="text-[#4DA6FF] font-bold text-lg">🚀</span>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-white">Prepaid Orders</p>
                <p className="text-lg font-bold text-white">3–5 Days Delivery</p>
                <p className="text-xs text-white/80">Free Shipping + 10% OFF</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 border-2 border-white/20 rounded-xl px-5 py-4 flex-1">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-lg">📦</span>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-white/80">COD Orders</p>
                <p className="text-lg font-bold text-white">5–8 Days Delivery</p>
                <p className="text-xs text-white/70">Confirmation call required</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate({ to: "/shop" })}
          className="bg-white text-[#4DA6FF] hover:bg-gray-50 font-bold px-10 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 shadow-lg min-h-[44px]"
        >
          Shop Now & Save 10%
        </button>
      </div>
    </section>
  );
}
