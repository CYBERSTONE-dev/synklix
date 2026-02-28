import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useNavigate } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

const faqCategories = [
  {
    category: "Orders & Shipping",
    items: [
      {
        question: "How long does delivery take?",
        answer:
          "Delivery time depends on your payment method. For Prepaid Orders (online payment), delivery takes 3–5 business days with free shipping. For COD (Cash on Delivery) Orders, delivery takes 5–8 business days. Prepaid orders are processed with priority and dispatched faster.",
      },
      {
        question: "Is Cash on Delivery (COD) available?",
        answer:
          "Yes! COD is available across India. After placing a COD order, our team will call you to confirm the order before dispatch. Please ensure your phone number is correct and reachable. Note: Prepaid orders are processed faster and help us avoid fake or unconfirmed orders, ensuring better service for all customers.",
      },
      {
        question: "Do you offer free shipping?",
        answer:
          "Yes! All Prepaid Orders get FREE shipping across India. For COD orders, a nominal shipping fee may apply depending on your location and order value. Choose prepaid to save on shipping and get 10% OFF your order.",
      },
      {
        question: "Can I track my order?",
        answer:
          "Yes, once your order is dispatched, you will receive a tracking link via SMS and email. You can use this to track your shipment in real-time.",
      },
    ],
  },
  {
    category: "Returns & Refunds",
    items: [
      {
        question: "What is your return and replacement policy?",
        answer:
          "We offer a 7-day easy replacement policy. If you receive a damaged, defective, or incorrect product, contact us within 7 days of delivery. We will arrange a replacement at no extra cost. Please note that used or tampered products are not eligible for replacement.",
      },
      {
        question: "How do I request a replacement?",
        answer:
          "To request a replacement: (1) Contact us via WhatsApp or email within 7 days of delivery. (2) Share your order ID and photos/video of the issue. (3) Our team will review and approve the replacement within 24–48 hours. (4) We will arrange a reverse pickup and send the replacement within 5–7 business days.",
      },
      {
        question: "Are refunds available?",
        answer:
          "Refunds are processed for prepaid orders where replacement is not possible (e.g., product out of stock). Refunds are credited to your original payment method within 5–7 business days after approval. COD orders are eligible for store credit or replacement only.",
      },
    ],
  },
  {
    category: "Payments",
    items: [
      {
        question: "Is it safe to pay online on Synklix?",
        answer:
          "Absolutely! All payments on Synklix are 100% secure. We use industry-standard SSL encryption and work with trusted payment gateways. Your card details and personal information are never stored on our servers. Look for the padlock icon in your browser's address bar for confirmation.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major payment methods including UPI (GPay, PhonePe, Paytm), Credit/Debit Cards (Visa, Mastercard, RuPay), Net Banking, and Cash on Delivery (COD). Prepaid payments get an exclusive 10% discount.",
      },
      {
        question: "Why should I choose prepaid over COD?",
        answer:
          "Prepaid orders offer several advantages: (1) 10% instant discount on your order. (2) Free shipping across India. (3) Priority processing and faster delivery (3–5 days vs 5–8 days for COD). (4) No confirmation call required — your order is dispatched immediately. Prepaid orders also help us reduce fake/unconfirmed orders and serve all customers better.",
      },
    ],
  },
  {
    category: "Products",
    items: [
      {
        question: "Are Synklix products genuine and high quality?",
        answer:
          "Yes! All products sold on Synklix are carefully sourced and quality-checked before dispatch. We stand behind every product we sell, which is why we offer a 7-day replacement guarantee. Our 4.8★ average rating from 50,000+ customers speaks for itself.",
      },
      {
        question: "What if I receive a wrong product?",
        answer:
          "We apologize for any inconvenience. If you receive a wrong product, please contact us immediately with your order ID and a photo of the product received. We will arrange a replacement or refund within 24–48 hours at no cost to you.",
      },
    ],
  },
];

export default function FAQ() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#F8F8F8] py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-[#111111] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-base lg:text-lg">
            Everything you need to know about ordering, delivery, and returns.
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="space-y-10">
          {faqCategories.map((category) => (
            <div key={category.category}>
              <h2 className="text-xl lg:text-2xl font-bold text-[#111111] mb-4 pb-2 border-b-2 border-[#4DA6FF]">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {category.items.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`${category.category}-${index}`}
                    className="border border-gray-200 rounded-xl px-4 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left font-semibold text-[#111111] hover:text-[#4DA6FF] py-4 text-sm lg:text-base">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-sm lg:text-base pb-4 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-[#4DA6FF]/10 border border-[#4DA6FF]/30 rounded-2xl p-8 text-center">
          <MessageCircle className="w-10 h-10 text-[#4DA6FF] mx-auto mb-3" />
          <h3 className="text-xl font-bold text-[#111111] mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-4">
            Our support team is available Monday–Saturday, 10 AM – 7 PM IST.
          </p>
          <button
            onClick={() => navigate({ to: "/contact" })}
            className="bg-[#4DA6FF] hover:bg-[#3a95ee] text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 min-h-[44px]"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
