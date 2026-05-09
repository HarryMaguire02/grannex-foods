'use client';

import { useState } from 'react';
import Link from 'next/link';

const PRODUCTS = [
  'Sunflower Oil',
  'Rapeseed Oil',
  'Mayonnaise',
  'Ketchup',
  'Other',
];

type FormData = {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  deliveryDate: string;
  deliveryAddress: string;
  notes: string;
};

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const inputClass =
  'w-full px-3 py-2.5 border border-primary/20 rounded-lg text-sm text-primary placeholder:text-primary/40 bg-white focus:outline-none focus:border-green-medium focus:ring-1 focus:ring-green-medium';

export default function ContactFormSection() {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    deliveryDate: '',
    deliveryAddress: '',
    notes: '',
  });
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        setFormStatus('error');
        return;
      }

      setFormStatus('success');
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        product: '',
        quantity: '',
        deliveryDate: '',
        deliveryAddress: '',
        notes: '',
      });
      setTimeout(() => setFormStatus('idle'), 6000);
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.');
      setFormStatus('error');
    }
  };

  return (
    <section className="bg-white py-10 lg:py-14">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">

        {/* Breadcrumb */}
        <nav className="text-sm text-primary/60 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-green-medium transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="font-medium text-primary">Contact</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-10 items-start">

          {/* Left: Order Form */}
          <div className="border border-primary/15 rounded-2xl overflow-hidden">

            {/* Form header */}
            <div className="bg-primary px-6 sm:px-8 py-6">
              <h2 className="text-2xl font-bold text-white">Place an Order</h2>
            </div>

            {/* Form body */}
            <div className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Row 1: Company + Contact Name */}
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
                  <label className="text-xs font-medium text-primary">Contact Name</label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Row 2: Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-primary">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+XXX XXXX"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Product */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-primary">Product Required</label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select a product...</option>
                  {PRODUCTS.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              {/* Row 3: Quantity + Delivery Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-primary">Quantity (pallets)</label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g. 2 pallets"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-primary">Preferred Delivery Date</label>
                  <input
                    type="date"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Delivery Address */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-primary">Delivery Address (full postcode)</label>
                <input
                  type="text"
                  name="deliveryAddress"
                  value={formData.deliveryAddress}
                  onChange={handleChange}
                  placeholder="Street, City, Postcode"
                  className={inputClass}
                />
              </div>

              {/* Notes */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-primary">Additional Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Special requirements, preferred format, packaging notes..."
                  rows={4}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <p className="text-xs text-primary/50">
                By submitting this form you agree to our{' '}
                <Link href="/terms-of-use" className="underline hover:text-green-medium transition-colors">
                  Terms &amp; Conditions
                </Link>
                .
              </p>

              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className="w-full bg-primary text-white text-lg font-medium py-5 rounded-2xl hover:bg-green-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {formStatus === 'loading' ? 'Sending...' : 'Submit Order'}
              </button>

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
          </div>

          {/* Right: Info Cards */}
          <div className="flex flex-col gap-5">
            {/* Get in Touch */}
            <div className="border border-primary/15 rounded-xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-green-medium mb-2">Get in Touch</p>
              <h3 className="text-xl font-bold text-primary mb-2">Prefer to reach us directly?</h3>
              <p className="text-sm text-primary/60 mb-6 leading-relaxed">
                Our team is available to take your order or answer any questions about our products and services.
              </p>
              <div className="flex flex-col divide-y divide-primary/10">
                <div className="py-3">
                  <p className="text-xs text-primary/50 mb-0.5">Warehouse Email</p>
                  <p className="text-sm font-medium text-primary">warehouse@grannexfoods.com</p>
                </div>
                <div className="py-3">
                  <p className="text-xs text-primary/50 mb-0.5">Phone</p>
                  <p className="text-sm font-medium text-primary">+30 698 461 4171</p>
                </div>
                <div className="py-3">
                  <p className="text-xs text-primary/50 mb-0.5">Alternative</p>
                  <p className="text-sm font-medium text-primary">+381 63 107 7708</p>
                </div>
                <div className="py-3">
                  <p className="text-xs text-primary/50 mb-0.5">Address</p>
                  <p className="text-sm font-medium text-primary">Dimitri Stavrou 1 Street, Nicosia, Cyprus</p>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-primary rounded-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-2">Operating Hours</p>
              <div className="flex flex-col divide-y divide-white/15">
                <div className="py-3">
                  <p className="text-xs text-white/60 mb-0.5">Order Placement</p>
                  <p className="text-sm font-medium text-white">09:00 – 18:00, Monday to Friday</p>
                </div>
                <div className="py-3">
                  <p className="text-xs text-white/60 mb-0.5">Warehouse Dispatch</p>
                  <p className="text-sm font-medium text-white">24 hours a day, 7 days a week</p>
                </div>
              </div>
            </div>

            {/* Min order note */}
            <div className="bg-pale rounded-xl p-4 flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-green-medium mt-1.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-primary">Minimum order: 1 pallet</p>
                <p className="text-xs text-primary/60 mt-0.5">
                  Custom pricing available for full truckload and bulk supply enquiries.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
