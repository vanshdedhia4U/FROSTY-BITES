import React, { useState } from 'react';
import { MessageCircle, Calendar, Send, Check } from 'lucide-react';
import { buildWhatsAppLink } from '../data/business';
import { CakeImage } from './CakeImage';

export const CustomCakes: React.FC = () => {
  const [occasion, setOccasion] = useState('Birthday Celebration');
  const [flavor, setFlavor] = useState('Belgian Chocolate Truffle');
  const [size, setSize] = useState('1 kg (6–8 guests)');
  const [designNotes, setDesignNotes] = useState('');
  const [dateNeeded, setDateNeeded] = useState('');
  const [deliveryType, setDeliveryType] = useState('Home delivery in Ambernath');

  const occasions = [
    { id: 'Birthday Celebration', label: 'Birthday' },
    { id: 'Anniversary Milestone', label: 'Anniversary' },
    { id: 'Engagement Ceremony', label: 'Engagement' },
    { id: 'Baby Shower', label: 'Baby Shower' },
    { id: 'Special Family Gathering', label: 'Special Occasion' },
  ];

  const flavors = [
    'Belgian Chocolate Truffle',
    'Fresh Pineapple & Cream',
    'Classic Red Velvet',
    'Royal Rasmalai Fusion',
    'Hazelnut Praline',
    'Custom Flavour Request',
  ];

  const sizes = [
    { label: '0.5 kg', sub: '3–4 guests' },
    { label: '1 kg', sub: '6–8 guests' },
    { label: '1.5 kg', sub: '10–12 guests' },
    { label: '2 kg+', sub: '15+ guests' },
  ];

  const inspirations = [
    {
      title: 'Romantic Anniversary Tiers',
      sub: 'Textured ivory frosting with soft blush and florals.',
      imageUrl: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Artisanal Botanical Piping',
      sub: 'Handcrafted buttercream rosettes and fruit garnish.',
      imageUrl: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Milestone Birthday Cakes',
      sub: 'Custom themes and celebration inscriptions.',
      imageUrl: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Decadent Chocolate Drips',
      sub: 'Dutch cocoa ganache, curls, and dark truffles.',
      imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const waCustomLink = buildWhatsAppLink({
    cakeName: 'Custom Celebration Cake',
    occasion,
    flavor,
    size,
    date: dateNeeded || 'Please advise available slot',
    deliveryType,
    designNotes: designNotes || 'Reference photo ready to share on chat',
  });

  return (
    <section id="custom" className="py-20 sm:py-28 bg-[#F8EFE6] border-t border-[#3D231A]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-widest text-[#79321A] font-semibold">
            Bespoke Atelier
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-[#3D231A] mt-2">
            A Cake That Feels Like Yours
          </h2>
          <p className="text-sm sm:text-base text-[#7A5C50] mt-2.5">
            Share your occasion and flavour preferences to begin a direct custom consultation on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Inspiration Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif text-2xl font-normal text-[#3D231A]">
              Celebration Inspiration
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {inspirations.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#FAF3EC] rounded-2xl overflow-hidden border border-[#3D231A]/6 shadow-xs p-3 flex flex-col"
                >
                  <div className="rounded-xl overflow-hidden">
                    <CakeImage
                      src={item.imageUrl}
                      alt={item.title}
                      categoryHint="Inspiration"
                      titleHint={item.title}
                      aspectClass="aspect-[4/3]"
                    />
                  </div>
                  <div className="pt-3 px-1">
                    <h4 className="font-serif text-base font-normal text-[#3D231A]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#7A5C50] mt-0.5 font-normal">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF3EC] border border-[#3D231A]/6 text-xs text-[#7A5C50] leading-relaxed">
              <strong className="text-[#3D231A]">Advance Notice: </strong>
              Please order custom celebration cakes 1–2 days ahead to ensure proper handcrafted preparation and delivery coordination in Ambernath.
            </div>
          </div>

          {/* Interactive Consultation Form styled with warm cards and pill selectors */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF3EC] rounded-3xl p-6 sm:p-10 border border-[#3D231A]/6 shadow-xs space-y-6">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#3D231A]">
                  Custom Cake Enquiry
                </h3>
                <p className="text-xs text-[#7A5C50] mt-1">
                  Fill in your details below to generate a prefilled WhatsApp request.
                </p>
              </div>

              {/* 1. Occasion */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D231A]/70 mb-2">
                  1. Occasion
                </label>
                <div className="flex flex-wrap gap-2">
                  {occasions.map((occ) => {
                    const isSelected = occasion === occ.id;
                    return (
                      <button
                        key={occ.id}
                        type="button"
                        onClick={() => setOccasion(occ.id)}
                        className={`px-4 py-2 text-xs rounded-full transition-all ${
                          isSelected
                            ? 'bg-[#79321A] text-white shadow-xs'
                            : 'bg-[#F2D8D5]/60 text-[#3D231A] hover:bg-[#F2D8D5]'
                        }`}
                      >
                        {occ.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Flavour */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D231A]/70 mb-2">
                  2. Preferred Flavour
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {flavors.map((flv) => {
                    const isSelected = flavor === flv;
                    return (
                      <button
                        key={flv}
                        type="button"
                        onClick={() => setFlavor(flv)}
                        className={`text-left px-4 py-2.5 text-xs rounded-xl transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#79321A] text-white'
                            : 'bg-[#F8EFE6] text-[#3D231A] hover:bg-[#F2D8D5]/60'
                        }`}
                      >
                        <span>{flv}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#F2D8D5]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Size */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D231A]/70 mb-2">
                  3. Size &amp; Servings
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {sizes.map((s) => {
                    const val = `${s.label} (${s.sub})`;
                    const isSelected = size === val;
                    return (
                      <button
                        key={s.label}
                        type="button"
                        onClick={() => setSize(val)}
                        className={`p-3 text-center rounded-xl transition-all ${
                          isSelected
                            ? 'bg-[#79321A] text-white shadow-xs'
                            : 'bg-[#F8EFE6] text-[#3D231A] hover:bg-[#F2D8D5]/60'
                        }`}
                      >
                        <span className="font-semibold text-sm block">{s.label}</span>
                        <span className={`text-[10px] ${isSelected ? 'text-[#F2D8D5]' : 'text-[#7A5C50]'}`}>
                          {s.sub}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. Date & Handover */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="custom-date-field" className="block text-xs font-semibold uppercase tracking-wider text-[#3D231A]/70 mb-1.5">
                    4. Event Date
                  </label>
                  <div className="relative">
                    <input
                      id="custom-date-field"
                      type="date"
                      value={dateNeeded}
                      onChange={(e) => setDateNeeded(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs bg-[#F8EFE6] rounded-xl text-[#3D231A] focus:outline-none focus:ring-1 focus:ring-[#79321A]"
                    />
                    <Calendar className="w-4 h-4 text-[#7A5C50] absolute right-3 top-2.5 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D231A]/70 mb-1.5">
                    5. Handover
                  </label>
                  <div className="flex gap-2">
                    {['Home delivery in Ambernath', 'Self pickup at bakery'].map((del) => {
                      const isSelected = deliveryType === del;
                      return (
                        <button
                          key={del}
                          type="button"
                          onClick={() => setDeliveryType(del)}
                          className={`flex-1 py-2 text-[11px] rounded-xl font-medium transition-all ${
                            isSelected
                              ? 'bg-[#79321A] text-white'
                              : 'bg-[#F8EFE6] text-[#3D231A] hover:bg-[#F2D8D5]/60'
                          }`}
                        >
                          {del.includes('delivery') ? 'Delivery' : 'Pickup'}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* 6. Inscription or Design note */}
              <div>
                <label htmlFor="custom-notes-field" className="block text-xs font-semibold uppercase tracking-wider text-[#3D231A]/70 mb-1.5">
                  6. Design Reference or Inscription
                </label>
                <input
                  id="custom-notes-field"
                  type="text"
                  value={designNotes}
                  onChange={(e) => setDesignNotes(e.target.value)}
                  placeholder="e.g., Happy Birthday Aanya, pastel floral theme"
                  className="w-full px-3.5 py-2 text-xs bg-[#F8EFE6] rounded-xl text-[#3D231A] placeholder:text-[#7A5C50]/50 focus:outline-none focus:ring-1 focus:ring-[#79321A]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <a
                  href={waCustomLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#79321A] hover:bg-[#652712] rounded-full transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Request on WhatsApp</span>
                  <Send className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
