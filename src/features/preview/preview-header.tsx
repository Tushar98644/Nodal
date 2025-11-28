import { Eye, Code2, Palette, Download, Maximize2, Minimize2 } from 'lucide-react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { TabButton } from '@/features';

export const PreviewHeader = ({ activeTab, setActiveTab, isFullScreen, setIsFullScreen, files, companyName }: any) => {

    const handleExport = async () => {
        const zip = new JSZip();
        Object.entries(files).forEach(([name, file]: any) => {
            zip.file(name, file.content);
        });
        const content = await zip.generateAsync({ type: "blob" });
        saveAs(content, `${companyName?.replace(/\s+/g, '_') || 'Novus'}_Agency_Pack.zip`);
    };

    return (
        <header className="h-16 border-b border-slate-100 flex items-center justify-between px-6 shrink-0 bg-white/50">
            <div className="flex items-center gap-1 bg-slate-100/50 p-1 rounded-xl">
                <TabButton active={activeTab === 'preview'} onClick={() => setActiveTab('preview')} icon={<Eye size={16} />} label="Preview" />
                <TabButton active={activeTab === 'code'} onClick={() => setActiveTab('code')} icon={<Code2 size={16} />} label="Code" />
                <TabButton active={activeTab === 'brand'} onClick={() => setActiveTab('brand')} icon={<Palette size={16} />} label="Brand Kit" />
            </div>

            <div className="flex items-center gap-3">
                <button onClick={() => setIsFullScreen(!isFullScreen)} className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
                    {isFullScreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                    <span>{isFullScreen ? 'Exit Full Screen' : 'Full Screen'}</span>
                </button>
                <button onClick={handleExport} className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-orange-500 shadow-lg shadow-orange-500/20 transition-all hover:scale-105 active:scale-95">
                    <Download size={16} />
                    <span>Export</span>
                </button>
            </div>
        </header>
    );
};