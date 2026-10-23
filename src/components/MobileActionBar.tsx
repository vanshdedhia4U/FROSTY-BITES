import React from 'react';
import { Cake, MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../data/business';

export const MobileActionBar: React.FC = () => {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#F8EFE6]/95 backdrop-blur-md border-t border-[#3D231A]/10 px-4 py-2.5 shadow-lg flex items-center justify-between gap-3"
    >
      <a
        href="#cakes"
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-[#3D231A] bg-[#F2D8D5] active:bg-[#E8C5C1] rounded-full transition-colors"
      >
        <Cake className="w-3.5 h-3.5 text-[#79321A]" />
        <span>Menu</span>
      </a>

      <a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-white bg-[#79321A] active:bg-[#652712] rounded-full transition-colors shadow-xs"
      >
        <MessageCircle className="w-4 h-4 text-[#25D366]" />
        <span>WhatsApp</span>
      </a>
    </aside>
  );
};
