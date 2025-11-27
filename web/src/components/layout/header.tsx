'use client'

import { HelpCircle } from 'lucide-react';

const Header = () => {

    const openHelpModal = () => {
        console.log("modal clicked");
    }

    return (
        <header className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-50 pointer-events-none">
            <div className="flex items-center gap-3 pointer-events-auto cursor-pointer">
                <div className="w-8 h-8 bg-orange-500 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-orange-500/20">
                    N
                </div>
                <span className="font-bold text-xl tracking-tight text-slate-900">
                    Nodal
                </span>
            </div>

            <button 
                onClick={openHelpModal}
                className="pointer-events-auto group flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-white/60 hover:shadow-sm border border-transparent hover:border-orange-100 transition-all duration-300"
            >
                <span>Help</span>
                <HelpCircle size={16} className="text-slate-400 group-hover:text-orange-500 transition-colors" />
            </button>
            
        </header>
    );
}

export default Header;