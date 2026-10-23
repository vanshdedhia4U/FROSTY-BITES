import React from 'react';
import { Cake, MessageCircle, Heart, MapPin, ChevronRight } from 'lucide-react';
import { CakeImage } from './CakeImage';

interface HeroProps {
  onOpenCustomModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCustomModal }) => {
  return (
    <section id="hero" className="relative pt-6 sm:pt-12 pb-20 lg:pb-28 overflow-hidden bg-[#F8EFE6]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography & CTAs (matching inspiration image) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-7">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-normal text-[#3D231A] tracking-tight leading-[1.08] text-balance">
              Sweet Moments<br />Start Here
            </h1>

            <p className="text-base sm:text-lg text-[#7A5C50] leading-relaxed max-w-md font-normal">
              Handcrafted celebration cakes and cake delivery in Ambernath. Made fresh to order for the moments worth celebrating.
            </p>

            {/* CTAs (Capsule Button + Arrow Text Link matching screenshot) */}
            <div className="flex flex-wrap items-center gap-5 pt-1">
              <a
                href="#cakes"
                className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium text-white bg-[#79321A] hover:bg-[#652712] rounded-full transition-all shadow-xs whitespace-nowrap"
              >
                Explore Cakes
              </a>

              <button
                type="button"
                onClick={onOpenCustomModal}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3D231A] hover:text-[#79321A] transition-colors group cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 text-[#79321A] group-hover:translate-x-0.5 transition-transform" />
                <span>Create Custom Cake</span>
              </button>
            </div>

            {/* Row of 4 quiet icons (matching the inspiration screenshot bottom-left) */}
            <div className="pt-8 flex items-center gap-6 text-[#7A5C50]/80">
              <span className="p-1 hover:text-[#79321A] transition-colors" title="Artisanal Bakes">
                <Cake className="w-5 h-5" />
              </span>
              <span className="p-1 hover:text-[#79321A] transition-colors" title="WhatsApp Inquiries">
                <MessageCircle className="w-5 h-5" />
              </span>
              <span className="p-1 hover:text-[#79321A] transition-colors" title="Handcrafted with Love">
                <Heart className="w-5 h-5" />
              </span>
              <span className="p-1 hover:text-[#79321A] transition-colors" title="Ambernath Delivery">
                <MapPin className="w-5 h-5" />
              </span>
            </div>
          </div>

          {/* Right Column: Hero Cake on Ceramic Plate */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              <div className="rounded-3xl overflow-hidden shadow-sm bg-[#F6EDE3]">
                <CakeImage
                  src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=85"
                  alt="Layered celebration strawberry cake on a rustic ceramic plate"
                  categoryHint="Celebration Gateau"
                  titleHint="Berry Cream Layer Cake"
                  aspectClass="aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/3]"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
