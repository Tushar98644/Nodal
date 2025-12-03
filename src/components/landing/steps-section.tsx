import { steps } from '@/constants';

export const StepsSection = () => {
  return (
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
  );
};
