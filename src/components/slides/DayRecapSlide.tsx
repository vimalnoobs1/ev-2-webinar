import React from 'react';
import { HelpCircle, CheckCircle2, ChevronRight } from 'lucide-react';
import { SlideData } from '../../types';

interface SlideProps {
  slide: SlideData;
  currentStep: number;
  onStepForward?: () => void;
}

export const DayRecapSlide: React.FC<SlideProps> = ({ slide, currentStep, onStepForward }) => {
  const questions = slide.content.questions || [
    { q: 'CPU unmaiyila enna velai pannum?', a: 'Fetch → Decode → Execute vali instructions-ah nanoseconds speed-la sequential-ah execute pannum.' },
    { q: 'RAM-kum Storage-kum ulla mukkiya difference enna?', a: 'RAM: High-speed temporary table (power pona data azhiyum); Storage: Permanent cupboard (files eppovum safe).' },
    { q: 'Program-kum Process-kum ulla vithiyasam enna?', a: 'Program: Disk-la thoongura recipe file; Process: RAM-la PID kooda odura active task.' },
    { q: 'Apps direct-ah hardware kooda pesa mudiyuma?', a: 'Kandippa mudiyadhu! OS Kernel mattum thaan hardware access-ah isolate panni handle pannum.' }
  ];

  const totalQuestions = 4;

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-4xl mx-auto px-4 sm:px-6 py-4">
      {/* Header */}
      <div className="text-center mb-4 shrink-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-1.5 font-mono">
          <span>DAY 2 RECAP CHECKPOINT</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Day 1 Systems 4-Point Recap
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl mx-auto">
          OS ulla poraduku munnadi Day 1-la kathukitta 4 core adippadai concepts-ah quick-ah recap pannuvom
        </p>
      </div>

      {/* Interactive 2x2 Quiz Grid (Strict 4 Points) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        {questions.slice(0, 4).map((item: any, idx: number) => {
          const isRevealed = currentStep >= idx + 1;

          return (
            <div
              key={idx}
              id={`recap-question-card-${idx + 1}`}
              className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                isRevealed
                  ? 'bg-slate-900/90 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                  : 'bg-slate-950/60 border-slate-800'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded font-bold bg-slate-800 text-cyan-400">
                    Question 0{idx + 1}
                  </span>
                  {isRevealed ? (
                    <span className="text-[10px] flex items-center gap-1 text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Revealed
                    </span>
                  ) : (
                    <span className="text-[10px] text-slate-500 font-mono">
                      Click Step to Reveal
                    </span>
                  )}
                </div>

                <h4 className="text-xs sm:text-sm font-bold text-white mb-2 leading-snug">
                  {item.q}
                </h4>
              </div>

              {/* Reveal Box */}
              {isRevealed ? (
                <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-200 font-medium leading-relaxed animate-in fade-in duration-300 mt-2">
                  <strong>Answer:</strong> {item.a}
                </div>
              ) : (
                <div className="p-2.5 rounded-lg bg-slate-900/40 border border-dashed border-slate-800 text-[11px] text-slate-500 italic mt-2">
                  Waiting for presenter to reveal answer...
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Step Indicator */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-2 shrink-0">
        <span>Showing: {Math.min(currentStep, 4)} of 4 questions</span>
        {currentStep < 4 && onStepForward && (
          <button
            id="reveal-next-recap-answer-btn"
            onClick={onStepForward}
            className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
          >
            Reveal Next Answer <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
