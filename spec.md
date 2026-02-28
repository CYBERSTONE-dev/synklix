# Specification

## Summary
**Goal:** Perform a comprehensive premium brand redesign and feature expansion of the Synklix Store frontend to create a high-converting, professional Indian e-commerce experience.

**Planned changes:**
- Update HeroBanner headline to "Smart Finds for Smarter Living" and subheadline to "Premium Trending Products at Affordable Prices"
- Update AnnouncementBar text to "🎁 Get ₹100 OFF on Prepaid Orders – Use Code: PAY100"
- Update FeatureStrip to show four pillars: Pan India Delivery, Secure Checkout, Cash on Delivery Available, and 7-Day Replacement Guarantee with #4DA6FF icons and descriptors
- Add "New Arrivals" product section on homepage after Featured Products (4 products, 4-col desktop / 2-col mobile grid, View All link)
- Add "Trending Now" product section on homepage after New Arrivals (4 different products, same grid layout, View All link)
- Add bundle offer section on Product Detail page (Buy 2 Get 10% OFF / Buy 3 Get 20% OFF) with price calculations and cart CTAs
- Add prepaid conversion popup on Product Detail page (triggers after 10s or on cart add, once per session via sessionStorage)
- Add checkout nudge messages block (3 nudge lines) on Product Detail page and in CartDrawer
- Apply comprehensive premium redesign: py-20/py-12 section padding, bold section headings with #4DA6FF underline accent, rounded-xl product cards with subtle border and hover shadow, rounded-full CTA buttons, generous horizontal padding, remove gradients and off-brand colors, left-aligned section headers with gray subtitles
- Update Home.tsx section order: AnnouncementBar → HeroBanner → FeatureStrip → PrepaidStrategySection → FeaturedProducts → NewArrivals → WhyChooseSynklix → TrendingNow → LimitedTimeOffer → BestSellers → Testimonials → TrustBadges → PrepaidBanner → Newsletter
- Add Secure Payment Icons row (UPI, Visa, Mastercard, PayPal, Net Banking) and India-Wide Delivery Badge in a #F8F8F8 band above the Newsletter section
- Update Product Detail page prepaid benefit box headline to "Pay Online & Get ₹100 OFF + Free Shipping 🎁" with four benefit lines and soft blue styling
- Add COD confirmation warning note on Product Detail page below delivery time widget with pale yellow (#FFFBEB) styling
- Update Footer Policies column with all six policy links and add Contact Us to Quick Links column
- Apply mobile-first optimizations: 44px tap targets, minimum px-4 padding, correct z-index stacking for fixed elements, legible text sizes, functional hamburger menu

**User-visible outcome:** Visitors see a polished, premium Synklix storefront with updated messaging, well-organized homepage sections, bundle offers on product pages, prepaid conversion prompts, and a fully optimized mobile experience.
