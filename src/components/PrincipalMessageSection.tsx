import React from 'react';
import { Quote, Award } from 'lucide-react';

interface PrincipalMessageSectionProps {
  onExploreSchool?: () => void;
}

export const PrincipalMessageSection: React.FC<PrincipalMessageSectionProps> = ({
  onExploreSchool,
}) => {
  return (
    <section id="principal-message" className="relative py-16 sm:py-24 bg-[#f6f9fc] overflow-hidden border-t border-slate-200/60">
      {/* Decorative Subtle Background Foliage / Accents matching other sections */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      {/* Main Container - Standardized full width matching Hero, About & News sections */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Styled consistently with About & News sections */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 pb-8 sm:pb-12">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-2.5">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.2em] uppercase text-[#0f2b5c]">
                FROM THE PRINCIPAL'S DESK
              </span>
              <div className="w-10 h-1 bg-[#d97706] rounded-full" />
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] text-slate-900 leading-[1.12] tracking-tight">
              Principal's Message
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              A personal welcome from Mrs. Diana Jacob, Principal of PSS Public School, on our educational philosophy and partnership with parents.
            </p>
          </div>
        </div>

        {/* Two-Column Grid: Left Portrait Card & Right Letter Box (Equal Height, Full Container Span) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Enlarged Principal Photo & Profile Card (Equal Height) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="w-full h-full bg-white rounded-3xl p-5 sm:p-6 lg:p-7 shadow-[0_16px_40px_rgba(11,37,69,0.08)] border border-slate-200/80 flex flex-col justify-between">
              
              {/* Enlarged Photo Container filling card height */}
              <div className="relative rounded-2xl overflow-hidden shadow-xs flex-1 min-h-[300px] sm:min-h-[380px] lg:min-h-0 bg-slate-100 group">
                <img
                  src="/assets/images/principal.jpg"
                  alt="Mrs. Diana Jacob - Principal of PSS Public School"
                  className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
                
                {/* Principal Name Overlay on Photo */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                  <span className="block font-serif font-black text-lg sm:text-2xl leading-tight drop-shadow-md">
                    Mrs. Diana Jacob
                  </span>
                  <span className="text-xs sm:text-[13px] font-bold text-amber-300 uppercase tracking-wider drop-shadow-md block mt-1">
                    Principal, PSS Public School
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-medium text-slate-200 block mt-0.5">
                    Panickaveettil Sir Sebastian Public School, Cherthala
                  </span>
                </div>
              </div>

              {/* Bottom Card Accents: Leadership Credential & Pull Quote */}
              <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-slate-100 space-y-2.5 sm:space-y-3 shrink-0">
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0f2b5c] flex items-center justify-center shrink-0 border border-blue-100">
                    <Award className="w-4 h-4 text-[#0f2b5c]" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs">Excellence &amp; Integrity</span>
                    <span className="text-[11px] text-slate-500">Committed to value-driven academic leadership</span>
                  </div>
                </div>

                {/* Highlighted Quote Banner */}
                <div className="p-3 sm:p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-slate-700 relative">
                  <Quote className="w-4 sm:w-5 h-4 sm:h-5 text-amber-500/30 absolute top-2 sm:top-2.5 right-2 sm:right-2.5" />
                  <p className="text-xs italic leading-relaxed text-slate-700 font-medium pr-4 sm:pr-5">
                    "Education is a three way dynamic, involving the students, their families and the school working in unison."
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Full Letter Layout (Equal Height matching Left) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full h-full bg-white rounded-3xl p-5 sm:p-7 lg:p-10 shadow-[0_16px_40px_rgba(11,37,69,0.06)] border border-slate-200/80 flex flex-col justify-between relative">
              <Quote className="w-10 sm:w-14 h-10 sm:h-14 text-blue-900/10 absolute top-4 sm:top-6 right-4 sm:right-6 pointer-events-none" />
              
              {/* Top / Body Area */}
              <div className="flex-1">
                {/* Salutation */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#0f2b5c] tracking-tight">
                    Dear Parents and Students,
                  </h3>
                </div>

                {/* Letter Body Paragraphs */}
                <div className="space-y-3.5 sm:space-y-4.5 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                  <p>
                    We aim, as a school, to develop all aspects of the individual student and to provide an education that is relevant to his/her needs and which will prepare him/her for life and living in the modern world.
                  </p>

                  <p className="font-semibold text-slate-800">
                    As part of this, we help our students to attain the highest academic standards, each to the level of their ability.
                  </p>

                  <p>
                    Our students are encouraged to participate to the fullest possible extent in the social, physical and cultural activities of the school, so that on completion of their formal education they may emerge as self disciplined, responsible and well adjusted citizens, capable of playing an active and positive role in modern society.
                  </p>

                  <p>
                    Parents are encouraged to maintain close contact with the school. There is a need to work closely so that home/school can have a shared sense of purpose and mutual respect with the sharing of information, responsibility and skills.
                  </p>

                  <div className="p-3.5 sm:p-4 rounded-2xl bg-blue-50/80 border-l-4 border-[#0f2b5c] text-slate-800 font-semibold text-xs sm:text-sm md:text-[15px] shadow-2xs">
                    Education is a three way dynamics, involving the students, their families and the school working in unison.
                  </div>

                  <p>
                    I invite you to explore our website and discover the wealth of experience we offer.
                  </p>
                </div>
              </div>

              {/* Bottom Sign-off Area */}
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 shrink-0">
                <div>
                  <span className="block text-[11px] sm:text-xs uppercase tracking-widest text-slate-400 font-bold mb-0.5 sm:mb-1">
                    With best wishes
                  </span>
                  <span className="font-serif font-black text-xl sm:text-2xl text-slate-900 block leading-tight">
                    Diana Jacob
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#b45309] uppercase tracking-wider block mt-0.5">
                    Principal, PSS Public School
                  </span>
                </div>

                {onExploreSchool && (
                  <button
                    onClick={onExploreSchool}
                    className="px-5 py-2.5 rounded-full bg-[#0f2b5c] hover:bg-[#071a38] text-white text-xs font-bold tracking-wider uppercase shadow-xs hover:shadow-md transition-all cursor-pointer whitespace-nowrap text-center w-full sm:w-auto"
                  >
                    Explore PSS Campus
                  </button>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
