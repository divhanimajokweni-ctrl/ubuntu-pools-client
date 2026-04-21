import { 
  Zap, 
  ArrowUp, 
  ArrowDown, 
  Plus,
  BarChart2,
  Users,
  ShieldCheck,
  Globe
} from 'lucide-react';

const featureUsage = [
  { name: 'Governance Voting', adoption: 84, growth: '+12%', status: 'Healthy', active: '12.4k' },
  { name: 'Pool Creation', adoption: 62, growth: '+8%', status: 'Healthy', active: '8.2k' },
  { name: 'Direct Referrals', adoption: 45, growth: '-2%', status: 'Warning', active: '5.1k' },
  { name: 'Yield Optimization', adoption: 38, growth: '+24%', status: 'Healthy', active: '4.8k' },
  { name: 'Mobile Node App', adoption: 15, growth: '+150%', status: 'New', active: '1.2k' },
  { name: 'Stitch EFT Gateway', adoption: 28, growth: '+45%', status: 'Emerging', active: '3.4k' },
];

function FeatureRow({ feature }: any) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Healthy': return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20';
      case 'Warning': return 'bg-amber-500/10 text-amber-600 border-amber-500/20';
      case 'New': return 'bg-primary/10 text-primary border-primary/20';
      case 'Emerging': return 'bg-accent/10 text-accent border-accent/20';
      default: return 'bg-secondary text-muted-foreground border-border/50';
    }
  };

  return (
    <div className="flex items-center gap-8 p-6 rounded-[24px] hover:bg-secondary/30 transition-all group border border-transparent hover:border-border/50">
      <div className="w-16 h-16 rounded-2xl bg-secondary dark:bg-card text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:shadow-primary/20">
        <Zap size={28} />
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className="text-lg font-black text-foreground truncate tracking-tight">{feature.name}</h4>
        <div className="flex items-center gap-6 mt-2">
          <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
            <Users size={14} className="text-primary" />
            <span>{feature.active} Hearts</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-black text-muted-foreground uppercase tracking-widest">
            <BarChart2 size={14} className="text-accent" />
            <span>{feature.adoption}% Resonance</span>
          </div>
        </div>
      </div>
      
      <div className="w-48 hidden lg:block px-6">
        <div className="h-2.5 w-full bg-secondary dark:bg-card rounded-full overflow-hidden border border-border/50">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" 
            style={{ width: `${feature.adoption}%` }}
          />
        </div>
      </div>
      
      <div className="w-24 text-right">
        <div className={`flex items-center justify-end gap-1 text-sm font-black font-serif ${feature.growth.startsWith('+') ? 'text-primary' : 'text-accent'}`}>
          {feature.growth.startsWith('+') ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
          {feature.growth}
        </div>
      </div>
      
      <div className="w-32 text-right shrink-0">
        <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border ${getStatusColor(feature.status)}`}>
          {feature.status}
        </span>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-top-8 duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-foreground">
        <div>
          <h1 className="text-4xl font-black font-serif tracking-tight italic">Node <span className="text-primary not-italic">Abilities</span></h1>
          <p className="text-muted-foreground max-w-lg mt-2">Nurturing and observing the adoption of indigenous platform capabilities across our network.</p>
        </div>
        <div className="flex gap-4">
           <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-black shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center gap-3">
             <Plus size={20} />
             <span>Ignite New Ability</span>
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-[40px] border border-primary/10 flex items-center gap-6 group hover:bg-primary/10 transition-all">
            <div className="w-16 h-16 organic-shape bg-primary text-primary-foreground flex items-center justify-center group-hover:rotate-12 transition-transform">
               <ShieldCheck size={32} />
            </div>
            <div>
               <h3 className="font-black text-xl text-foreground">Governance Integrity</h3>
               <p className="text-sm text-muted-foreground">84% of nodes are verified and participating in active voting circles.</p>
            </div>
         </div>
         <div className="bg-accent/5 dark:bg-accent/10 p-8 rounded-[40px] border border-accent/10 flex items-center gap-6 group hover:bg-accent/10 transition-all">
            <div className="w-16 h-16 organic-shape bg-accent text-accent-foreground flex items-center justify-center group-hover:-rotate-12 transition-transform">
               <Globe size={32} />
            </div>
            <div>
               <h3 className="font-black text-xl text-foreground">Global Resonance</h3>
               <p className="text-sm text-muted-foreground">Expansion into Gqeberha coastal nodes saw a 150% rise in mobile activity.</p>
            </div>
         </div>
      </div>

      <div className="bg-white dark:bg-card rounded-[48px] border border-border/50 shadow-sm relative overflow-hidden">
        <div className="pattern-dots absolute inset-0 opacity-[0.01] pointer-events-none" />
        <div className="p-10 border-b border-border/50 flex justify-between items-center relative z-10">
          <h3 className="font-black text-2xl text-foreground font-serif italic">Ability Matrix</h3>
          <div className="hidden lg:flex gap-16 mr-10">
             <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">Resonance</div>
             <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] w-24 text-right">Expansion</div>
             <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] w-32 text-right">Health</div>
          </div>
        </div>
        <div className="p-6 space-y-2 relative z-10">
          {featureUsage.map((f, i) => (
            <FeatureRow key={i} feature={f} />
          ))}
        </div>
      </div>
    </div>
  );
}
