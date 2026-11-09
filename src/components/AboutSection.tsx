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
              <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase text-[#0c3b2e]">
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
                <CheckCircle2 className="w-4 h-4 text-[#0c3b2e] shrink-0" />
                <span>CBSE Affiliated (Classes Nursery – XII)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0c3b2e] shrink-0" />
                <span>Value-Based Moral & Character Education</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0c3b2e] shrink-0" />
                <span>Smart Classrooms & Modern STEM Labs</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0c3b2e] shrink-0" />
                <span>Dedicated & Experienced Faculty Team</span>
              </div>
            </div>

            {/* Know More Button */}
            <div className="pt-3">
              <button
                onClick={onKnowMore}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#0c3b2e] hover:bg-[#072a21] text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group hover:-translate-y-0.5 cursor-pointer"
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
              <div className="absolute -inset-2.5 bg-emerald-900/10 rounded-[38px] -z-0 transform rotate-2" />

              {/* Handwritten Script Badge "Nurturing Brighter Tomorrows" */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6 lg:-right-8 z-20 bg-white/95 backdrop-blur-sm px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl shadow-xl border border-emerald-900/15 transform rotate-[-4deg] hover:rotate-0 transition-transform">
                <div className="font-handwriting text-2xl sm:text-3xl lg:text-[36px] text-[#0c3b2e] font-bold leading-tight select-none">
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
