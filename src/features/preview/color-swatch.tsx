export const ColorSwatch = ({ color, label }: any) => (
    <div className="flex flex-col gap-2">
        <div className="w-20 h-20 rounded-xl shadow-inner border border-black/5" style={{ backgroundColor: color }}></div>
        <div>
            <p className="text-xs font-bold text-slate-900">{label}</p>
            <p className="text-[10px] text-slate-400 font-mono">{color}</p>
        </div>
    </div>
);