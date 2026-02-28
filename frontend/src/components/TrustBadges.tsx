import { ShieldCheck, BadgeCheck, EyeOff, Wallet } from 'lucide-react';

const badges = [
  {
    icon: ShieldCheck,
    title: '100% Secure Checkout',
    desc: 'SSL encrypted & fully safe transactions',
  },
  {
    icon: BadgeCheck,
    title: 'Verified Payments',
    desc: 'All payment methods are verified & trusted',
  },
  {
    icon: EyeOff,
    title: 'No Hidden Charges',
    desc: 'Transparent pricing — what you see is what you pay',
  },
  {
    icon: Wallet,
    title: 'COD + Online Payment',
    desc: 'Cash on Delivery & all major online payments accepted',
  },
];

export default function TrustBadges() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Icon size={26} className="text-[#4DA6FF]" />
              </div>
              <h3 className="font-bold text-brand-black text-sm mb-1">{title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
