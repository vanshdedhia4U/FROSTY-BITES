import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, Clock, Truck, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/business';

export const ContactLocation: React.FC = () => {
  return (
    <section id="location" className="py-20 sm:py-28 bg-[#F8EFE6] border-t border-[#3D231A]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-widest text-[#79321A] font-semibold">
            Visit &amp; Connect
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-[#3D231A] mt-2">
            Location &amp; Inquiries
          </h2>
          <p className="text-base text-[#7A5C50] mt-2 font-normal">
            Connect directly with Frosty Bites bakery in Ambernath for custom celebration orders, enquiries, and delivery scheduling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Info Card */}
          <div className="lg:col-span-7 bg-[#FAF3EC] rounded-3xl p-7 sm:p-10 border border-[#3D231A]/6 shadow-xs space-y-7">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#79321A]">
                Bakery Shop &amp; Delivery
              </span>
              <h3 className="font-serif text-3xl font-normal text-[#3D231A] mt-1">
                {BUSINESS_INFO.name}
              </h3>
              <p className="text-sm text-[#7A5C50] mt-1 font-normal">
                Celebration Cakes, Fresh Cakes &amp; Delivery in Ambernath
              </p>
            </div>

            <div className="space-y-5 pt-2">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F2D8D5] flex items-center justify-center shrink-0 text-[#3D231A] mt-0.5">
                  <MapPin className="w-4 h-4 text-[#79321A]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#7A5C50]">
                    Location
                  </h4>
                  <p className="text-base font-normal text-[#3D231A] mt-0.5">
                    {BUSINESS_INFO.address.area}
                  </p>
                  <p className="text-xs text-[#7A5C50]">
                    {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F2D8D5] flex items-center justify-center shrink-0 text-[#3D231A] mt-0.5">
                  <Phone className="w-4 h-4 text-[#79321A]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#7A5C50]">
                    Phone Inquiries
                  </h4>
                  <a
                    href={`tel:+${BUSINESS_INFO.phoneRaw}`}
                    className="text-base font-semibold text-[#3D231A] hover:text-[#79321A] transition-colors"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-[#7A5C50]">
                    Direct bakery contact for celebration queries &amp; orders
                  </p>
                </div>
              </div>

              {/* Delivery */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F2D8D5] flex items-center justify-center shrink-0 text-[#3D231A] mt-0.5">
                  <Truck className="w-4 h-4 text-[#79321A]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#7A5C50]">
                    Home Delivery
                  </h4>
                  <p className="text-sm font-medium text-[#3D231A] mt-0.5">
                    Home delivery is available across Ambernath
                  </p>
                  <p className="text-xs text-[#7A5C50]">
                    Carefully handled to protect delicate celebration designs
                  </p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 border-t border-[#3D231A]/8 flex flex-wrap gap-3">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#79321A] hover:bg-[#652712] rounded-full transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Enquiry</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#3D231A] bg-[#F2D8D5] hover:bg-[#E8C5C1] rounded-full transition-all"
              >
                <Navigation className="w-4 h-4 text-[#79321A]" />
                <span>Google Maps Directions</span>
              </a>
            </div>
          </div>

          {/* Operating Schedule & Listing */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF3EC] rounded-3xl p-7 border border-[#3D231A]/6 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#79321A]" />
                <h3 className="font-serif text-xl font-normal text-[#3D231A]">
                  Bakery Schedule
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#7A5C50] leading-relaxed">
                {BUSINESS_INFO.hoursNotice}
              </p>

              <div className="p-4 rounded-2xl bg-[#F8EFE6] space-y-2 text-xs text-[#3D231A]/80">
                <div className="flex justify-between items-center py-1 border-b border-[#3D231A]/6">
                  <span>Custom Cake Consultations:</span>
                  <span className="font-semibold text-[#3D231A]">Daily on WhatsApp</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#3D231A]/6">
                  <span>Advance Notice:</span>
                  <span className="font-semibold text-[#3D231A]">1–2 Days Recommended</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span>Delivery Windows:</span>
                  <span className="font-semibold text-[#3D231A]">Coordinated with order</span>
                </div>
              </div>
            </div>

            {/* Google Maps Card */}
            <div className="bg-[#FAF3EC] rounded-3xl p-7 border border-[#3D231A]/6 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-[#79321A] font-semibold">
                  Google Maps Pin
                </span>
                <ExternalLink className="w-4 h-4 text-[#7A5C50]" />
              </div>
              <h4 className="font-serif text-lg font-normal text-[#3D231A]">
                Panvelkar Prestige Area, Ambernath
              </h4>
              <p className="text-xs text-[#7A5C50] leading-relaxed">
                Centrally located for pickup and fast delivery across Green City Road and Ambernath localities.
              </p>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#79321A] hover:text-[#3D231A] pt-1"
              >
                <span>Open in Google Maps App</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
