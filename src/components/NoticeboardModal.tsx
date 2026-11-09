import React, { useState } from 'react';
import { X, Bell, FileText, Calendar, Download, Sparkles, Filter } from 'lucide-react';
import { NoticeItem } from '../types/index.ts';

interface NoticeboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectNotice?: (title: string) => void;
}

const SAMPLE_NOTICES: NoticeItem[] = [
  {
    id: 'n1',
    date: 'Aug 14, 2024',
    title: '78th Independence Day Celebrations & Flag Hoisting Programme Schedule',
    category: 'Event',
    isNew: true,
  },
  {
    id: 'n2',
    date: 'Aug 10, 2024',
    title: 'First Periodic Assessment (PA-1) Timetable for Classes I to XII',
    category: 'Academic',
    isNew: true,
  },
  {
    id: 'n3',
    date: 'Aug 04, 2024',
    title: 'CBSE Board Examination Registration 2024-25 for Class X & XII Students',
    category: 'Academic',
    isNew: false,
  },
  {
    id: 'n4',
    date: 'Jul 28, 2024',
    title: 'Inter-House Athletic & Sports Meet Preliminary Selections Schedule',
    category: 'Event',
    isNew: false,
  },
  {
    id: 'n5',
    date: 'Jul 20, 2024',
    title: 'School Transport Route Revision & New Bus Pass Issuance Notice',
    category: 'General',
    isNew: false,
  },
  {
    id: 'n6',
    date: 'Jul 15, 2024',
    title: 'Admission Open for Mid-Term Seats in Selected Grades for 2024-25',
    category: 'Admission',
    isNew: false,
  },
];

export const NoticeboardModal: React.FC<NoticeboardModalProps> = ({
  isOpen,
  onClose,
  onSelectNotice,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const categories = ['All', 'Academic', 'Event', 'Admission', 'General'];

  const filteredNotices = selectedCategory === 'All'
    ? SAMPLE_NOTICES
    : SAMPLE_NOTICES.filter((n) => n.category === selectedCategory);

  const handleDownload = (title: string) => {
    setDownloadSuccess(title);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-emerald-900/10 overflow-hidden max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#073f30] via-[#0b5440] to-[#073f30] px-6 py-5 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center p-1.5 border border-amber-400/30">
              <Bell className="w-5 h-5 text-amber-300 animate-bounce" />
            </div>
            <div>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-amber-300">
                Official Circulars & Bulletin
              </span>
              <h3 className="text-xl font-serif font-bold text-white leading-tight">
                PSS Live Updates & Notices
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Categories Bar */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200/70 flex items-center justify-between gap-2 overflow-x-auto shrink-0">
          <div className="flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Filter:</span>
          </div>
          <div className="flex items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#0c4e3d] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-200/60 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Notices list */}
        <div className="p-6 overflow-y-auto space-y-3.5 flex-1">
          {downloadSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-medium flex items-center gap-2 animate-fade-in">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Simulated download started for circular: &quot;{downloadSuccess}&quot;</span>
            </div>
          )}

          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              className="p-4 rounded-xl border border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50/20 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
            >
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                    notice.category === 'Academic' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                    notice.category === 'Event' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                    notice.category === 'Admission' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                    'bg-slate-100 text-slate-600 border border-slate-200'
                  }`}>
                    {notice.category}
                  </span>

                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {notice.date}
                  </span>

                  {notice.isNew && (
                    <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-1.5 py-0.2 rounded uppercase animate-pulse">
                      NEW
                    </span>
                  )}
                </div>

                <h4 
                  onClick={() => onSelectNotice && onSelectNotice(notice.title)}
                  className="text-sm font-semibold text-slate-800 group-hover:text-[#0c4e3d] cursor-pointer transition-colors leading-snug"
                >
                  {notice.title}
                </h4>
              </div>

              <div className="flex items-center gap-2 shrink-0 sm:self-center">
                <button
                  type="button"
                  onClick={() => handleDownload(notice.title)}
                  title="Download circular PDF"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#0c4e3d] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Circular PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span>Panickaveettil Sir Sebastian Public School • CBSE Affiliation No. 930123</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
