import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { FileTreeItem } from '@/features';

export const CodeEditor = ({ files, selectedFile, setSelectedFile }: any) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(files[selectedFile].content);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className="w-full h-full flex bg-[#1e1e1e] text-slate-300 overflow-hidden">
            <div className="w-48 md:w-60 border-r border-white/10 flex flex-col shrink-0">
                <div className="h-10 flex items-center px-4 text-xs font-bold uppercase tracking-widest text-slate-500 border-b border-white/5 shrink-0">Explorer</div>
                <div className="p-2 space-y-0.5 overflow-y-auto">
                    {Object.entries(files).map(([name, fileData]: any) => (
                        <FileTreeItem key={name} name={name} fileData={fileData} active={selectedFile === name} onClick={() => setSelectedFile(name)} />
                    ))}
                </div>
            </div>

            <div className="flex-1 flex h-full flex-col min-w-0 overflow-hidden">
                <div className="h-10 flex items-center justify-between px-4 border-b border-white/10 bg-[#1e1e1e] shrink-0">
                    <span className="text-xs font-medium text-slate-400">{selectedFile}</span>
                    <button onClick={handleCopy} className="text-xs hover:text-white transition-colors flex items-center gap-1">
                        {isCopied ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
                        {isCopied ? "Copied" : "Copy"}
                    </button>
                </div>
                <div className="flex-1 overflow-auto p-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                    <pre className="font-mono text-sm leading-relaxed whitespace-pre-wrap break-all">
                        <code>{files[selectedFile]?.content}</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};