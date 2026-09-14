'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/i18n/LanguageProvider';

export default function ConsultationPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    message: '',
    honeypot: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const lastSubmit = useRef(0);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t.consultation.validation.nameRequired;
    if (!formData.phone.trim()) newErrors.phone = t.consultation.validation.phoneRequired;
    else if (!/^[\+]?[0-9\s\-]{8,15}$/.test(formData.phone.trim())) newErrors.phone = t.consultation.validation.phoneInvalid;
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = t.consultation.validation.emailInvalid;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // spam
    if (Date.now() - lastSubmit.current < 5000) return; // rate limit

    if (!validate()) return;

    setStatus('sending');
    lastSubmit.current = Date.now();

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (status === 'success') {
    return (
      <section className="pt-32 pb-20 section-navy min-h-screen flex items-center justify-center">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-ish-gold/10 flex items-center justify-center">
            <svg className="w-10 h-10 text-ish-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-ish-white mb-4">{t.consultation.success}</h2>
          <button
            onClick={() => { setStatus('idle'); setFormData({ name: '', phone: '', email: '', interest: '', message: '', honeypot: '' }); }}
            className="btn-outline rounded-sm mt-6"
          >
            {t.nav.home}
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="pt-32 pb-20 section-navy relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-ish-gold text-sm tracking-[0.15em] uppercase mb-4">
            {t.nav.consultation}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-ish-white mb-6">
            {t.consultation.title}
          </h1>
          <div className="gold-line max-w-xs mx-auto mb-8" />
          <p className="text-ish-gray text-lg max-w-2xl mx-auto">
            {t.consultation.description}
          </p>
        </div>
      </section>

      <section className="py-16 section-dark">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="glass-card rounded-sm p-8 sm:p-10 space-y-6" id="consultation-form">
            {/* Honeypot */}
            <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

            {/* Name */}
            <div>
              <label className="block text-ish-gray text-sm mb-2">{t.consultation.name} *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-input rounded-sm ${errors.name ? 'error' : ''}`}
                placeholder={t.consultation.name}
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-ish-gray text-sm mb-2">{t.consultation.phone} *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`form-input rounded-sm ${errors.phone ? 'error' : ''}`}
                placeholder={t.consultation.phone}
                dir="ltr"
              />
              {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-ish-gray text-sm mb-2">{t.consultation.email}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input rounded-sm ${errors.email ? 'error' : ''}`}
                placeholder={t.consultation.email}
                dir="ltr"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Interest */}
            <div>
              <label className="block text-ish-gray text-sm mb-2">{t.consultation.interest}</label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="form-input rounded-sm"
              >
                <option value="">{t.consultation.interest}</option>
                {t.consultation.interestOptions.map((option, i) => (
                  <option key={i} value={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-ish-gray text-sm mb-2">{t.consultation.message}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input rounded-sm min-h-[120px] resize-y"
                placeholder={t.consultation.message}
                rows={4}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-gold rounded-sm w-full flex items-center justify-center gap-2 disabled:opacity-70"
              id="consultation-submit"
            >
              {status === 'sending' ? (
                <>
                  <span className="spinner" />
                  {t.consultation.sending}
                </>
              ) : (
                t.consultation.submit
              )}
            </button>

            {status === 'error' && (
              <p className="text-red-400 text-center text-sm">{t.consultation.error}</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
