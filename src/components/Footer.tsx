import React from 'react';
import { ExternalLink, Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/business';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2E1911] text-[#FAF3EC] pt-16 pb-24 md:pb-16 border-t border-[#2E1911]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#FAF3EC]/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3.5">
            <span className="font-serif text-3xl font-normal tracking-tight text-[#FAF3EC] block">
              Frosty Bites
            </span>
            <p className="text-sm text-[#FAF3EC]/70 max-w-sm leading-relaxed font-normal">
              Fresh celebration cakes, bespoke occasion gateaux, and reliable delivery in Ambernath, Maharashtra.
            </p>
            <div className="pt-1 text-xs text-[#FAF3EC]/40 font-normal">
              Bespoke orders · Fresh to schedule · Direct WhatsApp coordination
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#EBC3A5] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#FAF3EC]/70">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#cakes" className="hover:text-white transition-colors">
                  Our Cakes
                </a>
              </li>
              <li>
                <a href="#custom" className="hover:text-white transition-colors">
                  Custom Cakes
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Location &amp; Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#EBC3A5] font-semibold">
              Location &amp; Orders
            </h4>
            <div className="space-y-2.5 text-sm text-[#FAF3EC]/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EBC3A5] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address.area}, Ambernath, Maharashtra
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EBC3A5] shrink-0" />
                <a
                  href={`tel:+${BUSINESS_INFO.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#EBC3A5] hover:text-white transition-colors"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-[#FAF3EC]/20">·</span>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#EBC3A5] hover:text-white transition-colors"
              >
                <span>WhatsApp Coordination</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF3EC]/40 font-normal">
          <p>© {new Date().getFullYear()} Frosty Bites. Ambernath, Maharashtra.</p>
          <p>Celebration Cakes &amp; Delivery</p>
        </div>
      </div>
    </footer>
  );
};
