import { 
  Users, 
  UserPlus, 
  CheckCircle2, 
  Rocket,
  MousePointer2,
  ArrowRight,
  TrendingDown
} from 'lucide-react';

const funnelData = [
  { name: 'Village Gate', value: 45000, dropoff: '0%', label: 'Baseline' },
  { name: 'Interest Shown', value: 12500, dropoff: '72.2%', label: '27.8% Conv.' },
  { name: 'Trust Verified', value: 9800, dropoff: '21.6%', label: '78.4% Conv.' },
  { name: 'Ubuntu Onboarding', value: 7200, dropoff: '26.5%', label: '73.5% Conv.' },
  { name: 'Active Participation', value: 5400, dropoff: '25.0%', label: '75.0% Conv.' },
];

export default function Funnels() {
  const maxValue = funnelData[0].value;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in-95 duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-foreground">
        <div>
          <h1 className="text-4xl font-black font-serif tracking-tight italic text-foreground">Initiation <span className="text-primary not-italic">Pathways</span></h1>
          <p className="text-muted-foreground max-w-lg mt-2">Observing the sacred journey from curious visitor to active collective contributor.</p>
        </div>
        <div className="bg-primary/5 dark:bg-primary/10 px-8 py-4 rounded-[30px] border border-primary/10 flex items-center gap-4">
           <Rocket className="text-primary" size={24} />
           <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Overall Unity Rate</span>
              <span className="text-xl font-black text-primary">12.0%</span>
           </div>
        </div>
      </div>

      <div className="bg-white dark:bg-card p-12 rounded-[48px] border border-border/50 shadow-sm relative group overflow-hidden">
        <div className="pattern-dots absolute inset-0 opacity-[0.02] pointer-events-none" />
        <div className="relative z-10 space-y-8">
          {funnelData.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                <div className="w-64 shrink-0">
                  <h4 className="text-lg font-black text-foreground">{step.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Users size={14} className="text-muted-foreground" />
                    <p className="text-xs font-bold text-muted-foreground tracking-tight">{step.value.toLocaleString()} Hearts</p>
                  </div>
                </div>
                
                <div className="flex-1 h-16 bg-secondary/30 dark:bg-secondary/10 rounded-[24px] relative group overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-[24px] transition-all duration-1000 ease-out flex items-center justify-end px-6 shadow-inner"
                    style={{ width: `${(step.value / maxValue) * 100}%` }}
                  >
                    <span className="text-primary-foreground text-xs font-black uppercase tracking-widest whitespace-nowrap opacity-90">
                      {step.label}
                    </span>
                  </div>
                </div>
                
                <div className="w-32 flex flex-col lg:items-end justify-center">
                  <span className={`text-sm font-black ${idx === 0 ? 'text-muted-foreground/30' : 'text-accent'}`}>
                    {step.dropoff !== '0%' ? `-${step.dropoff}` : '---'}
                  </span>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none mt-1">Echo Loss</p>
                </div>
              </div>
              
              {idx < funnelData.length - 1 && (
                <div className="lg:ml-[280px] my-4 flex justify-center lg:justify-start">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary/30 to-transparent rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <div className="bg-white dark:bg-card p-10 rounded-[40px] border border-border/50 shadow-sm relative group overflow-hidden">
          <div className="pattern-dots absolute inset-0 opacity-[0.02] pointer-events-none" />
          <h4 className="font-black text-xl text-foreground mb-8 flex items-center gap-4">
            <TrendingDown size={28} className="text-accent" />
            Greatest Disconnect
          </h4>
          <div className="p-8 bg-accent/5 rounded-[30px] border border-accent/10 relative">
            <p className="text-lg font-black text-accent mb-2">Gate → Interest Shown</p>
            <p className="text-sm font-medium text-muted-foreground leading-relaxed">72.2% of visitors are turning back at the village gate. Our greeting message may be too complex. Simplify the introductory circle invitations.</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-card p-10 rounded-[40px] border border-border/50 shadow-sm relative group overflow-hidden">
          <div className="pattern-dots absolute inset-0 opacity-[0.02] pointer-events-none" />
          <h4 className="font-black text-xl text-foreground mb-8 flex items-center gap-4">
            <CheckCircle2 size={28} className="text-emerald-500" />
            Strongest Resonance
          </h4>
          <div className="p-8 bg-emerald-500/5 rounded-[30px] border border-emerald-500/10 relative">
            <p className="text-lg font-black text-emerald-600 mb-2">Onboarding → Active Flow</p>
            <p className="text-sm font-medium text-muted-foreground leading-relaxed">Once initiated, 75% of nodes become active participants. The automated village greeting system is resonating deeply with new members.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
