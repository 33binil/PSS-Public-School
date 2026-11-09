import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeNav: string;
  onNavigate: (page: string) => void;
  onOpenSearch: () => void;
  onOpenRibbonModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeNav,
  onNavigate,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', isHome: true },
    { label: 'About Us', isHome: false },
    { label: 'Academics', isHome: false },
    { label: 'Admissions', isHome: false },
    { label: 'Campus Life', isHome: false },
    { label: 'Events', isHome: false },
    { label: 'Contact', isHome: false },
  ];

  const valuesList = [
    'EDUCATION',
    'DISCIPLINE',
    'VALUES',
    'CHARACTER',
    'EXCELLENCE',
  ];

  const handleItemClick = (label: string, isHome: boolean) => {
    setMobileMenuOpen(false);
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onNavigate(label);
    }
  };

  return (
    <header className="relative w-full bg-white border-b border-slate-100 z-40 sticky top-0 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* School Brand / Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-12 h-14 sm:w-14 sm:h-16 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
              <img 
                src="/assets/extracted/logo_shield.png" 
                alt="PSS Public School Crest" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif font-black text-slate-900 tracking-tight text-lg sm:text-xl lg:text-[22px] leading-tight group-hover:text-[#0c3b2e] transition-colors">
                PSS PUBLIC SCHOOL
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase font-bold text-slate-600">
                PANICKAVEETTIL SIR SEBASTIAN
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8">
            {navItems.map((item) => {
              const isActive = item.isHome && activeNav === 'Home';
              return (
                <button
                  key={item.label}
                  onClick={() => handleItemClick(item.label, item.isHome)}
                  className={`text-sm lg:text-[15px] font-semibold tracking-normal transition-all relative py-1 cursor-pointer ${
                    isActive 
                      ? 'text-[#0c3b2e] font-bold' 
                      : 'text-slate-700 hover:text-[#0c3b2e]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0c3b2e] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Section: Hanging Ribbon + Search Button + Mobile Menu */}
          <div className="flex items-center gap-4 sm:gap-5 relative">
            {/* Hanging Banner Ribbon - Desktop Feature matching exact user screenshot */}
            <div className="hidden xl:block relative w-[100px] 2xl:w-[108px] h-20 sm:h-24">
              <div className="absolute top-0 left-0 w-full h-[335px] z-50 select-none drop-shadow-[0_16px_28px_rgba(4,46,34,0.45)] transition-transform duration-300 hover:translate-y-1">
                {/* SVG Banner Shape with Gold Border and Swallowtail Inverted V Notch */}
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none" 
                  viewBox="0 0 100 335" 
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="bannerBg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#074232" />
                      <stop offset="60%" stopColor="#084736" />
                      <stop offset="100%" stopColor="#043325" />
                    </linearGradient>
                    <linearGradient id="bannerGold" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#fef08a" />
                      <stop offset="45%" stopColor="#facc15" />
                      <stop offset="75%" stopColor="#eab308" />
                      <stop offset="100%" stopColor="#ca8a04" />
                    </linearGradient>
                  </defs>
                  {/* Outer Gold Border and Ribbon Shape */}
                  <path 
                    d="M 1.5 0 L 98.5 0 L 98.5 333 L 50 312 L 1.5 333 Z" 
                    fill="url(#bannerBg)" 
                    stroke="url(#bannerGold)" 
                    strokeWidth="2.5" 
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                {/* Banner Content Layout */}
                <div className="relative z-10 w-full h-full flex flex-col items-center pt-3 sm:pt-4 px-2">
                  {/* Top Social Icons (sits on the white navbar level) */}
                  <div className="flex items-center justify-center gap-3 text-white/95 w-full">
                    <button 
                      onClick={() => onNavigate('Facebook Page')} 
                      aria-label="Facebook"
                      title="Facebook"
                      className="hover:text-amber-300 transition-colors cursor-pointer"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => onNavigate('Instagram')} 
                      aria-label="Instagram"
                      title="Instagram"
                      className="hover:text-amber-300 transition-colors cursor-pointer"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => onNavigate('YouTube Channel')} 
                      aria-label="YouTube"
                      title="YouTube"
                      className="hover:text-amber-300 transition-colors cursor-pointer"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </button>
                  </div>

                  {/* School Values Stack - Exact typography & layout from user screenshot */}
                  <div className="flex flex-col items-center justify-center flex-1 space-y-4 pt-10 pb-6 text-center select-none">
                    {valuesList.map((val) => (
                      <span 
                        key={val} 
                        className="text-[11.5px] 2xl:text-[12.5px] font-bold tracking-[0.16em] uppercase text-white/95 hover:text-amber-200 transition-colors cursor-default drop-shadow-xs"
                      >
                        {val}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Clearly Visible Search Button */}
            <button
              onClick={onOpenSearch}
              aria-label="Search website"
              className="p-2.5 text-slate-700 hover:text-[#0c3b2e] hover:bg-emerald-50 rounded-full border border-slate-200 hover:border-emerald-600 shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer flex items-center justify-center group relative z-20 shrink-0"
            >
              <Search className="w-5 h-5 stroke-[2.2] group-hover:scale-110 transition-transform text-slate-700 group-hover:text-[#0c3b2e]" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="xl:hidden p-2 text-slate-700 hover:text-[#0c3b2e] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-fade-in">
          {/* Mobile School Values Banner */}
          <div className="mb-3.5 p-3 bg-gradient-to-r from-[#053d2d] to-[#0a4e3b] rounded-xl text-white">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300 block mb-1.5">
              PSS Core Pillars
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {valuesList.map((val) => (
                <div key={val} className="flex items-center gap-1.5 text-[11px] text-emerald-100 font-semibold bg-emerald-950/40 px-2 py-1 rounded-md border border-emerald-700/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span>{val}</span>
                </div>
              ))}
            </div>
          </div>

          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = item.isHome && activeNav === 'Home';
              return (
                <button
                  key={item.label}
                  onClick={() => handleItemClick(item.label, item.isHome)}
                  className={`text-left px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-emerald-50 text-[#0c3b2e] font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {!item.isHome && (
                    <span className="text-[10px] text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                      Soon
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-medium">Follow PSS School:</span>
            <div className="flex items-center gap-2.5">
              <button 
                onClick={() => { setMobileMenuOpen(false); onNavigate('Facebook Page'); }} 
                className="w-7 h-7 rounded-full bg-slate-100 text-slate-700 hover:bg-[#0c3b2e] hover:text-white flex items-center justify-center transition-colors text-xs font-bold cursor-pointer"
              >
                f
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); onNavigate('Instagram'); }} 
                className="w-7 h-7 rounded-full bg-slate-100 text-slate-700 hover:bg-[#0c3b2e] hover:text-white flex items-center justify-center transition-colors text-xs cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); onNavigate('YouTube Channel'); }} 
                  className="w-7 h-7 rounded-full bg-slate-100 text-slate-700 hover:bg-[#0c3b2e] hover:text-white flex items-center justify-center transition-colors text-xs cursor-pointer"
                >
                  ▶
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    );
  };
