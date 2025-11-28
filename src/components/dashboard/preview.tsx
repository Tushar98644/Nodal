'use client'

import { useState } from 'react';
import { usePreviewFiles } from '@/hooks/use-preview-files';
import { BrandSchema } from '@/lib/schema';
import { PreviewHeader, PreviewContent, CodeEditor, BrandAssets } from '@/features';

export const Preview = ({ object }: { object: BrandSchema }) => {
    const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'brand'>('preview');
    const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [selectedFile, setSelectedFile] = useState<string>('index.html');

    const files = usePreviewFiles(object);

    return (
        <div className={`transition-all duration-300 ease-in-out font-sans text-slate-900 bg-[#FFFBF8] ${isFullScreen ? 'fixed inset-0 z-50 p-0' : 'w-full h-full flex flex-col p-4'}`}>
            {!isFullScreen && (
                <>
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FFDAC1] rounded-full mix-blend-multiply filter blur-3xl opacity-40 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FFCCB6] rounded-full mix-blend-multiply filter blur-3xl opacity-40 -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
                </>
            )}

            <div className={`relative z-10 w-full h-full bg-white/80 backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(255,145,100,0.1)] border border-white/60 flex flex-col overflow-hidden ${isFullScreen ? 'rounded-none border-none' : 'rounded-3xl'}`}>
                
                <PreviewHeader 
                    activeTab={activeTab} 
                    setActiveTab={setActiveTab} 
                    isFullScreen={isFullScreen} 
                    setIsFullScreen={setIsFullScreen} 
                    files={files}
                    companyName={object?.companyName}
                />

                <div className="flex-1 overflow-hidden relative bg-slate-50/50">
                    {activeTab === 'preview' && (
                        <PreviewContent 
                            html={files['index.html'].content} 
                            device={device} 
                            setDevice={setDevice} 
                        />
                    )}

                    {activeTab === 'code' && (
                        <CodeEditor 
                            files={files} 
                            selectedFile={selectedFile} 
                            setSelectedFile={setSelectedFile} 
                        />
                    )}

                    {activeTab === 'brand' && (
                        <BrandAssets object={object} />
                    )}
                </div>
            </div>
        </div>
    );
};