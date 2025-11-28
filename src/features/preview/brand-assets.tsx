import { ColorSwatch } from '@/features';

export const BrandAssets = ({ object }: any) => {
    return (
        <div className="w-full h-full p-8 overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6">Generated Assets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Color Palette</h3>
                    <div className="flex flex-wrap gap-4">
                        {object?.colors ? (
                            Object.entries(object.colors).map(([key, value]: any) => (
                                <ColorSwatch key={key} color={value} label={key} />
                            ))
                        ) : <p className="text-slate-400 text-sm italic">Loading colors...</p>}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Logo Preview</h3>
                    <div className="w-full h-40 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100 overflow-hidden p-4">
                        {object?.logoSvg ? (
                            <div className="w-full h-full flex items-center justify-center" dangerouslySetInnerHTML={{ __html: object.logoSvg }} />
                        ) : <span className="text-slate-400 text-sm">Generating logo...</span>}
                    </div>
                </div>
            </div>
        </div>
    );
};