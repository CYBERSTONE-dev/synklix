import { Percent, Truck, Zap, IndianRupee } from 'lucide-react';

const benefits = [
  {
    icon: Percent,
    title: '10% Instant Discount',
    desc: 'On all prepaid orders',
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    desc: 'No delivery charges',
  },
  {
    icon: Zap,
    title: 'Priority Dispatch',
    desc: 'Shipped within 24 hours',
  },
  {
    icon: IndianRupee,
    title: '₹50 Cashback',
    desc: 'On your next order',
  },
];

export default function PrepaidBenefitsBox() {
  return (
    <div className="border border-blue-200 bg-blue-50 rounded-xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-brand-blue font-bold text-sm">💳</span>
        <h4 className="font-bold text-brand-black text-sm">Prepaid Benefits</h4>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {benefits.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-start gap-2">
            <div className="w-7 h-7 bg-brand-blue/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
              <Icon size={14} className="text-brand-blue" />
            </div>
            <div>
              <p className="text-xs font-semibold text-brand-black">{title}</p>
              <p className="text-xs text-gray-500">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
