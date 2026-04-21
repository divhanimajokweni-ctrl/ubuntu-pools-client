import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  TrendingUp,
  Filter,
  UsersRound,
  LayoutGrid,
  ArrowRight
} from 'lucide-react';

const cohorts = [
  { month: 'Jan 2024', size: 1250, rates: [100, 78, 62, 54, 48, 42, 38] },
  { month: 'Feb 2024', size: 1180, rates: [100, 72, 58, 49, 41, 36] },
  { month: 'Mar 2024', size: 1340, rates: [100, 81, 65, 52, 45] },
  { month: 'Apr 2024', size: 1420, rates: [100, 85, 68, 59] },
  { month: 'May 2024', size: 1560, rates: [100, 79, 61] },
  { month: 'Jun 2024', size: 1680, rates: [100, 83] },
  { month: 'Jul 2024', size: 1720, rates: [100] },
];

function getBgColor(rate: number) {
  if (rate >= 90) return 'bg-primary text-primary-foreground font-black';
  if (rate >= 70) return 'bg-primary/80 text-primary-foreground';
  if (rate >= 50) return 'bg-primary/60 text-white';
  if (rate >= 30) return 'bg-primary/40 text-foreground';
  if (rate >= 10) return 'bg-primary/20 text-foreground';
  return 'bg-secondary/50 text-muted-foreground';
}

export default function Cohorts() {
  const [isJoining, setIsJoining] = useState(false);
  const [selectedCohort, setSelectedCohort] = useState<string | null>(null);

  return (
    <div className="space-y-12 animate-in slide-in-from-right-8 duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-foreground">
        <div>
          <h1 className="text-4xl font-black font-serif tracking-tight italic">Initiation <span className="text-primary not-italic">Cohorts</span></h1>
          <p className="text-muted-foreground max-w-lg mt-2">Align your node with a community ritual moon. Organized by the sacred cycle of initiation.</p>
        </div>
      </div>

      <div className="bg-primary/5 dark:bg-primary/10 p-10 rounded-[48px] border border-primary/10 relative overflow-hidden group">
        <div className="organic-shape w-64 h-64 bg-accent/20 absolute -right-20 -top-20 blur-3xl opacity-50 group-hover:scale-110 transition-transform duration-1000" />
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-3 bg-primary/20 text-primary px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-primary/10">
                Next Ritual Moon
              </div>
              <h3 className="text-3xl font-black font-serif italic">Join the Aug 2024 <span className="text-primary not-italic">Circle</span></h3>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed italic">
                {selectedCohort 
                  ? `You are about to align with the ${selectedCohort} node. This seals your commitment to the collective strategy.`
                  : 'Align your node with the upcoming cycle. Direct participation in the next harvest session begins in 12 days.'}
              </p>
            </div>
            <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
              {!selectedCohort ? (
                <button 
                  onClick={() => setSelectedCohort('Gqeberha Hub')}
                  className="px-10 py-6 bg-white dark:bg-card border border-border/50 text-foreground rounded-[24px] text-sm font-black shadow-xl hover:border-primary transition-all uppercase tracking-widest"
                >
                  Select Gqeberha Hub
                </button>
              ) : (
                <button 
                  disabled={isJoining}
                  onClick={() => {
                    setIsJoining(true);
                    setTimeout(() => setIsJoining(false), 2000);
                  }}
                  className="px-12 py-8 bg-primary text-primary-foreground rounded-[32px] text-lg font-black shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 uppercase tracking-[0.2em]"
                >
                  {isJoining ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sealing...</span>
                    </div>
                  ) : (
                    <>
                      Seal Commitment
                      <ArrowRight size={24} />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-card p-8 rounded-[32px] border border-border/50 shadow-sm relative group overflow-hidden">
          <div className="pattern-dots absolute inset-0 opacity-[0.02] pointer-events-none" />
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:rotate-6 transition-transform">
              <UsersRound size={22} />
            </div>
            <h4 className="text-sm font-black text-muted-foreground uppercase tracking-widest leading-none">Avg. Persistence</h4>
          </div>
          <p className="text-4xl font-black text-foreground relative z-10">42.8%</p>
          <p className="text-xs text-primary font-bold mt-2 relative z-10">↑ 2.4% vs last moon</p>
        </div>

        <div className="bg-white dark:bg-card p-8 rounded-[32px] border border-border/50 shadow-sm relative group overflow-hidden">
          <div className="pattern-dots absolute inset-0 opacity-[0.02] pointer-events-none" />
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center group-hover:rotate-6 transition-transform">
              <TrendingUp size={22} />
            </div>
            <h4 className="text-sm font-black text-muted-foreground uppercase tracking-widest leading-none">Node Stability</h4>
          </div>
          <p className="text-4xl font-black text-foreground relative z-10">87.5%</p>
          <p className="text-xs text-accent font-bold mt-2 relative z-10">↑ 0.8% vs last moon</p>
        </div>

        <div className="bg-white dark:bg-card p-8 rounded-[32px] border border-border/50 shadow-sm relative group overflow-hidden">
          <div className="pattern-dots absolute inset-0 opacity-[0.02] pointer-events-none" />
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center group-hover:rotate-6 transition-transform">
              <LayoutGrid size={22} />
            </div>
            <h4 className="text-sm font-black text-muted-foreground uppercase tracking-widest leading-none">Harvest Yield</h4>
          </div>
          <p className="text-4xl font-black text-foreground relative z-10">R2,450</p>
          <p className="text-xs text-primary font-bold mt-2 relative z-10 italic font-serif">Community Average</p>
        </div>
      </div>

      <div className="bg-white dark:bg-card rounded-[40px] border border-border/50 overflow-hidden shadow-sm relative">
        <div className="pattern-dots absolute inset-0 opacity-[0.01] pointer-events-none" />
        <div className="p-10 border-b border-border/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
          <h3 className="font-bold text-2xl text-foreground">Initiation Matrix</h3>
          <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] bg-secondary px-4 py-2 rounded-full">Retention Percentage</span>
        </div>
        <div className="overflow-x-auto relative z-10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-secondary/30 dark:bg-secondary/10">
                <th className="p-6 text-xs font-black text-muted-foreground border-r border-border/50 w-48 uppercase tracking-widest">Cohort Initiation</th>
                <th className="p-6 text-xs font-black text-muted-foreground border-r border-border/50 w-32 uppercase tracking-widest">Population</th>
                {[...Array(7)].map((_, i) => (
                  <th key={i} className="p-6 text-xs font-black text-muted-foreground uppercase tracking-widest min-w-[100px] text-center italic font-serif">Moon {i}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cohorts.map((cohort, idx) => (
                <tr key={idx} className="border-t border-border/50 hover:bg-secondary/5 transition-colors">
                  <td className="p-6 text-sm font-bold text-foreground border-r border-border/50 whitespace-nowrap">{cohort.month}</td>
                  <td className="p-6 text-sm text-muted-foreground border-r border-border/50 font-black tracking-tight">{cohort.size.toLocaleString()}</td>
                  {cohort.rates.map((rate, rIdx) => (
                    <td key={rIdx} className="p-0 border-r border-border/50 last:border-r-0">
                      <div className={`h-full p-6 text-sm text-center transition-all hover:scale-[1.02] hover:shadow-inner ${getBgColor(rate)}`}>
                        {rate}%
                      </div>
                    </td>
                  ))}
                  {[...Array(7 - cohort.rates.length)].map((_, i) => (
                    <td key={i} className="p-6 border-r border-border/50 last:border-r-0 bg-secondary/20"></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
