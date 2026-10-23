import React from 'react';
import { CakeImage } from './CakeImage';

export const WhyFrostyBites: React.FC = () => {
  return (
    <section id="story" className="py-20 sm:py-28 bg-[#FAF3EC] border-t border-[#3D231A]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Craft Photography */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="rounded-3xl overflow-hidden bg-[#F6EDE3] shadow-xs max-w-md w-full">
              <CakeImage
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80"
                alt="Pastry chef finishing a celebration cake"
                categoryHint="The Bakery"
                titleHint="Baking Craft"
                aspectClass="aspect-[4/5]"
              />
            </div>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#79321A] font-semibold">
              Our Story
            </span>

            <h2 className="text-4xl sm:text-5xl font-serif font-normal text-[#3D231A] tracking-tight leading-[1.12]">
              Baking for Meaningful Celebrations
            </h2>

            <div className="space-y-4 text-base text-[#7A5C50] leading-relaxed font-normal">
              <p>
                A celebration cake stands at the centre of first birthdays, landmark anniversaries, midnight surprises, and warm family reunions.
              </p>
              <p>
                At Frosty Bites in Ambernath, we bake each cake fresh to order. That means tender, moist sponges, velvety chocolate ganache, and light dairy creams balanced with restrained sweetness.
              </p>
              <p>
                From classic favourites like fresh pineapple and Dutch cocoa truffle to festive Indian fusions like royal rasmalai, our focus is thoughtful presentation and reliable neighbourhood delivery.
              </p>
            </div>

            <div className="pt-4 text-xs font-serif italic text-[#3D231A]/70">
              — The Frosty Bites Team · Green City Road, Ambernath
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
