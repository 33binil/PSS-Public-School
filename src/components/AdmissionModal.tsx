import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Mail, FileText, ArrowRight, Sparkles } from 'lucide-react';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    grade: 'Grade 1',
    parentName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = `PSS-24-${Math.floor(1000 + Math.random() * 9000)}`;
    setApplicationId(randomId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      studentName: '',
      grade: 'Grade 1',
      parentName: '',
      phone: '',
      email: '',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-emerald-900/10 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#073f30] via-[#0b5440] to-[#073f30] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center p-1.5 border border-amber-400/30">
              <img 
                src="public/assets/images/pss_logo.jpg" 
                alt="PSS Emblem" 
                className="w-full h-full object-contain filter brightness-110" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-amber-300">
                Admissions 2024 – 2025
              </span>
              <h3 className="text-xl font-serif font-bold text-white leading-tight">
                Begin Your Child&apos;s Journey with PSS
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

        {/* Content */}
        <div className="p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Enquiry Successfully Received
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-800">
                  Thank You, {formData.parentName || 'Parent'}!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  We have registered your admission inquiry for <span className="font-semibold text-slate-800">{formData.studentName}</span> for <span className="font-semibold text-[#0c4e3d]">{formData.grade}</span>.
                </p>
              </div>

              <div className="bg-[#f7faf8] border border-emerald-100 rounded-xl p-4 max-w-sm mx-auto text-left space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">Reference Number:</span>
                  <span className="font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">{applicationId}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">Expected Response:</span>
                  <span className="font-medium text-slate-700">Within 24 working hours</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">Campus Contact:</span>
                  <span className="font-medium text-slate-700">0478 282 2610</span>
                </div>
              </div>

              <p className="text-xs text-slate-500">
                Our admissions counselor will contact you via phone or email with the prospectus and interview schedule.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 bg-[#0c4e3d] hover:bg-[#08362a] text-white font-semibold text-sm rounded-xl transition-colors shadow-sm"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                Fill out the brief enquiry form below. Our admissions team will reach out to provide curriculum details, fee structure, and schedule a campus visit.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Student&apos;s Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="e.g. Ananya Nair"
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c4e3d] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Grade / Class Applying For *
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c4e3d] focus:bg-white"
                  >
                    <option value="Kindergarten (Pre-KG / LKG / UKG)">Kindergarten (Pre-KG / LKG / UKG)</option>
                    <option value="Primary School (Grades 1 - 5)">Primary School (Grades 1 - 5)</option>
                    <option value="Middle School (Grades 6 - 8)">Middle School (Grades 6 - 8)</option>
                    <option value="Secondary (Grades 9 - 10 CBSE)">Secondary (Grades 9 - 10 CBSE)</option>
                    <option value="Senior Secondary - Science Stream">Senior Secondary - Science Stream (PCMB / PCMC)</option>
                    <option value="Senior Secondary - Commerce Stream">Senior Secondary - Commerce Stream</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="e.g. Sebastian Joseph"
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c4e3d] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c4e3d] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="parent.email@example.com"
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c4e3d] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Any Queries or Previous School Details (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention any specific requirements, transport query, or sibling admissions..."
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c4e3d] focus:bg-white resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-slate-400" />
                  CBSE Affiliated Senior Secondary School
                </span>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0c4e3d] hover:bg-[#08362a] text-white text-sm font-semibold rounded-xl transition-all shadow-sm"
                  >
                    Submit Enquiry
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
