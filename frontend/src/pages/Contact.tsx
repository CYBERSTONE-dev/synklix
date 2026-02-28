import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#F8F8F8] py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-black text-[#111111] mb-2">Contact Us</h1>
          <p className="text-gray-500">We'd love to hear from you. Send us a message and we'll respond within 24 hours.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-black text-[#111111] mb-6">Get in Touch</h2>
            <div className="space-y-5 mb-8">
              {[
                { icon: Mail, label: 'Email', value: 'hello@synklix.com', href: 'mailto:hello@synklix.com' },
                { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                { icon: MapPin, label: 'Address', value: '123 Commerce St, New York, NY 10001', href: null },
                { icon: Clock, label: 'Hours', value: 'Mon–Fri: 9am–6pm EST', href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#4DA6FF]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#4DA6FF]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm text-[#111111] hover:text-[#4DA6FF] transition-colors font-medium">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-[#111111] font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/15551234567"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-full hover:bg-[#20bd5a] transition-colors text-sm"
            >
              <SiWhatsapp size={18} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-[#F8F8F8] rounded-2xl p-10 text-center">
                <div className="w-16 h-16 bg-[#4DA6FF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={28} className="text-[#4DA6FF]" />
                </div>
                <h3 className="text-xl font-black text-[#111111] mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#4DA6FF] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#4DA6FF] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Subject</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#4DA6FF] transition-colors"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#4DA6FF] transition-colors resize-none"
                    placeholder="Tell us more..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#4DA6FF] text-white font-bold py-4 rounded-full hover:bg-[#3a95f0] transition-colors text-sm"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
