import { Code2 } from "lucide-react";

export const FileTreeItem = ({ name, fileData, active, onClick }: any) => (
    <button 
        onClick={onClick}
        className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${active ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'}`}
    >
        {fileData.icon}
        <span className="truncate">{name}</span>
    </button>
);

export const FileItem = ({ name, size }: any) => (
    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100 group cursor-pointer hover:border-orange-200 hover:bg-orange-50/50 transition-colors">
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center border border-slate-200 text-orange-500">
                <Code2 size={14} />
            </div>
            <span className="text-sm font-medium text-slate-700">{name}</span>
        </div>
        <span className="text-xs text-slate-400 group-hover:text-orange-400">{size}</span>
    </div>
)
