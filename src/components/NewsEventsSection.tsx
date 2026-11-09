import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Newspaper, Bell, Sparkles } from 'lucide-react';
import { EventItem } from '../types/index.ts';

interface NewsEventsSectionProps {
  onOpenEvent: (eventTitle: string) => void;
  onViewAllEvents: () => void;
  onOpenLiveUpdates: () => void;
  onOpenAdmission: () => void;
}

export const NewsEventsSection: React.FC<NewsEventsSectionProps> = ({
  onOpenEvent,
  onViewAllEvents,
  onOpenLiveUpdates,
  onOpenAdmission,
}) => {
  const [selectedDate, setSelectedDate] = useState<number>(15);
  const [activeDateMessage, setActiveDateMessage] = useState<string | null>(
    'Aug 15: 78th Independence Day Celebrations & Patriotic Cultural Assembly'
  );

  // Month navigation state
  const [currentMonthIndex, setCurrentMonthIndex] = useState(7); // 7 = August (0-indexed)
  const [currentYear, setCurrentYear] = useState(2024);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const eventsList: EventItem[] = [
    {
      id: 'annual-day',
      date: 'MAY 19, 2024',
      title: 'Annual Day Celebration 2024',
      description: 'A vibrant celebration of talent, creativity and achievement by our students.',
      image: '/assets/extracted/event_annual_day.png',
      category: 'Celebration',
    },
    {
      id: 'science-exhibition',
      date: 'JUN 28, 2024',
      title: 'Science Exhibition',
      description: 'Our young innovators showcased creative projects at the annual science exhibition.',
      image: '/assets/extracted/event_science.png',
      category: 'Exhibition',
    },
    {
      id: 'sports-meet',
      date: 'MAR 10, 2024',
      title: 'Sports Meet 2024',
      description: 'A week of energy, teamwork and sportsmanship across various events.',
      image: '/assets/extracted/event_sports.png',
      category: 'Sports',
    },
    {
      id: 'cultural-fest',
      date: 'FEB 22, 2024',
      title: 'Cultural Fest',
      description: 'A celebration of rich culture through music, dance and art performances.',
      image: '/assets/extracted/event_cultural.png',
      category: 'Arts & Culture',
    },
  ];

  const augustDays = [
    { day: null }, { day: null }, { day: null }, { day: null },
    { day: 1 }, { day: 2 }, { day: 3 },
    { day: 4 }, { day: 5 }, { day: 6 }, { day: 7 }, { day: 8 }, { day: 9 }, { day: 10 },
    { day: 11 }, { day: 12 }, { day: 13 }, { day: 14 }, { day: 15, isHighlight: true, event: '78th Independence Day Celebration' }, { day: 16 }, { day: 17 },
    { day: 18 }, { day: 19 }, { day: 20 }, { day: 21 }, { day: 22, event: 'Inter-House Elocution Competition' }, { day: 23 }, { day: 24 },
    { day: 25 }, { day: 26 }, { day: 27 }, { day: 28 }, { day: 29, event: 'National Sports Day Friendly Matches' }, { day: 30 }, { day: 31 },
  ];

  const handleDateClick = (dayObj: { day: number | null; event?: string }) => {
    if (!dayObj.day) return;
    setSelectedDate(dayObj.day);
    if (dayObj.event) {
      setActiveDateMessage(`Aug ${dayObj.day}: ${dayObj.event}`);
    } else if (dayObj.day === 15) {
      setActiveDateMessage('Aug 15: 78th Independence Day Celebrations & Patriotic Cultural Assembly');
    } else {
      setActiveDateMessage(`Aug ${dayObj.day}: Regular Academic Day & After-School Activity Clubs`);
    }
  };

  const handlePrevMonth = () => {
    if (currentMonthIndex === 0) {
      setCurrentMonthIndex(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonthIndex(currentMonthIndex - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonthIndex === 11) {
      setCurrentMonthIndex(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonthIndex(currentMonthIndex + 1);
    }
  };

  return (
    <section className="relative py-16 sm:py-24 bg-[#fafbf9] overflow-hidden border-t border-slate-100">
      {/* Decorative Tree Foliage on Edges */}
      <div className="absolute left-0 top-16 w-20 sm:w-28 lg:w-36 opacity-80 pointer-events-none z-0">
        <img 
          src="/assets/extracted/branch_left.png" 
          alt="Campus greenery foliage" 
          className="w-full h-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute right-0 top-12 w-16 sm:w-24 lg:w-32 opacity-80 pointer-events-none z-0">
        <img 
          src="/assets/extracted/branch_right.png" 
          alt="Campus greenery foliage" 
          className="w-full h-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 pb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-blue-800">
                NEWS & EVENTS
              </span>
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-[44px] text-slate-900 leading-tight">
              What&apos;s Happening <br className="hidden sm:inline" />
              at PSS
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 max-w-lg">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Stay updated with the latest news, events, activities and achievements from our school community.
            </p>
            <button
              onClick={onViewAllEvents}
              className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#b45309] hover:text-[#92400e] transition-colors shrink-0 group self-start sm:self-auto cursor-pointer"
            >
              <span>VIEW ALL EVENTS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Main Content Grid: 2x2 Events on Left + Sidebar on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-start">
          {/* Left: 4 Event Cards (2 columns x 2 rows) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {eventsList.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_3px_18px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(11,37,69,0.08)] hover:border-blue-200 transition-all duration-300 flex flex-col group"
              >
                {/* Event Photo */}
                <div className="h-48 sm:h-52 lg:h-56 w-full overflow-hidden bg-slate-100 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3.5 left-3.5">
                    <span className="text-[11px] font-bold tracking-wider uppercase bg-white/95 backdrop-blur-sm text-slate-800 px-2.5 py-1 rounded-md shadow-xs">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Event Info */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-slate-500">
                      {item.date}
                    </span>
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-slate-900 group-hover:text-[#0f2b5c] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="pt-1">
                    <button
                      onClick={() => onOpenEvent(item.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-slate-900 group-hover:text-[#0f2b5c] transition-colors cursor-pointer"
                    >
                      <span>READ MORE</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar: 3 Stacked Widgets */}
          <div className="lg:col-span-4 space-y-6">
            {/* Widget 1: PSS Live Updates Bar */}
            <div
              onClick={onOpenLiveUpdates}
              className="bg-white p-5 rounded-2xl border border-slate-100 shadow-[0_3px_16px_rgba(0,0,0,0.03)] hover:border-blue-300 hover:shadow-md transition-all cursor-pointer flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0f2b5c] flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-[#0f2b5c] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <path d="M7 8h10"/>
                  <path d="M7 12h10"/>
                  <path d="M7 16h6"/>
                </svg>
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0f2b5c] transition-colors">
                  PSS Live Updates
                </h4>
                <p className="text-xs text-slate-500 leading-snug">
                  Get the latest announcements, notices and important updates.
                </p>
              </div>
            </div>

            {/* Widget 2: School Calendar */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-[0_3px_16px_rgba(0,0,0,0.03)] space-y-4">
              {/* Calendar Month Navigation */}
              <div className="flex items-center justify-between px-1">
                <button
                  onClick={handlePrevMonth}
                  aria-label="Previous month"
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="font-serif font-bold text-sm sm:text-base text-slate-800 tracking-wide">
                  {monthNames[currentMonthIndex]} {currentYear}
                </span>
                <button
                  onClick={handleNextMonth}
                  aria-label="Next month"
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Day Headers */}
              <div className="grid grid-cols-7 text-center text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <span>Sun</span>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
              </div>

              {/* Days Grid */}
              <div className="grid grid-cols-7 gap-y-1.5 text-center text-xs font-medium text-slate-700">
                {augustDays.map((d, index) => {
                  if (d.day === null) {
                    return <span key={index} className="py-1"></span>;
                  }

                  const isAug15 = d.day === 15;
                  const isSelected = selectedDate === d.day;
                  const hasSpecialEvent = Boolean(d.event);

                  return (
                    <button
                      key={index}
                      onClick={() => handleDateClick(d)}
                      className="py-0.5 relative flex items-center justify-center group focus:outline-none cursor-pointer"
                    >
                      <span
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs transition-all ${
                          isAug15
                            ? 'bg-[#0f2b5c] text-white font-bold shadow-xs'
                            : isSelected
                            ? 'bg-amber-100 text-[#0f2b5c] font-bold ring-2 ring-[#0f2b5c]'
                            : hasSpecialEvent
                            ? 'text-[#0f2b5c] font-bold bg-blue-50 hover:bg-blue-100'
                            : 'hover:bg-slate-100 text-slate-700'
                        }`}
                      >
                        {d.day}
                      </span>
                      {hasSpecialEvent && !isAug15 && (
                        <span className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-amber-500" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Selected date quick event banner */}
              {activeDateMessage && (
                <div className="p-2.5 bg-blue-50/80 border border-blue-100 rounded-xl text-xs text-blue-900 leading-snug animate-fade-in flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>{activeDateMessage}</span>
                </div>
              )}
            </div>

            {/* Widget 3: Admissions Enquiry Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#07244d] via-[#0d3b75] to-[#051a3a] text-white p-6 sm:p-7 shadow-xl border border-blue-800">
              {/* Subtle architectural background texture */}
              <div className="absolute -right-6 -bottom-6 w-44 h-44 opacity-20 pointer-events-none">
                <img 
                  src="/src/assets/images/school_campus_hero_1794175756616.jpg" 
                  alt="Campus texture" 
                  className="w-full h-full object-cover filter brightness-150 rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="relative z-10 space-y-4">
                <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-blue-200/90">
                  ADMISSIONS 2024 – 25
                </span>

                <h3 className="font-serif font-bold text-xl sm:text-2xl lg:text-[26px] text-white leading-snug">
                  Begin Your <br />
                  Child&apos;s Journey <br />
                  with PSS
                </h3>

                <div className="pt-1">
                  <button
                    onClick={onOpenAdmission}
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white text-[#0f2b5c] font-bold text-xs tracking-wider uppercase rounded-full shadow-md hover:bg-amber-50 hover:shadow-lg transition-all group hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>ADMISSION ENQUIRY</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
