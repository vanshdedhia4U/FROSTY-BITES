/**
 * Centralised business configuration for Frosty Bites.
 * Only verified information from the business profile is hardcoded.
 * Unverified details (exact prices, strict opening hours) are structured to be easily updated by the owner.
 */

export interface CakeProduct {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  flavorProfile: string;
  // If price is null or undefined, the price field is hidden or shown as enquiry-based
  price?: number | null;
  servingSuggestion?: string;
  imageUrl: string;
  aspectRatio?: 'square' | 'wide' | 'tall';
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  occasion: string;
  description: string;
  imageUrl: string;
  aspectClass?: string;
}

export const BUSINESS_INFO = {
  name: 'Frosty Bites',
  tagline: 'Celebration Cakes & Delivery in Ambernath',
  phoneDisplay: '+91 78880 49439',
  phoneRaw: '917888049439',
  whatsappNumber: '917888049439',
  address: {
    area: 'Green City Road area, near Panvelkar Prestige',
    city: 'Ambernath',
    state: 'Maharashtra',
    country: 'India',
    fullFormatted: 'Green City Road area, near Panvelkar Prestige, Ambernath, Maharashtra, India',
  },
  googleMapsUrl: 'https://maps.app.goo.gl/TSB9sAifCB4kkLc18',
  deliveryAvailable: true,
  deliveryNote: 'Home delivery available across Ambernath and nearby localities upon confirmation.',
  hoursNotice: 'Orders are freshly baked to schedule. Please connect with us directly on WhatsApp for same-day availability and pickup timings.',
};

/**
 * Builds a properly URL-encoded WhatsApp link with prefilled enquiry template
 */
