import { Tag, Zap, Truck, CreditCard } from "lucide-react";

const benefits = [
  {
    icon: Tag,
    emoji: "💰",
    title: "₹100 OFF on Prepaid",
    desc: "Instant ₹100 discount on all prepaid orders",
  },
  {
    icon: CreditCard,
    emoji: "💳",
    title: "Extra 5% on UPI / Cards",
    desc: "Additional 5% instant discount on UPI & card payments",
  },
  {
    icon: Zap,
    emoji: "⚡",
    title: "Priority Shipping",
    desc: "Prepaid orders get dispatched first — faster delivery",
  },
  {
    icon: Truck,
    emoji: "🚚",
    title: "COD Available Across India",
    desc: "Cash on Delivery accepted at your doorstep",
  },
];

export default function PrepaidStrategySection() {
  return (
    <section className="py-14 md:py-20 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#4DA6FF]/10 text-[#4DA6FF] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Tag className="w-4 h-4" />
            Exclusive Savings
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111111]">
            Choose Prepaid &amp; Save More!
          </h2>
          <p className="text-gray-500 mt-2 text-base max-w-xl mx-auto">
            Unlock exclusive discounts and faster delivery when you pay online.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
          {benefits.map(({ icon: Icon, emoji, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center p-5 bg-[#4DA6FF]/5 border border-[#4DA6FF]/20 rounded-2xl hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-14 h-14 bg-[#4DA6FF]/10 rounded-full flex items-center justify-center mb-3">
                <Icon className="w-6 h-6 text-[#4DA6FF]" />
              </div>
              <span className="text-2xl mb-1">{emoji}</span>
              <h3 className="font-bold text-[#111111] text-sm mb-1 leading-snug">{title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Explanatory note */}
        <div className="max-w-2xl mx-auto bg-yellow-50 border border-yellow-200 rounded-xl px-5 py-4 text-center">
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-yellow-800">💡 Note:</span>{" "}
            COD is available, but prepaid customers get{" "}
            <strong>faster dispatch</strong> and{" "}
            <strong>exclusive discounts</strong>. Choose prepaid for the best experience!
          </p>
        </div>
      </div>
    </section>
  );
}
