import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { InfoFormProps } from '@/types';

export const InfoForm = ({ onComplete }: InfoFormProps) => {
    const [step, setStep] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [formData, setFormData] = useState<{ [key: string]: string }>({
        name: '',
        industry: '',
        vibe: '',
        inspiration: ''
    });

    const questions = [
        {
            key: 'name',
            label: "Let's start with the basics.",
            sub: "What is the name of your new recruitment agency?",
            placeholder: "e.g. Apex Talent Partners"
        },
        {
            key: 'industry',
            label: "Find your niche.",
            sub: "What industry will you focus on?",
            placeholder: "e.g. Fintech, Healthcare, Creative..."
        },
        {
            key: 'vibe',
            label: "Set the tone.",
            sub: "Describe your brand style in a few words.",
            placeholder: "e.g. Minimalist, Bold, Trustworthy"
        },
        {
            key: 'inspiration',
            label: "Visual direction.",
            sub: "Paste a link to a website design you admire.",
            placeholder: "https://..."
        }
    ];

    const handleNext = () => {
        if (!formData[questions[step].key]) return;

        setIsAnimating(true);
        setTimeout(() => {
            if (step < questions.length - 1) {
                setStep(step + 1);
            } else {
                onComplete(formData);
            }
            setIsAnimating(false);
        }, 300);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [questions[step].key]: e.target.value });
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleNext();
    };

    const progress = ((step + 1) / questions.length) * 100;

    return (
        <div className="relative min-h-full w-full bg-[#FFFBF8] overflow-hidden flex items-center justify-center font-sans text-slate-900 selection:bg-orange-100">

            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFDAC1] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFCCB6] rounded-full mix-blend-multiply filter blur-3xl opacity-40 -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

            <div id="form" className="relative z-10 w-full max-w-lg px-4">
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_40px_-15px_rgba(255,145,100,0.1)] border border-white/60 p-8 md:p-10 overflow-hidden">

                    <div id="progress-bar" className="absolute top-0 left-0 w-full h-1 bg-orange-50/50">
                        <div
                            className="h-full bg-linear-to-r from-orange-400 to-red-400 transition-all duration-500 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <div className={`transition-all duration-300 ease-in-out transform ${isAnimating ? '-translate-x-4 opacity-0' : 'translate-x-0 opacity-100'}`}>

                        <div className="mb-4">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500">
                                Step {step + 1} / {questions.length}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900 tracking-tight leading-tight">
                            {questions[step].label}
                        </h1>
                        <p className="text-base text-slate-500 mb-8 font-medium">
                            {questions[step].sub}
                        </p>

                        <div className="relative group">
                            <input
                                key={step} 
                                type="text"
                                autoFocus
                                value={formData[questions[step].key]}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                                placeholder={questions[step].placeholder}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-lg text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-orange-400 focus:bg-white transition-all shadow-sm"
                            />

                            <button
                                onClick={handleNext}
                                className={`absolute right-2 top-2 bottom-2 aspect-square rounded-lg flex items-center justify-center transition-all duration-300 ${
                                    formData[questions[step].key]
                                    ? 'bg-slate-900 text-white hover:bg-orange-500 shadow-md cursor-pointer transform hover:scale-105'
                                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                }`}
                            >
                                {step === questions.length - 1 ? <Sparkles size={18} /> : <ArrowRight size={18} />}
                            </button>
                        </div>

                        <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-400 font-medium opacity-60">
                            <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-500 border border-slate-200">Enter ↵</span>
                            <span>to continue</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};