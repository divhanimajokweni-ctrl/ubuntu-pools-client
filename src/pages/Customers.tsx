import { 
  Users, 
  Search, 
  MoreHorizontal, 
  Filter, 
  Download,
  Mail,
  MapPin,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Plus
} from 'lucide-react';

const users = [
  { id: 1, name: 'Summerstrand Pool', email: 'governance@summerstrand.org', location: 'Gqeberha', status: 'Active', members: 1250, pools: 12, health: 'Success' },
  { id: 2, name: 'Motherwell Forum', email: 'community@motherwell.org', location: 'Gqeberha', status: 'Active', members: 980, pools: 8, health: 'Success' },
  { id: 3, name: 'Walmer Heights Node', email: 'admin@walmer.co.za', location: 'Gqeberha', status: 'Warning', members: 720, pools: 4, health: 'At Risk' },
  { id: 4, name: 'New Brighton Hub', email: 'lead@newbrighton.gov.za', location: 'Gqeberha', status: 'Inactive', members: 540, pools: 0, health: 'Churned' },
  { id: 5, name: 'Humewood Community', email: 'council@humewood.org', location: 'Gqeberha', status: 'Active', members: 1560, pools: 22, health: 'Success' },
  { id: 6, name: 'Korsten Trading Union', email: 'trade@korsten.co.za', location: 'Gqeberha', status: 'Active', members: 840, pools: 6, health: 'Neutral' },
];

function StatusBadge({ health }: { health: string }) {
  const colors: Record<string, string> = {
    'Success': 'bg-emerald-100 text-emerald-700',
    'Neutral': 'bg-blue-100 text-blue-700',
    'At Risk': 'bg-amber-100 text-amber-700',
    'Churned': 'bg-rose-100 text-rose-700',
  };

  return (
    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${colors[health] || 'bg-slate-100'}`}>
      {health}
    </span>
  );
}

export default function Customers() {
  return (
    <div className="space-y-12 animate-in fade-in zoom-in-95 duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-foreground">
        <div>
          <h1 className="text-4xl font-black font-serif tracking-tight text-foreground italic">Community <span className="text-primary not-italic">Nodes</span></h1>
          <p className="text-muted-foreground max-w-lg mt-2">Observing and managing the active primary resonance points for our collective governance across the district.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white dark:bg-card border border-border/50 text-foreground w-14 h-14 rounded-full flex items-center justify-center hover:shadow-xl transition-all">
            <Download size={22} />
          </button>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-black shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center gap-3">
            <Plus size={20} />
            <span>Initiate New Node</span>
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-card rounded-[48px] border border-border/50 shadow-sm overflow-hidden flex flex-col relative">
        <div className="pattern-dots absolute inset-0 opacity-[0.01] pointer-events-none" />
        <div className="p-8 border-b border-border/50 flex flex-col lg:flex-row gap-6 items-center justify-between bg-secondary/30 dark:bg-card relative z-10">
          <div className="flex items-center gap-4 bg-white dark:bg-slate-800 border border-border/50 px-6 py-3 rounded-full w-full lg:w-[500px] shadow-sm focus-within:shadow-xl focus-within:border-primary/30 transition-all group">
            <Search size={20} className="text-muted-foreground group-focus-within:text-primary" />
            <input 
              type="text" 
              placeholder="Searching collective memory: Summerstrand, Motherwell..." 
              className="text-sm bg-transparent border-none focus:ring-0 w-full text-foreground font-bold" 
            />
          </div>
          <div className="flex gap-3 shrink-0">
            <button className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-800 border border-border/50 rounded-full text-xs font-black text-foreground uppercase tracking-widest hover:bg-secondary/50 shadow-sm">
              <Filter size={16} />
              Filter Matrix
            </button>
            <button className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-800 border border-border/50 rounded-full text-xs font-black text-foreground uppercase tracking-widest hover:bg-secondary/50 shadow-sm">
              Rhythm Sort
            </button>
          </div>
        </div>

        <div className="overflow-x-auto relative z-10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-secondary/20 dark:bg-secondary/5">
                <th className="p-6 text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] pl-10">Community Nucleus</th>
                <th className="p-6 text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">Operational Node</th>
                <th className="p-6 text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">Vibrancy</th>
                <th className="p-6 text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] text-center">Pools</th>
                <th className="p-6 text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] text-right pr-10">Governance Health</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-secondary/5 group cursor-pointer transition-colors">
                  <td className="p-6 pl-10">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-[20px] bg-primary/10 text-primary flex items-center justify-center font-black text-sm group-hover:rotate-6 transition-transform shadow-inner">
                        {u.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-foreground">{u.name}</h4>
                        <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground tracking-tight mt-1 opacity-60">
                          <Mail size={12} className="text-primary" />
                          {u.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-2 text-sm text-foreground font-black">
                      <MapPin size={16} className="text-accent" />
                      {u.location}
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex flex-col">
                      <span className="text-sm text-foreground font-black">{u.members.toLocaleString()}</span>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Active Hearts</span>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-secondary dark:bg-card text-foreground text-sm font-black border border-border/50">
                      {u.pools}
                    </div>
                  </td>
                  <td className="p-6 text-right pr-10">
                    <div className="flex items-center justify-end gap-6">
                      <StatusBadge health={u.health} />
                      <button className="w-10 h-10 flex items-center justify-center bg-secondary dark:bg-card border border-border/50 rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100">
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-8 border-t border-border/50 bg-secondary/20 dark:bg-card flex items-center justify-between px-10 relative z-10">
          <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em]">Observing 6 of 156 nodes across Gqeberha</p>
          <div className="flex gap-4">
             <button className="w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-800 border border-border/50 rounded-full text-muted-foreground hover:text-primary transition-all shadow-sm">
                <ChevronLeft size={20} />
             </button>
             <button className="w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-800 border border-border/50 rounded-full text-muted-foreground hover:text-primary transition-all shadow-sm">
                <ChevronRight size={20} />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
