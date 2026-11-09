import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onKnowMore: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onKnowMore }) => {
  return (
    <section id="about-section" className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: School Information */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Tag / Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase text-[#0f2b5c]">
                ABOUT OUR SCHOOL
              </span>
              <div className="w-12 h-1 bg-[#d97706] rounded-full" />
            </div>

            {/* Main Section Heading */}
            <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] text-slate-900 leading-[1.12] tracking-tight">
              Panickaveettil <br className="hidden sm:block" />
              Sir Sebastian Public School
            </h2>

            {/* Paragraph Text */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-2xl font-normal">
              Established in 1985, PSS Public School is a CBSE Senior Secondary school managed by the Panickaveettil Sir Sebestian Charitable Society. We are committed to providing a value-based education that promotes academic excellence, character development and responsible citizenship.
            </p>

            {/* Core Pillars Mini List */}
            <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0f2b5c] shrink-0" />
                <span className="font-semibold text-slate-800">CBSE Affiliated <span className="text-blue-700 font-bold bg-blue-50 px-1.5 py-0.5 rounded text-xs">(Nursery – XII)</span></span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0f2b5c] shrink-0" />
                <span>Value-Based Moral & Character Education</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0f2b5c] shrink-0" />
                <span>Smart Classrooms & Modern STEM Labs</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0f2b5c] shrink-0" />
                <span>Dedicated & Experienced Faculty Team</span>
              </div>
            </div>

            {/* Principal's Message Spotlight */}
            <div className="pt-1">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50/80 border border-amber-200/70 flex items-center gap-3.5 sm:gap-4 max-w-xl shadow-xs">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 border-2 border-amber-400 shadow-xs bg-white">
                  <img 
                    src="/assets/images/principal.jpg" 
                    alt="Mrs. Diana Jacob - Principal" 
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-[13px] text-slate-700 italic font-medium leading-snug">
                    "At PSS, we inspire every student to discover their true potential and lead with integrity and compassion."
                  </p>
                  <span className="block text-[11px] font-extrabold text-[#0f2b5c] uppercase tracking-wider mt-1">
                    Mrs. Diana Jacob — Principal
                  </span>
                </div>
              </div>
            </div>

            {/* Know More Button */}
            <div className="pt-2">
              <button
                onClick={onKnowMore}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#0f2b5c] hover:bg-[#071a38] text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group hover:-translate-y-0.5 cursor-pointer"
              >
                <span>KNOW MORE ABOUT PSS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Student Portrait & Handwritten Tag */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end relative">
            <div className="relative inline-block w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px]">
              {/* Rounded Girl Portrait */}
              <div className="rounded-[32px] overflow-hidden shadow-xl border-4 border-white bg-slate-100 relative z-10 group">
                <img
                  src="/assets/extracted/student_girl.png"
                  alt="PSS Public School student smiling warmly in classroom uniform"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Decorative Subtle Shadow Backing */}
              <div className="absolute -inset-2.5 bg-blue-900/10 rounded-[38px] -z-0 transform rotate-2" />

              {/* Handwritten Script Badge "Nurturing Brighter Tomorrows" */}
              <div className="absolute -bottom-4 sm:-bottom-5 -right-1 sm:-right-6 lg:-right-8 z-20 bg-white/95 backdrop-blur-sm px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-2xl shadow-xl border border-blue-900/15 transform rotate-[-3deg] sm:rotate-[-4deg] hover:rotate-0 transition-transform">
                <div className="font-handwriting text-xl sm:text-3xl lg:text-[36px] text-[#0f2b5c] font-bold leading-tight select-none">
                  <p>Nurturing</p>
                  <p>Brighter</p>
                  <p>Tomorrows</p>
                </div>
                {/* Yellow accent stroke */}
                <div className="w-12 h-1 bg-[#d97706] rounded-full mt-1.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
