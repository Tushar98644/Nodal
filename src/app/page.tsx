'use client'

import { useState } from 'react';
import { ArrowRight, Sparkles, Palette, Download, Zap, LayoutTemplate, CheckCircle2, Globe, Plus, FileText } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const steps = [
    { num: "01", title: "Chat with AI", desc: "Tell Novus about your niche. We'll ask 4 simple questions to nail your vibe." },
    { num: "02", title: "Review & Refine", desc: "See your assets generated in real-time. Ask for tweaks like 'make it bolder'." },
    { num: "03", title: "Download & Launch", desc: "Get your ZIP file. Drag and drop to free hosting. Verify your business." }
  ];

  const faqs = [
    { q: "Is the website really free to host?", a: "Yes. We generate a static HTML file. You can host this for free on platforms like Netlify Drop, Vercel, or GitHub Pages forever." },
    { q: "Can I edit the website later?", a: "Absolutely. It's standard HTML and Tailwind CSS. You (or any developer) can edit the text and images using any code editor." },
    { q: "Do I own the logo?", a: "Yes. The assets are generated for you and you have full commercial rights to use them for your business." }
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#FFFBF8] overflow-hidden font-sans text-slate-900 selection:bg-orange-100">
      <div id="bg" className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FFDAC1] rounded-full mix-blend-multiply blur-[100px] opacity-30 animate-pulse -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-[#FFCCB6] rounded-full mix-blend-multiply blur-[100px] opacity-30 -translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-orange-100 rounded-full mix-blend-multiply blur-[120px] opacity-20 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <main id="home" className="relative z-10 pt-20">
        <section className="pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 px-4 py-2 rounded-full text-orange-600 text-sm font-bold mb-6">
              <Sparkles size={16} /><span>AI-Powered Agency Builder</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">Launch your <span className="text-orange-500">recruitment agency</span> in minutes.</h1>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">Stop fussing with designers. Novus uses AI to generate your professional brand assets and a Stripe-ready website instantly.</p>
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

        <section id="steps" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl"><h2 className="text-3xl md:text-5xl font-bold mb-6">From idea to launch in three steps.</h2><p className="text-lg text-slate-500">No credit card required.</p></div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="group pl-8 border-l-2 border-orange-100 hover:border-orange-400 transition-colors relative">
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-orange-200 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all" />
                <span className="text-sm font-bold text-orange-400 tracking-widest mb-2 block uppercase">Step {s.num}</span>
                <h3 className="text-2xl font-bold mb-3">{s.title}</h3><p className="text-slate-500 font-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

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

        <section className="py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto relative group">
            <div className="absolute inset-0 bg-linear-to-r from-orange-200 via-red-200 to-orange-100 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-70 transition duration-1000" />
            <div className="relative bg-white/60 backdrop-blur-2xl border border-white/80 rounded-[3rem] p-12 md:p-24 text-center shadow-xl overflow-hidden">
              <div className="absolute inset-0 opacity-30 pointer-events-none"><div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-orange-300 blur-[80px]" /><div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] rounded-full bg-red-300 blur-[80px]" /></div>
              <div className="relative z-10 flex flex-col items-center">
                <span className="mb-6 bg-white px-6 py-2 rounded-full shadow-sm border border-slate-100 text-slate-600 font-medium text-sm">Limited Public Beta</span>
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to make it official?</h2>
                <p className="text-xl text-slate-500 mb-10 max-w-2xl">Join the next generation of recruiters building their brands with AI.</p>
                <Link href="/dashboard" className="bg-slate-900 text-white px-10 py-5 rounded-2xl text-xl font-bold flex gap-3 hover:bg-orange-600 hover:scale-105 transition-all shadow-lg"><span>Create Agency Profile</span><ArrowRight size={20} /></Link>
                <p className="mt-6 text-sm text-slate-400">No account required • Free export</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="pb-12 text-center">
          <div className="flex justify-center gap-2 mb-6 opacity-60"><div className="w-6 h-6 bg-slate-300 rounded-md flex center text-white text-xs font-bold justify-center items-center">N</div><span className="font-bold text-lg text-slate-400">Novus</span></div>
          <div className="flex justify-center gap-8 text-sm text-slate-400 mb-6 font-medium">{['Privacy', 'Terms', 'Twitter'].map(l => <a key={l} href="#" className="hover:text-slate-600">{l}</a>)}</div>
          <p className="text-slate-400 text-xs">© {new Date().getFullYear()} Novus AI.</p>
        </footer>
      </main>
    </div>
  );
}