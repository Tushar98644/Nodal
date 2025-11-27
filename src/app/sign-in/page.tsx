'use client'

import { Github, Command, ArrowRight } from 'lucide-react';

const SigninPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#FFFBF8] flex items-center justify-center p-4 font-sans text-slate-900 selection:bg-orange-100 relative overflow-hidden">

      <div id="bg-blobs" className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFDAC1] rounded-full mix-blend-multiply blur-[80px] opacity-40 animate-pulse -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFCCB6] rounded-full mix-blend-multiply blur-[80px] opacity-40 -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative z-10 w-full max-w-4xl bg-white/70 backdrop-blur-2xl rounded-3xl border border-white/80 shadow-2xl shadow-orange-500/10 overflow-hidden flex flex-col md:flex-row min-h-[500px]">

        {/* Brand Panel */}
        <div className="w-full md:w-[45%] bg-linear-to-br from-orange-400 to-red-400 relative p-8 md:p-10 text-white flex flex-col justify-between overflow-hidden">

          <div id="bg-elements" className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] rounded-full bg-white blur-[60px]"></div>
            <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] rounded-full bg-yellow-300 blur-[60px] mix-blend-overlay"></div>
          </div>

          <div id="logo" className="relative z-10 flex items-center gap-2 mb-8 opacity-95">
            <div className="w-7 h-7 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center text-white text-xs font-bold border border-white/30">N</div>
            <span className="font-bold text-lg tracking-tight">Nodal</span>
          </div>

          <div id="welcome" className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-3">Welcome back.</h2>
            <p className="text-orange-50 text-sm md:text-base opacity-90 leading-relaxed">
              Sign in to manage your agency assets, download updates, or create a new brand identity.
            </p>
          </div>

          {/* Mini Testimonial */}
          <div className="relative z-10 mt-8 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
            <div className="flex gap-0.5 mb-2">
              {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-3 h-3 text-yellow-300 fill-current">★</div>)}
            </div>
            <p className="text-sm font-medium leading-relaxed mb-3 opacity-95">"The fastest way to launch a recruiting business. Period."</p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20"></div>
              <div>
                <p className="text-xs font-bold">Alex Rivera</p>
                <p className="text-[10px] text-orange-200 uppercase tracking-wider font-bold">Founder, HireFlow</p>
              </div>
            </div>
          </div>
        </div>

        {/* Login Actions */}
        <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center bg-white/40">

          <div className="max-w-sm mx-auto w-full">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-slate-900 mb-1.5">Log in to Nodal</h1>
              <p className="text-sm text-slate-500">Choose a provider to continue.</p>
            </div>

            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-slate-900 text-white border border-slate-900 rounded-xl hover:bg-slate-800 hover:scale-[1.01] active:scale-[0.99] transition-all text-sm font-bold shadow-md shadow-slate-900/10 group">
                <Github size={18} className="text-white group-hover:text-white" />
                <span>Continue with GitHub</span>
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300" />
              </button>

              <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 hover:scale-[1.01] active:scale-[0.99] transition-all text-sm font-bold shadow-sm group">
                <div className="relative flex items-center justify-center w-5 h-5">
                  <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="Google Logo" />
                </div>
                <span>Continue with Google</span>
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300" />
              </button>
            </div>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
              <div className="relative flex justify-center text-xs"><span className="px-2 bg-[#fffcf9] text-slate-400">Secure Authentication</span></div>
            </div>

            <p className="text-center text-xs text-slate-400 leading-relaxed">
              By clicking continue, you agree to our <a href="#" className="text-slate-600 hover:underline">Terms of Service</a> and <a href="#" className="text-slate-600 hover:underline">Privacy Policy</a>.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SigninPage;