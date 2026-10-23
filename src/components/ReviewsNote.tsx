import React from 'react';
import { ExternalLink, Camera } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const ReviewsNote: React.FC = () => {
  return (
    <section className="py-16 bg-[#FAF3EC] border-t border-[#3D231A]/8">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#79321A] font-semibold">
          Community &amp; Verified Listing
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#3D231A]">
          Find Frosty Bites on Google Maps
        </h3>
        <p className="text-sm sm:text-base text-[#7A5C50] max-w-xl mx-auto leading-relaxed font-normal">
          See customer photos, verify our location near Panvelkar Prestige on Green City Road, and share your celebration feedback directly on Google Maps.
        </p>

        <div className="pt-3 flex flex-wrap justify-center gap-3">
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#79321A] hover:bg-[#652712] rounded-full transition-all shadow-xs"
          >
            <span>Open Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href="#gallery"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#3D231A] bg-[#F2D8D5] hover:bg-[#E8C5C1] rounded-full transition-all"
          >
            <Camera className="w-3.5 h-3.5 text-[#79321A]" />
            <span>View Gallery</span>
          </a>
        </div>
      </div>
    </section>
  );
};
