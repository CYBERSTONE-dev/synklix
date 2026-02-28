export default function RefundPolicy() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#F8F8F8] py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-black text-[#111111]">Refund Policy</h1>
          <p className="text-gray-500 mt-2">Last updated: February 2026</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#4DA6FF]/10 border border-[#4DA6FF]/20 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-black text-[#111111] mb-2">30-Day Money-Back Guarantee</h2>
          <p className="text-gray-600 text-sm">We stand behind every product we sell. If you're not completely satisfied, we'll make it right.</p>
        </div>

        <h2 className="text-xl font-black text-[#111111] mb-3">Return Eligibility</h2>
        <p className="text-gray-600 mb-4">To be eligible for a return, your item must be:</p>
        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-6">
          <li>Returned within 30 days of delivery</li>
          <li>In the same condition that you received it</li>
          <li>In the original packaging</li>
          <li>Accompanied by the receipt or proof of purchase</li>
        </ul>

        <h2 className="text-xl font-black text-[#111111] mb-3">How to Return</h2>
        <ol className="list-decimal list-inside text-gray-600 text-sm space-y-2 mb-6">
          <li>Contact us at hello@synklix.com with your order number</li>
          <li>We'll send you a prepaid return shipping label</li>
          <li>Pack your item securely and drop it off at any shipping location</li>
          <li>Receive your refund within 3–5 business days of us receiving the item</li>
        </ol>

        <h2 className="text-xl font-black text-[#111111] mb-3">Non-Returnable Items</h2>
        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-6">
          <li>Items marked as final sale</li>
          <li>Personalized or custom-made products</li>
          <li>Downloadable software or digital products</li>
          <li>Items damaged due to misuse</li>
        </ul>

        <h2 className="text-xl font-black text-[#111111] mb-3">Refund Processing</h2>
        <p className="text-gray-600 text-sm">Once we receive your return, we'll inspect it and notify you of the approval or rejection of your refund. If approved, your refund will be processed within 3–5 business days and credited to your original payment method.</p>
      </div>
    </div>
  );
}
