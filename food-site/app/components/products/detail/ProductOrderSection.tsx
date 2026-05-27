'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ProductOrderSectionProps {
  productName: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const inputClass =
  'w-full px-3 py-2.5 border border-primary/20 rounded-lg text-sm text-primary placeholder:text-primary/40 bg-white focus:outline-none focus:border-green-medium focus:ring-1 focus:ring-green-medium';

const TIMELINE = [
  { label: 'Within 1 hour', description: 'Order received — confirmation email sent.' },
  { label: 'Within 1 day', description: 'Team reviews and sends pricing + dispatch date.' },
  { label: 'On approval', description: 'Invoice issued, order confirmed and scheduled.' },
  { label: 'Dispatch day', description: 'Tracking details sent. Delivery to your premises.' },
];

export default function ProductOrderSection({ productName }: ProductOrderSectionProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    quantity: '',
    deliveryDate: '',
    deliveryAddress: '',
    notes: '',
  });
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (formStatus === 'error') setFormStatus('idle');
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: formData.companyName,
          contactName: formData.companyName,
          email: formData.email,
          phone: 'Not provided',
          product: productName,
          quantity: formData.quantity,
          deliveryDate: formData.deliveryDate,
          deliveryAddress: formData.deliveryAddress,
          notes: formData.notes,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        setFormStatus('error');
        return;
      }

      setFormStatus('success');
      setFormData({ companyName: '', email: '', quantity: '', deliveryDate: '', deliveryAddress: '', notes: '' });
      setTimeout(() => setFormStatus('idle'), 6000);
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.');
      setFormStatus('error');
    }
  };

  return (
    <section id="order" className="bg-white py-10 lg:py-14">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-green-medium mb-2">Place Your Order</p>
        <h2 className="text-3xl font-bold text-primary mb-8 max-w-xl">
          Fill in your details — we&apos;ll confirm pricing within one business day
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 lg:gap-8 items-start">

          {/* Form */}
          <div className="border border-primary/15 rounded-2xl overflow-hidden">
            <div className="bg-pale/60 px-6 py-4 border-b border-primary/10 flex items-center justify-between">
              <p className="text-sm font-medium text-primary">{productName}</p>
              <span className="text-xs px-2.5 py-1 bg-primary text-white rounded-full font-medium">Pre-filled</span>
            </div>

            <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-primary">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Your company name"
                    required
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-primary">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-primary">Quantity (pallets)</label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g. 2"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-primary">Preferred Delivery</label>
                  <input
                    type="date"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-primary">Delivery Postcode</label>
                <input
                  type="text"
                  name="deliveryAddress"
                  value={formData.deliveryAddress}
                  onChange={handleChange}
                  placeholder="e.g. City, Country, Zip Code"
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-primary">Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Special requirements, preferred format, packaging notes..."
                  rows={3}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <p className="text-xs text-primary/50">
                By submitting you agree to our{' '}
                <Link href="/terms-of-use" className="underline hover:text-green-medium transition-colors">
                  Terms &amp; Conditions
                </Link>
                .
              </p>

              <div className="flex flex-col xs:flex-row gap-3">
                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="flex-1 bg-primary text-white text-sm font-medium py-3 rounded-full hover:bg-green-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'loading' ? 'Sending...' : 'Submit Order'}
                </button>
                <a
                  href="mailto:vsaranovic@grannex.com"
                  className="flex-1 border border-primary text-primary text-sm font-medium py-3 rounded-full text-center hover:bg-pale transition-colors"
                >
                  Request a Quote Instead
                </a>
              </div>

              {formStatus === 'success' && (
                <div className="flex items-start gap-3 bg-green-50 border border-green-200 text-green-800 rounded-lg px-4 py-3 text-sm">
                  <span className="mt-0.5">✓</span>
                  <p>Your order request has been submitted. We&apos;ll be in touch within one business day.</p>
                </div>
              )}
              {formStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg px-4 py-3 text-sm">
                  {errorMessage}
                </div>
              )}
            </form>
          </div>

          {/* What happens next */}
          <div className="bg-primary rounded-2xl p-6 flex flex-col gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-1">What happens next</p>
              <h3 className="text-lg font-bold text-white">After you submit:</h3>
            </div>

            <div className="flex flex-col gap-4">
              {TIMELINE.map((step) => (
                <div key={step.label} className="flex flex-col gap-1 pb-4 border-b border-white/15 last:border-b-0 last:pb-0">
                  <span className="self-start text-xs font-semibold px-2.5 py-0.5 bg-white/15 text-white rounded-full">
                    {step.label}
                  </span>
                  <p className="text-sm text-white/80 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-white/50 pt-2 border-t border-white/15">
              Prefer to call? <span className="text-white/80 font-medium">+381 631 077 109</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
