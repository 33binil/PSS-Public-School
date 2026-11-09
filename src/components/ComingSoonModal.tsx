import React, { useState } from 'react';
import { X, Clock, Bell, CheckCircle2, Phone, Mail, ArrowRight } from 'lucide-react';

interface ComingSoonModalProps {
  isOpen: boolean;
  pageTitle: string;
  onClose: () => void;
  onOpenAdmission?: () => void;
}

export const ComingSoonModal: React.FC<ComingSoonModalProps> = ({
  isOpen,
  pageTitle,
  onClose,
  onOpenAdmission,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  if (!isOpen) return null;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-blue-900/10 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Decorative Header */}
        <div className="bg-gradient-to-r from-[#07244d] via-[#0f2b5c] to-[#07244d] px-6 py-5 text-white flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center p-1.5 border border-amber-400/30">
              <img 
                src="/assets/images/pss_logo.jpg" 
                alt="PSS Emblem" 
                className="w-full h-full object-contain filter brightness-110" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-amber-300">
                PSS Public School
              </span>
              <h3 className="text-lg font-serif font-bold text-white leading-tight">
                {pageTitle || 'Page Under Development'}
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

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0f2b5c] border border-blue-100 flex items-center justify-center shadow-inner">
              <Clock className="w-7 h-7 text-[#0f2b5c] animate-pulse" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>
              Coming Soon
            </div>

            <h4 className="text-xl md:text-2xl font-serif font-bold text-slate-800">
              We&apos;re preparing something wonderful!
            </h4>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              The <span className="font-semibold text-[#0f2b5c]">{pageTitle}</span> section is currently being updated for the 2024–2025 academic session. Please check back soon or connect with our administrative office.
            </p>
          </div>

          {/* Quick Notification Box */}
          <div className="bg-[#f6f9fc] border border-blue-100 rounded-xl p-4">
            {subscribed ? (
              <div className="flex items-center justify-center gap-2 text-blue-800 text-sm font-medium py-1">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span>Thank you! We will notify you once this page goes live.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <Bell className="w-3.5 h-3.5 text-amber-600" />
                  Get notified when {pageTitle} launches:
                </label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f2b5c] focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-semibold text-white bg-[#0f2b5c] hover:bg-[#071a38] rounded-lg transition-colors shrink-0 shadow-sm"
                  >
                    Notify Me
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Urgent Inquiries Helpdesk */}
          <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-4">
              <a 
                href="tel:04782822610" 
                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-[#0f2b5c] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-700" />
                <span>0478 282 2610</span>
              </a>
              <a 
                href="mailto:psspublicschool@gmail.com" 
                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-[#0f2b5c] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-700" />
                <span>psspublicschool@gmail.com</span>
              </a>
            </div>

            {onOpenAdmission && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenAdmission();
                }}
                className="inline-flex items-center gap-1 font-semibold text-[#0f2b5c] hover:text-[#071a38] transition-colors"
              >
                Admission Enquiry
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Back button */}
          <div className="text-center pt-1">
            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
