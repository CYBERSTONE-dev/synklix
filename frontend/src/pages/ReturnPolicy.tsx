export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#F8F8F8] py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-[#111111] mb-2">
            Return Policy
          </h1>
          <p className="text-gray-500 text-sm">Last updated: January 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        {/* Highlight box */}
        <div className="bg-[#4DA6FF]/10 border-2 border-[#4DA6FF]/30 rounded-2xl p-6 mb-10 text-center">
          <p className="text-3xl font-bold text-[#4DA6FF] mb-1">7-Day Easy Replacement</p>
          <p className="text-gray-600">
            Not satisfied? We'll make it right. Contact us within 7 days of delivery.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#111111] mb-3">
              Our Replacement Window
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Synklix, we stand behind every product we sell. If you receive a damaged, defective, or incorrect product, you can request a replacement within <strong>7 days of delivery</strong>. We will arrange a replacement at absolutely no extra cost to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#111111] mb-3">
              Eligible Products
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              The following conditions make a product eligible for replacement:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Product received in damaged or broken condition</li>
              <li>Product is defective or not functioning as described</li>
              <li>Wrong product delivered (different from what was ordered)</li>
              <li>Product is missing parts or accessories listed in the description</li>
              <li>Request made within 7 days of delivery date</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#111111] mb-3">
              Non-Eligible Products
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              The following are NOT eligible for replacement:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Products that have been used, washed, or tampered with</li>
              <li>Products with removed or damaged original packaging</li>
              <li>Requests made after 7 days of delivery</li>
              <li>Products damaged due to misuse, accidents, or improper handling</li>
              <li>Consumable products (e.g., batteries, bulbs) after use</li>
              <li>Products purchased during clearance or final sale events</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#111111] mb-3">
              How to Request a Replacement
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Contact Us",
                  desc: "Reach out via WhatsApp (+91 99999 99999) or email (support@synklix.com) within 7 days of delivery. Mention your Order ID.",
                },
                {
                  step: "2",
                  title: "Share Proof",
                  desc: "Send photos or a short video clearly showing the issue with the product. This helps us process your request faster.",
                },
                {
                  step: "3",
                  title: "Approval",
                  desc: "Our team will review your request within 24–48 hours and notify you of the approval status.",
                },
                {
                  step: "4",
                  title: "Reverse Pickup",
                  desc: "Once approved, we will arrange a free reverse pickup from your address. Keep the product in its original packaging.",
                },
                {
                  step: "5",
                  title: "Replacement Dispatched",
                  desc: "After receiving and inspecting the returned product, we will dispatch the replacement within 2–3 business days.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-8 h-8 bg-[#4DA6FF] text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-[#111111]">{item.title}</p>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#111111] mb-3">
              Resolution Timeline
            </h2>
            <div className="bg-[#F8F8F8] rounded-xl p-5 space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Request Review</span>
                <span className="font-semibold text-[#111111]">24–48 hours</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Reverse Pickup Arranged</span>
                <span className="font-semibold text-[#111111]">1–2 business days</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Product Inspection</span>
                <span className="font-semibold text-[#111111]">1–2 business days</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Replacement Dispatched</span>
                <span className="font-semibold text-[#111111]">2–3 business days</span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between items-center text-sm">
                <span className="font-semibold text-[#111111]">Total Resolution Time</span>
                <span className="font-bold text-[#4DA6FF]">5–7 business days</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#111111] mb-3">
              Refunds
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If a replacement is not possible (e.g., product out of stock), we will process a full refund to your original payment method within 5–7 business days. For COD orders, refunds are issued as store credit or bank transfer (NEFT/IMPS) upon providing bank details.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#111111] mb-3">
              Contact Us
            </h2>
            <div className="bg-[#F8F8F8] rounded-xl p-5">
              <p className="text-gray-700 font-semibold mb-2">Synklix Customer Support</p>
              <p className="text-gray-600 text-sm">📧 Email: support@synklix.com</p>
              <p className="text-gray-600 text-sm mt-1">📱 WhatsApp: +91 99999 99999</p>
              <p className="text-gray-600 text-sm mt-1">🕐 Hours: Monday–Saturday, 10 AM – 7 PM IST</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
