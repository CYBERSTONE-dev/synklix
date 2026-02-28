import { Lock, Banknote, Truck, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Lock,
    label: "Secure Checkout",
    descriptor: "100% encrypted & safe payments",
  },
  {
    icon: Banknote,
    label: "Cash on Delivery Available",
    descriptor: "Pay when your order arrives",
  },
  {
    icon: Truck,
    label: "Fast Delivery",
    descriptor: "Prepaid: 3–5 days | COD: 5–8 days",
  },
  {
    icon: RefreshCw,
    label: "Easy Replacement",
    descriptor: "7-day hassle-free replacement",
  },
];

export default function FeatureStrip() {
  return (
    <section className="bg-[#F8F8F8] py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.label}
                className="flex flex-col items-center text-center gap-3 p-4"
              >
                <div className="w-12 h-12 bg-[#4DA6FF]/10 rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#4DA6FF]" />
                </div>
                <div>
                  <p className="font-semibold text-[#111111] text-sm lg:text-base">
                    {feature.label}
                  </p>
                  <p className="text-gray-500 text-xs lg:text-sm mt-1">
                    {feature.descriptor}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
