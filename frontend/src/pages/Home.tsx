import HeroBanner from "@/components/HeroBanner";
import FeatureStrip from "@/components/FeatureStrip";
import FeaturedProducts from "@/components/FeaturedProducts";
import LimitedTimeOffer from "@/components/LimitedTimeOffer";
import BestSellers from "@/components/BestSellers";
import WhyChooseSynklix from "@/components/WhyChooseSynklix";
import Testimonials from "@/components/Testimonials";
import TrustBadges from "@/components/TrustBadges";
import PrepaidBanner from "@/components/PrepaidBanner";
import PrepaidStrategySection from "@/components/PrepaidStrategySection";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <HeroBanner />

      {/* Trust pillars */}
      <FeatureStrip />

      {/* Featured Products */}
      <section className="py-10 lg:py-20">
        <FeaturedProducts />
      </section>

      {/* Prepaid Strategy Section */}
      <PrepaidStrategySection />

      {/* Prepaid Benefits Banner with Delivery Times */}
      <PrepaidBanner />

      {/* Limited Time Offer */}
      <LimitedTimeOffer />

      {/* Best Sellers */}
      <section className="py-10 lg:py-20 bg-[#F8F8F8]">
        <BestSellers />
      </section>

      {/* Why Choose Synklix */}
      <section className="py-10 lg:py-20">
        <WhyChooseSynklix />
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
}
