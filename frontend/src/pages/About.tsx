import { Link } from '@tanstack/react-router';
import { Target, Heart, Zap, Users } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'To make premium everyday essentials accessible to everyone, without compromising on quality or style.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    desc: 'Every decision we make starts with our customers. Your satisfaction is our top priority.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    desc: 'We constantly seek out the latest smart products that genuinely improve daily life.',
  },
  {
    icon: Users,
    title: 'Community',
    desc: 'Over 50,000 happy customers trust Synklix for their everyday essentials.',
  },
];

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-[#F8F8F8] py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-[#111111] mb-4">
            About <span className="text-[#4DA6FF]">Synklix</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We're on a mission to bring you the smartest, most useful everyday products — curated with care and delivered with speed.
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-black text-[#111111] mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Synklix was founded with a simple idea: everyday products should be smart, beautiful, and affordable. We got tired of sifting through endless options online, so we did the work for you.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we serve over 50,000 customers worldwide, offering a carefully curated selection of products that genuinely make life better. Every item in our store is tested, reviewed, and approved by our team.
            </p>
          </div>
          <div className="bg-[#F8F8F8] rounded-2xl p-8 text-center">
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '50K+', label: 'Happy Customers' },
                { value: '200+', label: 'Products' },
                { value: '4.8★', label: 'Avg. Rating' },
                { value: '99%', label: 'Satisfaction' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-3xl font-black text-[#4DA6FF]">{value}</p>
                  <p className="text-sm text-gray-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <h2 className="text-3xl font-black text-[#111111] mb-8 text-center">Our Values</h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-[#F8F8F8] rounded-xl p-6 flex gap-4">
              <div className="w-12 h-12 bg-[#4DA6FF]/10 rounded-xl flex items-center justify-center shrink-0">
                <Icon size={24} className="text-[#4DA6FF]" />
              </div>
              <div>
                <h3 className="font-bold text-[#111111] mb-1">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-[#4DA6FF] text-white font-bold px-8 py-4 rounded-full hover:bg-[#3a95f0] transition-colors text-sm"
          >
            Shop Our Collection →
          </Link>
        </div>
      </div>
    </div>
  );
}
