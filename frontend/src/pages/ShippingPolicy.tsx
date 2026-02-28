import { Truck, Package, Clock, ShieldCheck, Phone, CreditCard } from 'lucide-react';

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-100 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Truck size={28} className="text-brand-blue" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-3">Shipping Policy</h1>
          <p className="text-gray-500 text-lg">Pan India delivery — fast, reliable, and affordable.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Highlight Box */}
        <div className="bg-brand-blue rounded-2xl p-6 md:p-8 text-white mb-10">
          <div className="flex items-start gap-4">
            <ShieldCheck size={32} className="shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-extrabold mb-2">Free Shipping on Prepaid Orders</h2>
              <p className="text-white/90 leading-relaxed">
                All prepaid orders across India qualify for free shipping. Pay online and enjoy priority dispatch with no delivery charges.
              </p>
            </div>
          </div>
        </div>

        {/* Shipping Options */}
        <div className="mb-10">
          <h2 className="text-2xl font-extrabold text-brand-black mb-6">Shipping Options</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-5 py-4 font-bold text-brand-black">Shipping Method</th>
                  <th className="text-left px-5 py-4 font-bold text-brand-black">Delivery Time</th>
                  <th className="text-left px-5 py-4 font-bold text-brand-black">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4 font-semibold text-brand-black">Standard (Prepaid)</td>
                  <td className="px-5 py-4 text-gray-600">3–7 Business Days</td>
                  <td className="px-5 py-4 text-green-600 font-bold">FREE</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4 font-semibold text-brand-black">Standard (COD)</td>
                  <td className="px-5 py-4 text-gray-600">3–7 Business Days</td>
                  <td className="px-5 py-4 text-gray-600">₹49</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4 font-semibold text-brand-black">Express (Prepaid)</td>
                  <td className="px-5 py-4 text-gray-600">1–3 Business Days</td>
                  <td className="px-5 py-4 text-gray-600">₹99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <Clock size={20} className="text-brand-blue" />
              <h3 className="font-bold text-brand-black">Delivery Estimate</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Orders are typically delivered within <strong>3–7 business days</strong> across India. Remote areas may take up to 10 business days.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <Package size={20} className="text-brand-blue" />
              <h3 className="font-bold text-brand-black">Order Processing</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Prepaid orders are processed within <strong>24 hours</strong>. COD orders are processed after order confirmation.
            </p>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
            <div className="flex items-center gap-3 mb-3">
              <Phone size={20} className="text-yellow-600" />
              <h3 className="font-bold text-brand-black">COD Confirmation</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Cash on Delivery orders may require a <strong>confirmation call</strong> before shipping to avoid fake or unconfirmed orders.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <CreditCard size={20} className="text-brand-blue" />
              <h3 className="font-bold text-brand-black">Prepaid Benefits</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Pay online to enjoy <strong>free shipping</strong>, priority dispatch, and exclusive discounts on your order.
            </p>
          </div>
        </div>

        {/* Coverage */}
        <div className="mb-10">
          <h2 className="text-2xl font-extrabold text-brand-black mb-4">Delivery Coverage</h2>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div className="flex items-start gap-3">
              <Truck size={20} className="text-brand-blue shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-brand-black mb-2">Pan India Delivery</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We deliver to all states and union territories across India including metro cities, tier-2 cities, and rural areas. Delivery to remote pin codes may take additional time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tracking */}
        <div>
          <h2 className="text-2xl font-extrabold text-brand-black mb-4">Order Tracking</h2>
          <p className="text-gray-600 leading-relaxed">
            Once your order is shipped, you will receive a tracking number via SMS and email. You can use this to track your order on our courier partner's website. For any shipping queries, contact our support team at{' '}
            <a href="mailto:support@synklix.com" className="text-brand-blue hover:underline font-semibold">
              support@synklix.com
            </a>{' '}
            or WhatsApp us at{' '}
            <a href="https://wa.me/919999999999" className="text-brand-blue hover:underline font-semibold">
              +91 99999 99999
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
