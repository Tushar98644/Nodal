import { Sparkles, ArrowRight, CheckCircle2, Palette, Globe } from 'lucide-react';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section className="pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1 text-center md:text-left">
        <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 px-4 py-2 rounded-full text-orange-600 text-sm font-bold mb-6">
          <Sparkles size={16} /><span>AI-Powered Agency Builder</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">Launch your <span className="text-orange-500">recruitment agency</span> in minutes.</h1>
        <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">Stop fussing with designers. Nodal uses AI to generate your professional brand assets and a Stripe-ready website instantly.</p>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
          <Link href="/dashboard" className="group bg-slate-900 text-white px-8 py-4 rounded-2xl text-lg font-bold flex items-center gap-3 hover:bg-orange-500 hover:shadow-lg transition-all"><span>Start Building Now</span><ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></Link>
          <p className="text-slate-500 text-sm font-medium flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> No design skills needed</p>
        </div>
      </div>
      <div className="flex-1 w-full max-w-xl">
        <div className="relative bg-white/40 backdrop-blur-xl rounded-[3rem] border border-white/50 p-4 shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-700">
          <img src={''} alt="App Mockup" className="rounded-4xl shadow-sm border border-slate-100/50 w-full h-auto opacity-90" />
          <div className="absolute -left-12 bottom-12 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border flex gap-3 animate-bounce-slow"><div className="w-10 h-10 bg-blue-100 rounded-lg flex center text-blue-600 justify-center items-center"><Palette size={20} /></div><div><p className="text-xs text-slate-400 font-bold uppercase">Generated</p><p className="text-sm font-bold">Brand Kit</p></div></div>
          <div className="absolute -right-8 top-12 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border flex gap-3 animate-bounce-slow delay-300"><div className="w-10 h-10 bg-green-100 rounded-lg flex center text-green-600 justify-center items-center"><Globe size={20} /></div><div><p className="text-xs text-slate-400 font-bold uppercase">Ready</p><p className="text-sm font-bold">Website</p></div></div>
        </div>
      </div>
    </section>
  );
};
