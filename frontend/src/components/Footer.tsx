import { useNavigate } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { SiFacebook, SiInstagram, SiYoutube, SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "synklix"
  );

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
    { label: "FAQ", path: "/faq" },
  ];

  const policyLinks = [
    { label: "Return Policy", path: "/return-policy" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms & Conditions", path: "/terms-and-conditions" },
    { label: "Shipping Policy", path: "/shipping-policy" },
    { label: "Refund Policy", path: "/refund-policy" },
  ];

  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/assets/generated/synklix-logo.dim_300x80.png"
                alt="Synklix"
                className="h-8 object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Smart, trending products for daily life. Trusted by 50,000+ customers across India.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-[#4DA6FF] rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-[#4DA6FF] rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-[#4DA6FF] rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="YouTube"
              >
                <SiYoutube className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919999999999"
                className="w-9 h-9 bg-white/10 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate({ to: link.path })}
                    className="text-gray-400 hover:text-[#4DA6FF] text-sm transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-bold text-white text-base mb-4">Policies</h3>
            <ul className="space-y-2">
              {policyLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate({ to: link.path })}
                    className="text-gray-400 hover:text-[#4DA6FF] text-sm transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white text-base mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-[#4DA6FF] shrink-0 mt-0.5" />
                <span>support@synklix.com</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-[#4DA6FF] shrink-0 mt-0.5" />
                <span>+91 99999 99999</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#4DA6FF] shrink-0 mt-0.5" />
                <span>India</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Get exclusive deals:</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-full px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#4DA6FF] min-w-0"
                />
                <button className="bg-[#4DA6FF] hover:bg-[#3a95ee] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200 shrink-0">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Payment icons row */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
              <span className="text-gray-500 text-xs">We accept:</span>
              {["UPI", "Visa", "Mastercard", "RuPay", "COD"].map((method) => (
                <span
                  key={method}
                  className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded"
                >
                  {method}
                </span>
              ))}
            </div>
            <p className="text-gray-500 text-xs text-center sm:text-right">
              © {year} Synklix. All rights reserved.
            </p>
          </div>
          <p className="text-gray-600 text-xs text-center mt-4">
            Built with{" "}
            <Heart className="w-3 h-3 inline text-[#4DA6FF] fill-[#4DA6FF]" />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4DA6FF] hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
