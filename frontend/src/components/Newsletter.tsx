import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-20 bg-brand-blue">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail size={26} className="text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
          Stay in the Loop
        </h2>
        <p className="text-white/80 text-lg mb-8">
          Subscribe for exclusive deals, new arrivals, and prepaid-only offers.
        </p>

        {submitted ? (
          <div className="bg-white/20 rounded-xl p-6 text-white font-semibold text-lg">
            🎉 You're subscribed! Watch your inbox for exclusive deals.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-4 rounded-full text-brand-black placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white/50 min-h-[44px]"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-blue px-6 py-4 rounded-full font-bold hover:bg-gray-50 transition-all min-h-[44px] shrink-0"
            >
              Subscribe <ArrowRight size={16} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
