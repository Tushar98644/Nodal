'use client'

import { useState } from 'react';
import {
    Eye,
    Code2,
    Palette,
    Download,
    Smartphone,
    Monitor,
    Maximize2,
    Check,
    Copy,
    FileJson,
    FileCode,
    FileType
} from 'lucide-react';
import { ColorSwatch, FileItem, FileTreeItem, TabButton } from '@/features';

const FILES = {
  'index.html': {
    lang: 'html',
    icon: <FileCode size={14} className="text-orange-400" />,
    content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Apex Talent Partners</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body class="bg-slate-50 font-sans">
    <nav class="navbar">
        <div class="logo">Apex.</div>
        <button class="btn-primary">Get Started</button>
    </nav>
    <main class="hero">
        <h1>Hiring the top 1% of Fintech talent.</h1>
        <p>We bridge the gap between legacy banking and modern tech.</p>
    </main>
</body>
</html>`
  },
  'styles.css': {
    lang: 'css',
    icon: <FileType size={14} className="text-blue-400" />,
    content: `.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
}

.btn-primary {
  background-color: #f97316; /* Orange-500 */
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
}`
  },
  'brand.json': {
    lang: 'json',
    icon: <FileJson size={14} className="text-yellow-400" />,
    content: `{
  "name": "Apex Talent Partners",
  "colors": {
    "primary": "#0f172a",
    "accent": "#f97316"
  },
  "fonts": ["Inter", "Roboto"]
}`
  }
};

type FileName = keyof typeof FILES;

const Workspace = () => {
    const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'brand'>('preview');
    const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
    const [isCopied, setIsCopied] = useState(false);
    const [selectedFile, setSelectedFile] = useState<FileName>('index.html');

    const handleCopy = () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className="relative w-full h-screen bg-[#FFFBF8] overflow-hidden flex flex-col p-4 md:p-6 font-sans text-slate-900">

            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FFDAC1] rounded-full mix-blend-multiply filter blur-3xl opacity-40 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FFCCB6] rounded-full mix-blend-multiply filter blur-3xl opacity-40 -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

            <div id="workspace" className="relative z-10 w-full h-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_40px_-15px_rgba(255,145,100,0.1)] border border-white/60 flex flex-col overflow-hidden mt-10">

                <header className="h-16 border-b border-slate-100 flex items-center justify-between px-6 shrink-0 bg-white/50">

                    <div id="tabs" className="flex items-center gap-1 bg-slate-100/50 p-1 rounded-xl">
                        <TabButton
                            active={activeTab === 'preview'}
                            onClick={() => setActiveTab('preview')}
                            icon={<Eye size={16} />}
                            label="Preview"
                        />
                        <TabButton
                            active={activeTab === 'code'}
                            onClick={() => setActiveTab('code')}
                            icon={<Code2 size={16} />}
                            label="Code"
                        />
                        <TabButton
                            active={activeTab === 'brand'}
                            onClick={() => setActiveTab('brand')}
                            icon={<Palette size={16} />}
                            label="Brand Kit"
                        />
                    </div>

                    <div id="actions" className="flex items-center gap-3">
                        <button className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
                            <Maximize2 size={16} />
                            <span>Full Screen</span>
                        </button>
                        <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-orange-500 shadow-lg shadow-orange-500/20 transition-all hover:scale-105 active:scale-95">
                            <Download size={16} />
                            <span>Export</span>
                        </button>
                    </div>
                </header>

                <div id="content" className="flex-1 overflow-hidden relative bg-slate-50/50">
                    {activeTab === 'preview' && (
                        <div className="w-full h-full flex flex-col items-center">
                            <div className="w-full h-12 flex items-center justify-center gap-4 border-b border-slate-200/50 bg-white/30 backdrop-blur-sm">
                                <button
                                    onClick={() => setDevice('desktop')}
                                    className={`p-2 rounded-lg transition-all ${device === 'desktop' ? 'bg-white shadow-sm text-orange-500' : 'text-slate-400 hover:text-slate-600'}`}
                                >
                                    <Monitor size={18} />
                                </button>
                                <button
                                    onClick={() => setDevice('mobile')}
                                    className={`p-2 rounded-lg transition-all ${device === 'mobile' ? 'bg-white shadow-sm text-orange-500' : 'text-slate-400 hover:text-slate-600'}`}
                                >
                                    <Smartphone size={18} />
                                </button>
                            </div>

                            <div id="iframe-container" className="flex-1 w-full p-4 overflow-auto flex justify-center bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[20px_20px]">
                                <div
                                    className={`bg-white shadow-2xl transition-all duration-500 ease-in-out border border-slate-200 overflow-hidden ${device === 'desktop' ? 'w-full h-full rounded-xl' : 'w-[375px] h-[667px] rounded-[3rem] border-8 border-slate-900 my-auto'
                                        }`}
                                >
                                    <div className="w-full h-full overflow-y-auto scrollbar-thin">
                                        <div className="w-full h-16 border-b flex items-center justify-between px-8">
                                            <span className="font-bold text-xl">Apex.</span>
                                            <div className="flex gap-4 text-sm font-medium text-slate-500">
                                                <span>About</span>
                                                <span>Services</span>
                                            </div>
                                        </div>
                                        <div className="py-24 text-center px-6">
                                            <h1 className="text-5xl font-bold mb-6 text-slate-900">Modern Recruitment.</h1>
                                            <p className="text-lg text-slate-500 max-w-lg mx-auto mb-8">Generated by Novus based on your inputs.</p>
                                            <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold">Contact Us</button>
                                        </div>
                                        <div className="h-96 bg-slate-50 m-8 rounded-2xl"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'code' && (
                        <div className="w-full h-full flex bg-[#1e1e1e] text-slate-300">
                            
                            <div id="file-explorer" className="w-48 md:w-60 border-r border-white/10 flex flex-col shrink-0">
                                <div className="h-10 flex items-center px-4 text-xs font-bold uppercase tracking-widest text-slate-500 border-b border-white/5">
                                    Explorer
                                </div>
                                <div className="p-2 space-y-0.5">
                                    <FileTreeItem
                                        name="index.html"
                                        fileData={FILES[selectedFile]}
                                        active={selectedFile === 'index.html'}
                                        onClick={() => setSelectedFile('index.html')}
                                    />
                                    <FileTreeItem
                                        name="styles.css"
                                        fileData={FILES[selectedFile]}
                                        active={selectedFile === 'styles.css'}
                                        onClick={() => setSelectedFile('styles.css')}
                                    />
                                    <FileTreeItem
                                        name="brand.json"
                                        fileData={FILES[selectedFile]}
                                        active={selectedFile === 'brand.json'}
                                        onClick={() => setSelectedFile('brand.json')}
                                    />
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col min-w-0">
                                <div className="h-10 flex items-center justify-between px-4 border-b border-white/10 bg-[#1e1e1e]">
                                    <span className="text-xs font-medium text-slate-400">{selectedFile}</span>
                                    <button onClick={handleCopy} className="text-xs hover:text-white transition-colors flex items-center gap-1">
                                        {isCopied ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
                                        {isCopied ? "Copied" : "Copy"}
                                    </button>
                                </div>
                                <div className="flex-1 overflow-auto p-4 scrollbar-thin scrollbar-thumb-white/10">
                                    <pre className="font-mono text-sm leading-relaxed">
                                        <code>{FILES[selectedFile].content}</code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'brand' && (
                        <div className="w-full h-full p-8 overflow-y-auto">
                            <h2 className="text-2xl font-bold mb-6">Generated Assets</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Color Palette</h3>
                                    <div className="flex gap-4">
                                        <ColorSwatch color="#0f172a" label="Primary" />
                                        <ColorSwatch color="#f97316" label="Accent" />
                                        <ColorSwatch color="#f1f5f9" label="Neutral" />
                                    </div>
                                </div>

                                <div id="logos" className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Logo Files</h3>
                                    <div className="space-y-3">
                                        <FileItem name="logo-full.svg" size="12kb" />
                                        <FileItem name="logo-icon.png" size="45kb" />
                                        <FileItem name="social-banner.jpg" size="1.2mb" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Workspace;