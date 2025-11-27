export const TabButton = ({ active, onClick, icon, label }: any) => (
    <button
        onClick={onClick}
        className={`
      flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200
      ${active
                ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-200'
                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
            }
    `}
    >
        {icon}
        <span>{label}</span>
    </button>
);