import React from 'react';
import { ArrowRight, GraduationCap, Award } from 'lucide-react';

interface HeroProps {
  onExploreFeature: (featureName: string) => void;
  onScrollToAbout: () => void;
  onOpenAdmission?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreFeature,
  onScrollToAbout,
  onOpenAdmission,
}) => {
  const cards = [
    {
      id: 'academic',
      title: 'ACADEMIC EXCELLENCE',
      description: 'CBSE curriculum with a strong focus on knowledge, analytical thinking and holistic development.',
      icon: (
        <svg className="w-8 h-8 text-[#d97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      ),
    },
    {
      id: 'campus',
      title: 'OUR CAMPUS',
      description: 'A safe, serene green campus with modern laboratories, digital smart boards and sports grounds.',
      icon: (
        <svg className="w-8 h-8 text-[#d97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 22h16"/>
          <path d="M18 22V8l-6-4-6 4v14"/>
          <path d="M12 4v4"/>
          <path d="M10 12h4"/>
          <path d="M10 16h4"/>
        </svg>
      ),
    },
    {
      id: 'growth',
      title: 'HOLISTIC GROWTH',
      description: 'Nurturing arts, athletic prowess, leadership, public speaking and moral life skills for life.',
      icon: (
        <svg className="w-8 h-8 text-[#d97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#f4f7f4] min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-96px)] flex flex-col justify-between">
      {/* Background Campus Photo & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="src/assets/images/school-hero.jpg" 
          alt="PSS Public School Campus Aerial" 
          className="w-full h-full object-cover object-center scale-[1.01]"
          referrerPolicy="no-referrer"
        />
        {/* Soft white gradient overlay on left for typography readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/30 sm:w-4/5 lg:w-3/5 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/20 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Area - Enhanced Spacing & Scale */}
      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-14 pb-6 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Sizable Typography & Slogan */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-5 lg:space-y-6 max-w-3xl">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2">
              <span className="text-xs sm:text-sm font-extrabold tracking-[0.24em] uppercase text-[#b45309]">
                A LEGACY OF LEARNING
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif font-black text-4xl sm:text-6xl lg:text-[68px] xl:text-[76px] text-[#0c3b2e] leading-[1.04] tracking-tight drop-shadow-xs">
              PSS PUBLIC <br />
              SCHOOL
            </h1>

            {/* Sub-heading */}
            <p className="text-sm sm:text-base lg:text-[17px] font-bold tracking-[0.26em] uppercase text-slate-800">
              PANICKAVEETTIL SIR SEBASTIAN
            </p>

            {/* Accent Line & Slogan */}
            <div className="pt-1 flex items-start gap-3.5 max-w-2xl">
              <div className="w-8 h-1.5 bg-[#d97706] rounded-full mt-2 shrink-0" />
              <p className="text-base sm:text-lg lg:text-xl font-semibold text-slate-800 leading-snug">
                Nurturing young minds with knowledge, values and a vision for a better tomorrow.
              </p>
            </div>

            {/* Extended Educational Philosophy Paragraph */}
            <div className="pl-11 max-w-2xl pt-1">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                At PSS Public School, we believe education is more than academic success. It is about nurturing curiosity, building character and empowering every child to discover their potential. Through a balanced blend of knowledge, values, creativity and real-world experiences, we prepare our students to face the future with confidence.
              </p>
            </div>

            {/* Interactive Call-To-Action Pathway Buttons */}
            <div className="pl-11 pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onScrollToAbout}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 bg-[#0c3b2e] hover:bg-[#072a21] text-white text-xs sm:text-sm font-extrabold tracking-wider uppercase rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Know More About PSS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              {onOpenAdmission && (
                <button
                  onClick={onOpenAdmission}
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 bg-white hover:bg-amber-50 text-[#0c3b2e] border-2 border-emerald-900/20 hover:border-amber-500 text-xs sm:text-sm font-extrabold tracking-wider uppercase rounded-xl shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Admission Enquiry</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Visual Accolade Cards Filling Blank Space */}
          <div className="hidden lg:flex lg:col-span-4 flex-col items-end space-y-4 pt-16 pr-2">
            <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-[0_12px_36px_rgba(12,59,46,0.12)] border border-slate-100 max-w-xs transition-transform hover:-translate-y-1 select-none">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0c3b2e] flex items-center justify-center font-bold">
                  <GraduationCap className="w-5 h-5 text-[#0c3b2e]" />
                </div>
                <div>
                  <span className="block font-serif font-black text-slate-900 text-base leading-tight">CBSE Affiliation</span>
                  <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">Senior Secondary Level</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Science, Commerce &amp; Humanities streams with modern smart labs and experienced faculty.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-[0_10px_30px_rgba(12,59,46,0.1)] border border-slate-100 flex items-center gap-3.5 max-w-xs w-full transition-transform hover:-translate-y-1 select-none">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center font-bold shrink-0">
                <Award className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <span className="block font-black text-base text-[#0c3b2e] leading-tight">40+ Years of Legacy</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Nurturing Leaders Since 1985</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom: Floating 3 Feature Cards & Scroll to Explore */}
      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 pb-5 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => onExploreFeature(card.title)}
              className="group bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-2xl shadow-[0_6px_25px_rgb(0,0,0,0.05)] border border-slate-100 hover:border-amber-300 hover:shadow-[0_12px_32px_rgba(12,59,46,0.12)] transition-all duration-300 cursor-pointer flex items-center gap-4 sm:gap-5 hover:-translate-y-1"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-amber-50/80 border border-amber-200/60 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-amber-100/90 transition-all">
                {card.icon}
              </div>
              <div className="space-y-1 min-w-0">
                <h3 className="text-sm sm:text-base font-bold tracking-wide uppercase text-slate-900 group-hover:text-[#0c3b2e] transition-colors truncate">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal line-clamp-2">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll to Explore Indicator */}
        <div className="flex flex-col items-center justify-center pt-5 pb-1">
          <button
            onClick={onScrollToAbout}
            className="group flex flex-col items-center gap-2 text-slate-600 hover:text-[#0c3b2e] transition-colors focus:outline-none cursor-pointer"
          >
            <div className="w-4 h-7 rounded-full border-2 border-slate-600 group-hover:border-[#0c3b2e] flex items-start justify-center p-1 transition-colors">
              <span className="w-1 h-1.5 bg-slate-600 group-hover:bg-[#0c3b2e] rounded-full animate-bounce" />
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-0.5 bg-slate-300" />
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-slate-600 group-hover:text-[#0c3b2e]">
                SCROLL TO EXPLORE
              </span>
              <span className="w-6 h-0.5 bg-slate-300" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
