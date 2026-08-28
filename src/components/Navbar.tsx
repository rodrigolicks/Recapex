import React from 'react';
import { Disc, LayoutDashboard, PlusCircle, FileText, CheckCircle2, Shield } from 'lucide-react';

interface NavbarProps {
  currentView: 'form' | 'list';
  onSelectView: (view: 'form' | 'list') => void;
  onNewSurvey: () => void;
  onOpenReport: () => void;
  canViewReport: boolean;
  savedCount: number;
  isDraftSaved: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onSelectView,
  onNewSurvey,
  onOpenReport,
  canViewReport,
  savedCount,
  isDraftSaved
}) => {
  return (
    <header className="bg-slate-950/90 backdrop-blur border-b border-slate-800 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onSelectView('list')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 p-0.5 shadow-lg shadow-amber-500/20 shrink-0 flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-amber-400">
              <Disc className="w-6 h-6 animate-[spin_10s_linear_infinite]" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-slate-100 text-lg sm:text-xl tracking-tight">
                Recap<span className="text-amber-400">Data</span>
              </span>
              <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Recapadora Pro
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Coleta Técnica & Diagnóstico Comercial de Frotas
            </p>
          </div>
        </div>

        {/* View Switcher & Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Draft indicator */}
          {currentView === 'form' && isDraftSaved && (
            <div className="hidden md:flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/50 px-2.5 py-1 rounded-full border border-emerald-800/60">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Salvo automaticamente</span>
            </div>
          )}

          {/* Form vs List Toggle */}
          <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button
              id="nav-btn-form"
              onClick={() => onSelectView('form')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                currentView === 'form'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <PlusCircle className="w-4 h-4" />
              <span>Formulário</span>
            </button>

            <button
              id="nav-btn-list"
              onClick={() => onSelectView('list')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                currentView === 'list'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Histórico ({savedCount})</span>
            </button>
          </div>

          {/* Quick Preview Report Button */}
          {currentView === 'form' && (
            <button
              onClick={onOpenReport}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              title="Visualizar laudo técnico atual"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span className="hidden sm:inline">Ver Laudo</span>
            </button>
          )}

          {currentView === 'list' && (
            <button
              onClick={onNewSurvey}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-md transition-colors"
            >
              <PlusCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Nova Coleta</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
