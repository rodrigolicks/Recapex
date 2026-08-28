import React from 'react';
import { Check, Building2, Truck, Disc, Repeat, Fuel, Target } from 'lucide-react';

interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
  onSelectStep: (step: number) => void;
}

export const STEPS_CONFIG = [
  { step: 1, title: 'Transportadora', subtitle: 'Identificação e Contato', icon: Building2 },
  { step: 2, title: 'Perfil da Frota', subtitle: 'Veículos e Operação', icon: Truck },
  { step: 3, title: 'Gestão de Pneus', subtitle: 'Pressão e Uso Diário', icon: Disc },
  { step: 4, title: 'Reforma & Mercado', subtitle: 'Banda, Preço e Conceito', icon: Repeat },
  { step: 5, title: 'Combustível', subtitle: 'Controle e Rendimento', icon: Fuel },
  { step: 6, title: 'Estratégia Comercial', subtitle: 'Fechamento e Proposta', icon: Target },
];

export const StepProgress: React.FC<StepProgressProps> = ({ currentStep, onSelectStep }) => {
  return (
    <div className="w-full bg-slate-900/90 backdrop-blur border border-slate-800 rounded-2xl p-4 shadow-xl mb-6">
      <div className="flex items-center justify-between overflow-x-auto gap-2 pb-1 scrollbar-thin">
        {STEPS_CONFIG.map((item) => {
          const isCompleted = currentStep > item.step;
          const isCurrent = currentStep === item.step;
          const Icon = item.icon;

          return (
            <button
              key={item.step}
              id={`step-tab-${item.step}`}
              onClick={() => onSelectStep(item.step)}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all text-left whitespace-nowrap min-w-[170px] flex-1 ${
                isCurrent
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-lg shadow-amber-500/20'
                  : isCompleted
                  ? 'bg-slate-800/80 text-emerald-400 hover:bg-slate-800 border border-emerald-900/40'
                  : 'bg-slate-950/40 text-slate-400 hover:bg-slate-800/60 border border-slate-800/50'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                  isCurrent
                    ? 'bg-slate-950 text-amber-400'
                    : isCompleted
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                {isCompleted ? <Check className="w-4 h-4 text-emerald-400" /> : <Icon className="w-4 h-4" />}
              </div>

              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs uppercase tracking-wider font-mono opacity-70">
                    Etapa {item.step}
                  </span>
                </div>
                <span className={`text-xs sm:text-sm font-medium truncate ${isCurrent ? 'text-slate-950 font-bold' : 'text-slate-200'}`}>
                  {item.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Progress Bar */}
      <div className="mt-3 w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
        <div
          className="bg-gradient-to-r from-amber-500 to-amber-300 h-full rounded-full transition-all duration-300 ease-out"
          style={{ width: `${(currentStep / STEPS_CONFIG.length) * 100}%` }}
        />
      </div>
    </div>
  );
};