export function buildWhatsAppLink(options?: {
  cakeName?: string;
  occasion?: string;
  flavor?: string;
  size?: string;
  date?: string;
  deliveryType?: string;
  designNotes?: string;
}): string {
  const cake = options?.cakeName ? options.cakeName : '';
  const occasion = options?.occasion ? options.occasion : '';
  const flavor = options?.flavor ? options.flavor : '';
  const size = options?.size ? options.size : '';
  const date = options?.date ? options.date : '';
  const deliveryType = options?.deliveryType ? options.deliveryType : '';
  const design = options?.designNotes ? options.designNotes : '';

  const message = [
    'Hi Frosty Bites! I would like to enquire about a cake.',
    '',
    `Cake: ${cake}`,
    `Occasion: ${occasion}`,
    `Preferred flavour: ${flavor}`,
    `Size / servings: ${size}`,
    `Date required: ${date}`,
    `Delivery or pickup: ${deliveryType}`,
    `Design reference: ${design}`,
    '',
    'Please share the availability and price.',
  ].join('\n');

  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Realistic cake collection data for Frosty Bites
 */
export const SAMPLE_PRODUCTS: CakeProduct[] = [
  {
    id: 'chocolate-cake',
    name: 'Rich Chocolate Truffle Cake',
    category: 'Classics',
    shortDescription: 'Layers of moist dark cocoa sponge enveloped in silky melted chocolate ganache and chocolate curls.',
    fullDescription: 'Our signature dark chocolate celebration cake, made with premium Dutch cocoa, smooth dark ganache, and hand-shaved chocolate curls. A beloved timeless choice for birthdays, midnight surprises, and anniversary dinners.',
    flavorProfile: 'Belgian Cocoa Ganache · Moist Chocolate Sponge',
    price: null,
    servingSuggestion: 'Available in 0.5 kg (3–4 servings), 1 kg (6–8 servings), and larger celebration tiers.',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'square',
    featured: true,
  },
  {
    id: 'pineapple-cake',
    name: 'Fresh Pineapple Cream Cake',
    category: 'Fresh & Fruity',
    shortDescription: 'Airy vanilla sponge layered with slow-simmered pineapple compote and chilled whipped cream.',
    fullDescription: 'Light, refreshing, and never overly sweet. Soft vanilla sponge soaked with natural pineapple reduction, filled with juicy pineapple chunks and frosted in light dairy cream.',
    flavorProfile: 'Tropical Pineapple · Light Whipped Cream',
    price: null,
    servingSuggestion: 'Bestseller for daytime celebrations and family gatherings.',
    imageUrl: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'wide',
    featured: true,
  },
  {
    id: 'red-velvet-cake',
    name: 'Classic Red Velvet Cake',
    category: 'Celebration Signature',
    shortDescription: 'Tender crimson sponge with a delicate touch of cocoa and smooth cream cheese frosting.',
    fullDescription: 'A classic celebratory centrepiece. Velvety, fine-crumbed crimson cake paired with authentic tangy-sweet cream cheese frosting rosettes and delicate velvet cake crumbs.',
    flavorProfile: 'Velvet Crumb · Silky Cream Cheese Frosting',
    price: null,
    servingSuggestion: 'Ideal for anniversaries, Valentine celebrations, and milestone birthdays.',
    imageUrl: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'square',
    featured: true,
  },
  {
    id: 'rasmalai-cake',
    name: 'Royal Rasmalai Fusion Cake',
    category: 'Festive Fusion',
    shortDescription: 'Saffron-infused sponge infused with cardamom milk, crowned with pistachio slivers and dried rose petals.',
    fullDescription: 'A celebratory Indian dessert fusion favourite. Soft sponge soaked in fragrant saffron-cardamom ras, layered with juicy rasmalai bites, crushed Iranian pistachios, almonds, and edible floral accents.',
    flavorProfile: 'Kesar Saffron · Elaichi · Pistachio & Rose',
    price: null,
    servingSuggestion: 'Perfect for family festivals, engagements & Diwali celebrations',
    imageUrl: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'wide',
    featured: true,
  },
  {
    id: 'hazelnut-chocolate-cake',
    name: 'Hazelnut Praline Chocolate Cake',
    category: 'Classics',
    shortDescription: 'Roasted hazelnut praline folded into deep chocolate ganache with a delicate textured crunch.',
    fullDescription: 'For true chocolate and praline lovers. Moist cocoa cake layered with roasted crushed hazelnuts, creamy gianduja frosting, and crisp wafer feuilletine flakes.',
    flavorProfile: 'Roasted Hazelnut · Nutty Ganache · Praline Crunch',
    price: null,
    servingSuggestion: 'Popular for milestone birthdays and intimate gatherings',
    imageUrl: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'square',
    featured: false,
  },
  {
    id: 'custom-celebration-cake',
    name: 'Bespoke Celebration Tier Cake',
    category: 'Custom Atelier',
    shortDescription: 'Tailor-made for your exact theme, occasion, palette, and flavour preferences.',
    fullDescription: 'Whatever you envision—tiered floral cakes, whimsical birthday themes, minimalist semi-naked designs, or personalized toppers—we collaborate with you on WhatsApp to craft your centrepiece.',
    flavorProfile: 'Customized to your choice',
    price: null,
    servingSuggestion: 'Tiered, themed, or sculpted to your guest count',
    imageUrl: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'wide',
    featured: true,
  },
];

/**
 * Editorial Cake Gallery items
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Two-Tier Buttercream & Floral',
    occasion: 'Anniversary / Wedding Milestone',
    description: 'Textured ivory buttercream with delicate botanical accents on a pedestal.',
    imageUrl: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=80',
    aspectClass: 'aspect-[3/4]',
  },
  {
    id: 'g-2',
    title: 'Belgian Truffle Ganache Drip',
    occasion: 'Birthday Party',
    description: 'Silky dark chocolate cascade with fresh wild berry crown.',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'g-3',
    title: 'Ribbed Minimalist Celebration Cake',
    occasion: 'Milestone Celebration',
    description: 'Refined horizontal ribbed frosting with subtle warm undertones.',
    imageUrl: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=1000&q=80',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'g-4',
    title: 'Summer Berry & Fresh Cream Gateau',
    occasion: 'Festive Gathering',
    description: 'Airy layered sponge adorned with fresh summer fruit and mint sprigs.',
    imageUrl: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=80',
    aspectClass: 'aspect-[3/4]',
  },
  {
    id: 'g-5',
    title: 'Royal Saffron Pistachio Fusion',
    occasion: 'Engagement & Family Festive',
    description: 'Subtle cardamom cream frosting crowned with pistachio slivers and rose.',
    imageUrl: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1000&q=80',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'g-6',
    title: 'Festive Confetti Birthday Cake',
    occasion: 'Birthday Bash',
    description: 'Joyful celebration design ready to light up memorable moments.',
    imageUrl: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1000&q=80',
    aspectClass: 'aspect-[4/3]',
  },
];
