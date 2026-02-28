import { Star, CheckCircle } from "lucide-react";

const testimonials = [
  {
    name: "Priya S.",
    location: "Mumbai",
    product: "Wireless Earbuds Pro",
    quote:
      "Absolutely love the quality! Ordered prepaid and received it in just 4 days. The sound quality is amazing and packaging was perfect. Will definitely order again!",
    rating: 5,
  },
  {
    name: "Rahul K.",
    location: "Delhi",
    product: "Smart LED Strip Lights",
    quote:
      "Great product at an unbeatable price. The LED strips transformed my room completely. Customer support was very helpful when I had a query. Highly recommended!",
    rating: 5,
  },
  {
    name: "Ananya M.",
    location: "Bangalore",
    product: "Multi-Port Fast Charger",
    quote:
      "Super fast delivery — got it in 3 days with prepaid! The charger works perfectly with all my devices. Synklix has become my go-to for electronics. 10/10!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#111111] mb-3">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 text-base lg:text-lg max-w-xl mx-auto">
            Real reviews from verified buyers across India
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= testimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300 fill-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm lg:text-base italic leading-relaxed flex-1">
                "{testimonial.quote}"
              </p>

              {/* Product */}
              <p className="text-xs text-[#4DA6FF] font-semibold">
                Purchased: {testimonial.product}
              </p>

              {/* Customer info */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <div>
                  <p className="font-semibold text-[#111111] text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
                <div className="flex items-center gap-1 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-xs font-semibold">Verified Purchase</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
