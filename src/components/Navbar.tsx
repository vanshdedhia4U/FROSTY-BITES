import React, { useState } from 'react';
import { Menu, X, Store } from 'lucide-react';
import { buildWhatsAppLink } from '../data/business';

interface NavbarProps {
  onOpenCustomModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCustomModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Cakes', href: '#cakes' },
    { label: 'Custom Cakes', href: '#custom' },
    { label: 'Our Story', href: '#story' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F8EFE6]/95 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Brand Wordmark (Organic, stylish retro patisserie feel like "frem") */}
          <a
            href="#hero"
            className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[#3D231A] whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
          >
            Frosty Bites
          </a>

          {/* Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-9 text-[14px] font-medium text-[#3D231A]/85">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#79321A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Store Icon + Terracotta Pill Button */}
          <div className="hidden md:flex items-center gap-5 shrink-0">
            <a
              href="#cakes"
              className="p-2 text-[#3D231A]/80 hover:text-[#79321A] transition-colors"
              aria-label="View Cake Shop"
            >
              <Store className="w-5 h-5" />
            </a>

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold tracking-wide text-white bg-[#79321A] hover:bg-[#652712] rounded-full transition-all shadow-xs whitespace-nowrap shrink-0"
            >
              Order a Cake
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#79321A] rounded-full"
            >
              Order
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#3D231A] hover:text-[#79321A] focus:outline-none rounded-md"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#3D231A]/10 bg-[#F8EFE6] px-6 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-base font-medium text-[#3D231A] hover:text-[#79321A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#3D231A]/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenCustomModal) onOpenCustomModal();
              }}
              className="w-full text-center px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#3D231A] bg-[#F2D8D5] rounded-full hover:bg-[#E8C5C1] transition-colors"
            >
              Custom Cake Enquiry
            </button>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#79321A] rounded-full hover:bg-[#652712] transition-colors"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
