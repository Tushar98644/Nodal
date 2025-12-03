import { LayoutTemplate, Zap, Palette, Download, FileText } from 'lucide-react';

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Everything you need to <span className="text-orange-500">look professional.</span></h2>
        <p className="text-slate-500 text-lg">We don't just give you a logo. We generate a cohesive business identity.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
        <div className="md:col-span-2 bg-orange-500 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group shadow-lg text-white">
          <div className="relative z-10 max-w-md">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6"><LayoutTemplate className="w-6 h-6 text-white" /></div>
            <h3 className="text-3xl font-bold mb-4">Instant One-Page Website</h3>
            <p className="text-orange-50 text-lg opacity-90">Fully coded HTML landing page with 'Services', 'About', and 'Contact' sections for Stripe verification.</p>
          </div>
          <div className="absolute -bottom-12 -right-12 w-[60%] h-[70%] bg-white rounded-tl-2xl shadow-2xl rotate-3 group-hover:rotate-0 transition-all p-6 space-y-4">
            <div className="h-8 bg-slate-100 border-b flex items-center px-4 gap-1.5 rounded-tl-2xl mb-4"><div className="w-2.5 h-2.5 rounded-full bg-red-400" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><div className="w-2.5 h-2.5 rounded-full bg-green-400" /></div>
            <div className="h-8 w-3/4 bg-slate-100 rounded-lg" /><div className="grid grid-cols-2 gap-4"><div className="h-24 bg-slate-50 rounded-lg" /><div className="h-24 bg-slate-50 rounded-lg" /></div>
          </div>
        </div>
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 relative overflow-hidden group hover:border-orange-200 transition-colors">
          <div className="relative z-10">
            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-600"><Zap className="w-6 h-6" /></div>
            <h3 className="text-2xl font-bold mb-3">Vector Logo</h3><p className="text-slate-500">Minimalist, scalable SVG logos generated based on your aesthetic vibe.</p>
          </div>
          <Zap className="absolute bottom-6 right-6 w-32 h-32 text-slate-900 opacity-5 group-hover:opacity-10 transition-opacity" />
        </div>
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 relative overflow-hidden group hover:border-blue-200 transition-colors">
          <div className="relative z-10">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600"><Palette className="w-6 h-6" /></div>
            <h3 className="text-2xl font-bold mb-3">Brand Guide</h3><p className="text-slate-500">Hex codes, typography, and tone-of-voice rules in a PDF.</p>
          </div>
          <div className="absolute bottom-6 right-6 flex -space-x-4"><div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-white" /><div className="w-12 h-12 rounded-full bg-orange-500 border-4 border-white" /><div className="w-12 h-12 rounded-full bg-slate-200 border-4 border-white" /></div>
        </div>
        <div className="md:col-span-2 bg-slate-900 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden text-white">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6"><Download className="w-6 h-6 text-green-400" /></div>
              <h3 className="text-2xl font-bold mb-3">Asset Starter Pack (ZIP)</h3><p className="text-slate-400">Download everything in one organized folder. No lock-in, you own the files forever.</p>
            </div>
            <div className="flex gap-3 pr-8">
              {['HTML', 'CSS', 'SVG'].map((t, i) => (
                <div key={t} className="flex flex-col items-center gap-2 group/icon hover:-translate-y-1 transition-transform">
                  <div className="w-14 h-16 bg-white/10 border border-white/20 rounded-lg flex center justify-center items-center relative overflow-hidden">
                    <div className={`absolute top-0 w-full h-1 ${['bg-orange-500', 'bg-blue-500', 'bg-green-500'][i]}`} /><FileText size={20} className="text-slate-300" />
                  </div><span className="text-xs font-bold text-slate-500">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
