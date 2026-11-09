import React, { useState } from 'react';
import { Search, X, ArrowRight, BookOpen, Calendar, Award, UserCheck } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (title: string) => void;
}

interface QuickSearchItem {
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
}

const QUICK_ITEMS: QuickSearchItem[] = [
  {
    title: 'Admissions 2024-25 Criteria & Registration',
    category: 'Admissions',
    description: 'Guidelines for KG, Primary, Secondary and Senior Secondary CBSE streams.',
    icon: UserCheck,
  },
  {
    title: 'Annual Day Celebration 2024',
    category: 'Events',
    description: 'Vibrant celebration of student talents, cultural arts and awards ceremony.',
    icon: Award,
  },
  {
    title: 'Senior Secondary Science & Commerce Stream Syllabus',
    category: 'Academics',
    description: 'CBSE curriculum details, laboratory electives and subject combinations.',
    icon: BookOpen,
  },
  {
    title: 'Academic Calendar 2024-25',
    category: 'Calendar',
    description: 'School term schedules, examination dates, sports meet and national holidays.',
    icon: Calendar,
  },
  {
    title: 'Science Exhibition & Robotics Workshop',
    category: 'Campus Life',
    description: 'Annual STEM showcase with student working models and demonstrations.',
    icon: Award,
  },
];

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = QUICK_ITEMS.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 bg-slate-950/65 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-blue-900/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 md:p-6 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-blue-800 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programs, events, circulars, admission details..."
            className="w-full text-base md:text-lg bg-transparent border-none focus:outline-none placeholder-slate-400 text-slate-800"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1 rounded bg-slate-100"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="p-4 md:p-6 max-h-[60vh] overflow-y-auto space-y-3">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-1">
            {query ? `Search results for "${query}"` : 'Popular Quick Links'}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-8 text-slate-500 text-sm">
              No direct matches found for &quot;{query}&quot;. Try searching for &quot;Admissions&quot;, &quot;Events&quot;, or &quot;Science&quot;.
            </div>
          ) : (
            filtered.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  onClick={() => {
                    onClose();
                    onSelectResult(item.title);
                  }}
                  className="p-3.5 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/30 transition-all cursor-pointer flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-100/60 text-[#0f2b5c] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 rounded">
                          {item.category}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-slate-800 group-hover:text-[#0f2b5c] transition-colors mt-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#0f2b5c] group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
              );
            })
          )}
        </div>

        {/* Search Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
          <span>Press ESC or click outside to dismiss</span>
          <span>Panickaveettil Sir Sebastian Public School</span>
        </div>
      </div>
    </div>
  );
};
