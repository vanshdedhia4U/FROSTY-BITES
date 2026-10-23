import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CakeImage } from './CakeImage';

interface SpotlightSectionProps {
  onOpenCustomModal: () => void;
}

export const SpotlightSection: React.FC<SpotlightSectionProps> = ({ onOpenCustomModal }) => {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#F8EFE6] to-[#F2E5D8] border-t border-[#3D231A]/8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Fresh Cupcake / Strawberry Dessert on Saucer (matching bottom of inspiration) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="rounded-3xl overflow-hidden bg-[#FAF3EC] shadow-sm">
                <CakeImage
                  src="https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=900&q=80"
                  alt="Artisanal dessert gateau with whipped cream and fresh organic strawberry"
                  categoryHint="Handcrafted Dessert"
                  titleHint="Strawberry Cream Pastry"
                  aspectClass="aspect-[4/3] sm:aspect-[1/1]"
                />
              </div>
            </div>
          </div>

          {/* Right: Editorial Spotlight Copy & Circular Terracotta Arrow Button */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#79321A] font-semibold">
              Bespoke Celebrations
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#3D231A] tracking-tight leading-[1.1]">
              Custom Designed Cakes
            </h2>

            <p className="text-base sm:text-lg text-[#7A5C50] leading-relaxed max-w-xl font-normal">
              Have a celebration in mind? Tell us the occasion, the flavour you love, and the design you are imagining. Each tier is baked fresh from scratch in Ambernath.
            </p>

            {/* Circular Terracotta Arrow Button (matching inspiration screenshot) */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenCustomModal}
                className="w-12 h-12 rounded-full bg-[#79321A] hover:bg-[#652712] text-white flex items-center justify-center transition-transform hover:scale-105 shadow-sm cursor-pointer"
                aria-label="Create Custom Cake"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
