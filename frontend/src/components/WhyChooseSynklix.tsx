import { IndianRupee, Star, ShieldCheck, SmilePlus } from 'lucide-react';

const pillars = [
  {
    icon: IndianRupee,
    title: 'Affordable Pricing',
    desc: 'Best prices guaranteed with no hidden charges.',
  },
  {
    icon: Star,
    title: 'Premium Products',
    desc: 'Curated quality products that exceed expectations.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Checkout',
    desc: 'SSL-encrypted payments for your peace of mind.',
  },
  {
    icon: SmilePlus,
    title: 'Customer Satisfaction',
    desc: '10,000+ happy customers across India.',
  },
];

export default function WhyChooseSynklix() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-3">
            Why Choose <span className="text-brand-blue">Synklix</span>?
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            We're committed to delivering the best shopping experience in India.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon size={28} className="text-brand-blue" />
              </div>
              <h3 className="font-bold text-brand-black text-base mb-1">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
