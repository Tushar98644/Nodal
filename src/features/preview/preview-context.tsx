import { Smartphone, Monitor } from 'lucide-react';

export const PreviewContent = ({ html, device, setDevice }: any) => {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="w-full h-12 flex items-center justify-center gap-4 border-b border-slate-200/50 bg-white/30 backdrop-blur-sm shrink-0">
                <button onClick={() => setDevice('desktop')} className={`p-2 rounded-lg transition-all ${device === 'desktop' ? 'bg-white shadow-sm text-orange-500' : 'text-slate-400 hover:text-slate-600'}`}>
                    <Monitor size={18} />
                </button>
                <button onClick={() => setDevice('mobile')} className={`p-2 rounded-lg transition-all ${device === 'mobile' ? 'bg-white shadow-sm text-orange-500' : 'text-slate-400 hover:text-slate-600'}`}>
                    <Smartphone size={18} />
                </button>
            </div>

            <div className="flex-1 w-full p-4 overflow-auto flex justify-center bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[20px_20px]">
                <div className={`bg-white shadow-2xl transition-all duration-500 ease-in-out border border-slate-200 overflow-hidden shrink-0 ${device === 'desktop' ? 'w-full h-full rounded-xl' : 'w-[375px] h-[667px] rounded-[3rem] border-8 border-slate-900 my-auto shadow-xl'}`}>
                    <iframe title="Website Preview" srcDoc={html} className="w-full h-full border-none bg-white" sandbox="allow-scripts allow-same-origin" />
                </div>
            </div>
        </div>
    );
};