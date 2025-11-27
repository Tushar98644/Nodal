'use client'
import { Sparkles, Loader2 } from 'lucide-react';

export const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-[#FFFBF8] relative overflow-hidden font-sans">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFDAC1] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFCCB6] rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>

      <div className="relative z-10 bg-white/60 backdrop-blur-xl border border-white/60 p-12 rounded-3xl shadow-xl flex flex-col items-center text-center max-w-md">
        
        <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-500 mb-6 animate-bounce">
          <Sparkles size={32} />
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-2">Generating your agency...</h2>
        <p className="text-slate-500 mb-8">AI is analyzing your vibe and drafting your initial website.</p>

        <div className="flex items-center gap-3 text-sm font-bold text-slate-400 uppercase tracking-widest">
           <Loader2 size={16} className="animate-spin text-orange-500" />
           <span>Processing</span>
        </div>
      </div>
    </div>
  );
};