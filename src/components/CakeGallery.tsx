import React, { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, buildWhatsAppLink } from '../data/business';
import { CakeImage } from './CakeImage';

export const CakeGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#F8EFE6] border-t border-[#3D231A]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#79321A] font-semibold">
            The Gallery
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-[#3D231A] tracking-tight mt-1">
            Celebration Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#7A5C50] mt-2">
            A look at recent celebration cakes, tiered designs, and custom birthday bakes in Ambernath.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group cursor-pointer bg-[#FAF3EC] rounded-3xl overflow-hidden border border-[#3D231A]/6 shadow-xs hover:shadow-md transition-all p-3"
            >
              <div className="rounded-2xl overflow-hidden bg-[#F6EDE3]">
                <CakeImage
                  src={item.imageUrl}
                  alt={item.title}
                  categoryHint={item.occasion}
                  titleHint={item.title}
                  aspectClass={item.aspectClass || 'aspect-[4/3]'}
                />
              </div>

              <div className="pt-4 px-2 pb-1">
                <span className="text-[11px] uppercase tracking-wider text-[#79321A] font-semibold block">
                  {item.occasion}
                </span>
                <h3 className="font-serif text-lg font-normal text-[#3D231A] group-hover:text-[#79321A] transition-colors mt-0.5">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-xs animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative bg-[#FAF3EC] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#3D231A]/10">
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white text-[#3D231A] flex items-center justify-center hover:bg-[#F2D8D5] shadow-md text-sm font-semibold transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative bg-[#F6EDE3]">
              <CakeImage
                src={activeItem.imageUrl}
                alt={activeItem.title}
                categoryHint={activeItem.occasion}
                titleHint={activeItem.title}
                aspectClass="aspect-[16/11]"
              />
            </div>

            <div className="p-6 sm:p-8">
              <span className="text-[11px] uppercase tracking-wider text-[#79321A] font-semibold">
                {activeItem.occasion}
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#3D231A] mt-1">
                {activeItem.title}
              </h3>

              <p className="text-sm text-[#7A5C50] mt-2 font-normal leading-relaxed">
                {activeItem.description}
              </p>

              <div className="mt-6 pt-4 border-t border-[#3D231A]/8 flex items-center justify-between gap-4">
                <span className="text-xs text-[#7A5C50]">
                  Custom sizes &amp; flavours available
                </span>
                <a
                  href={buildWhatsAppLink({
                    cakeName: activeItem.title,
                    occasion: activeItem.occasion,
                    designNotes: `Inspired by gallery cake: ${activeItem.title}`,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#79321A] hover:bg-[#652712] rounded-full transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
