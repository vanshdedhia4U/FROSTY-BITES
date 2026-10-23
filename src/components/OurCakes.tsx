import React, { useState } from 'react';
import { ArrowUpRight, ChevronRight, MessageCircle } from 'lucide-react';
import { SAMPLE_PRODUCTS, CakeProduct, buildWhatsAppLink } from '../data/business';
import { CakeImage } from './CakeImage';

export const OurCakes: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<CakeProduct | null>(null);

  const categories = [
    { id: 'all', label: 'All Cakes' },
    { id: 'classic', label: 'Classics' },
    { id: 'fusion', label: 'Fruit & Fusion' },
    { id: 'custom', label: 'Custom' },
  ];

  const filteredProducts = SAMPLE_PRODUCTS.filter((product) => {
    if (filter === 'all') return true;
    if (filter === 'classic') return product.id.includes('chocolate') || product.id.includes('velvet');
    if (filter === 'fusion') return product.id.includes('pineapple') || product.id.includes('rasmalai');
    if (filter === 'custom') return product.id.includes('custom');
    return true;
  });

  return (
    <section id="cakes" className="py-20 sm:py-28 bg-[#F8EFE6] border-t border-[#3D231A]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header (matching "Holde a cake" from inspiration) */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-[#3D231A] tracking-tight">
            Choose a cake
          </h2>
          <p className="text-sm sm:text-base text-[#7A5C50] mt-2.5">
            Fresh celebration cakes baked to order in Ambernath.
          </p>

          {/* Minimalist filter pills */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all ${
                  filter === cat.id
                    ? 'bg-[#79321A] text-white shadow-xs'
                    : 'bg-[#F2D8D5]/60 text-[#3D231A] hover:bg-[#F2D8D5]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Card Row (matching inspiration middle section) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const waLink = buildWhatsAppLink({
              cakeName: product.name,
              flavor: product.flavorProfile,
            });

            return (
              <div
                key={product.id}
                className="bg-[#FAF3EC] rounded-3xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-md border border-[#3D231A]/6"
              >
                {/* Rounded Image Container */}
                <div
                  className="rounded-2xl overflow-hidden cursor-pointer bg-[#F6EDE3]"
                  onClick={() => setActiveModalProduct(product)}
                >
                  <CakeImage
                    src={product.imageUrl}
                    alt={product.name}
                    categoryHint={product.category}
                    titleHint={product.name}
                    aspectClass="aspect-[4/3]"
                  />
                </div>

                {/* Content Details */}
                <div className="pt-5 px-1 pb-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3
                        className="font-serif text-lg sm:text-xl font-normal text-[#3D231A] hover:text-[#79321A] transition-colors cursor-pointer"
                        onClick={() => setActiveModalProduct(product)}
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#7A5C50] mt-0.5 font-normal">
                        {product.flavorProfile}
                      </p>
                    </div>

                    {/* Circular pink action button with arrow (matching inspiration screenshot) */}
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Enquire about ${product.name} on WhatsApp`}
                      className="w-8 h-8 rounded-full bg-[#F2D8D5] hover:bg-[#E8C5C1] text-[#3D231A] flex items-center justify-center shrink-0 transition-transform hover:scale-105"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Bottom Text Link (matching "Click View Menu >" from screenshot) */}
                  <div className="mt-4 pt-3 border-t border-[#3D231A]/8 flex items-center justify-between">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#3D231A] hover:text-[#79321A] transition-colors"
                    >
                      <span>Order on WhatsApp</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#79321A]" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setActiveModalProduct(product)}
                      className="text-[11px] text-[#7A5C50] hover:text-[#3D231A] underline underline-offset-2"
                    >
                      View Recipe
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#FAF3EC] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#3D231A]/10 animate-in fade-in zoom-in-95 duration-150">
            <div className="relative">
              <CakeImage
                src={activeModalProduct.imageUrl}
                alt={activeModalProduct.name}
                categoryHint={activeModalProduct.category}
                titleHint={activeModalProduct.name}
                aspectClass="aspect-[16/10]"
              />
              <button
                type="button"
                onClick={() => setActiveModalProduct(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-[#3D231A] flex items-center justify-center shadow-md text-sm font-semibold hover:bg-[#F2D8D5] transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="p-6 sm:p-7 space-y-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#79321A] font-semibold">
                  {activeModalProduct.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#3D231A] mt-1">
                  {activeModalProduct.name}
                </h3>
                <p className="text-xs text-[#7A5C50] mt-1">
                  {activeModalProduct.flavorProfile}
                </p>
              </div>

              <p className="text-sm text-[#3D231A]/80 leading-relaxed font-normal">
                {activeModalProduct.fullDescription}
              </p>

              {activeModalProduct.servingSuggestion && (
                <div className="p-3.5 rounded-2xl bg-[#F8EFE6] text-xs text-[#7A5C50]">
                  <strong className="text-[#3D231A]">Serving note: </strong>
                  {activeModalProduct.servingSuggestion}
                </div>
              )}

              <div className="pt-4 border-t border-[#3D231A]/8 flex items-center justify-between gap-3">
                <span className="text-xs text-[#7A5C50]">
                  Home delivery in Ambernath
                </span>
                <a
                  href={buildWhatsAppLink({
                    cakeName: activeModalProduct.name,
                    flavor: activeModalProduct.flavorProfile,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-wide text-white bg-[#79321A] hover:bg-[#652712] rounded-full transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
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
