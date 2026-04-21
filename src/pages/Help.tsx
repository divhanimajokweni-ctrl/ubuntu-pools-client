import { 
  HelpCircle, 
  Shield, 
  Globe, 
  Zap, 
  Users,
  Target,
  Lock,
  History,
  Workflow
} from 'lucide-react';

const philosophyPoints = [
  { 
    title: 'I am because we are', 
    desc: 'Ubuntu Pools operationalizes collective interdependence, creating sustainable prosperity circles that transcend traditional systems.',
    icon: Users,
    color: 'bg-primary/10 text-primary'
  },
  { 
    title: 'Sovereign Architecture', 
    desc: 'Hosted on AWS Africa (Cape Town), ensuring POPIA compliance and data sovereignty within African jurisdiction.',
    icon: Globe,
    color: 'bg-accent/10 text-accent'
  },
  { 
    title: 'Zero-Knowledge Trust', 
    desc: 'Replacing bureaucratic gatekeepers with cryptographically verifiable, peer-attested reputation systems.',
    icon: Lock,
    color: 'bg-emerald-500/10 text-emerald-600'
  }
];

const challenges = [
  { 
    id: '01', 
    name: 'Trust Deficits', 
    desc: 'Banks and credit bureaus require centralized authority. We use peer-attestation and consistent reciprocity to build reputation.',
    icon: Shield
  },
  { 
    id: '02', 
    name: 'Financial Exclusion', 
    desc: 'No paperwork required. Your reputation precedes you through privacy-preserving zero-knowledge proofs.',
    icon: Target
  },
  { 
    id: '03', 
    name: 'Individual Vulnerability', 
    desc: 'Risk is distributed across the village while maintaining individual sovereignty. No one succeeds alone.',
    icon: Zap
  }
];

export default function Help() {
  return (
    <div className="max-w-6xl mx-auto space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-700 pb-20">
      <div className="text-center space-y-8">
        <div className="inline-flex items-center gap-3 bg-white dark:bg-card px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-border shadow-sm">
          <HelpCircle size={16} className="text-primary" />
          The Collective Ethos
        </div>
        <h1 className="text-6xl font-black text-foreground tracking-tight font-serif italic max-w-4xl mx-auto leading-tight">
          Operationalizing the <span className="text-primary not-italic">Philosophy of Ubuntu</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium italic">
          This isn't merely a financial platform—it's a digital embodiment of collective interdependence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {philosophyPoints.map((p, i) => (
          <div key={i} className="bg-white dark:bg-card p-12 rounded-[56px] border border-border/50 shadow-sm relative group overflow-hidden h-full">
            <div className="pattern-dots absolute inset-0 opacity-[0.02] pointer-events-none" />
            <div className={`w-20 h-20 organic-shape ${p.color} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform relative z-10`}>
              <p.icon size={36} />
            </div>
            <h3 className="text-2xl font-black text-foreground mb-4 font-serif italic relative z-10">{p.title}</h3>
            <p className="text-muted-foreground font-medium leading-relaxed relative z-10">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-black font-serif italic">Solving the <span className="text-primary not-italic text-sm uppercase tracking-[0.3em] block mt-2">Three Fundamental Challenges</span></h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {challenges.map((c) => (
            <div key={c.id} className="bg-secondary/20 p-10 rounded-[40px] border border-border/50 space-y-6 group hover:bg-white dark:hover:bg-card transition-all h-full">
              <div className="flex justify-between items-start">
                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-sm">
                  <c.icon size={28} />
                </div>
                <span className="text-4xl font-black text-muted-foreground/10 group-hover:text-primary/10 transition-colors font-serif">{c.id}</span>
              </div>
              <h4 className="text-xl font-black italic font-serif">{c.name}</h4>
              <p className="text-muted-foreground font-medium text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-foreground text-background rounded-[72px] p-20 relative overflow-hidden shadow-2xl">
        <div className="pattern-dots absolute inset-0 opacity-[0.05] pointer-events-none" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
              <Workflow size={16} />
              Technical Foundation
            </div>
            <h2 className="text-5xl font-black font-serif italic leading-tight">System Design <span className="text-primary not-italic">Philosophy</span></h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-primary">
                  <Lock size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Privacy by Design</span>
                </div>
                <p className="text-xs text-background/60 font-medium leading-relaxed">Zero-knowledge proofs and cryptographic shredding ensure true data sovereignty.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-emerald-400">
                  <History size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Immutable Audit Trails</span>
                </div>
                <p className="text-xs text-background/60 font-medium leading-relaxed">Compete transaction and governance history through resilient event sourcing.</p>
              </div>
            </div>
          </div>
          <div className="bg-white/5 rounded-[48px] p-10 border border-white/10 backdrop-blur-sm space-y-6">
            <h3 className="font-black text-xl italic font-serif">African Infrastructure</h3>
            <ul className="space-y-4">
              {[
                'AWS Africa (Cape Town) Primary Hosting',
                'POPIA Compliant Data Processing',
                'Low Latency Optimization for Global Nodes',
                'Zero-Downtime Microservices Monorepo'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-sm font-medium text-background/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
