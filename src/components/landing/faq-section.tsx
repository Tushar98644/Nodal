'use client'

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { faqs } from '@/constants';

export const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id='faqs' className="py-24 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i} className="bg-white/60 backdrop-blur-sm border border-white/60 rounded-2xl overflow-hidden hover:shadow-sm">
            <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between p-6 text-left font-bold text-lg text-slate-800">
              {f.q} <span className={`p-2 rounded-full bg-orange-50 transition-transform ${openFaq === i ? 'rotate-45 text-orange-600' : 'text-slate-400'}`}><Plus size={18} /></span>
            </button>
            <div className={`px-6 text-slate-500 transition-all duration-300 ${openFaq === i ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
