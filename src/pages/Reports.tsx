import { 
  FileText, 
  Download, 
  Plus, 
  Search,
  Calendar,
  Clock,
  ExternalLink,
  Target,
  Table as TableIcon
} from 'lucide-react';

const reportTemplates = [
  { name: 'Monthly Performance', category: 'Governance', lastRun: '2 days ago', format: 'PDF/CSV' },
  { name: 'User Growth Audit', category: 'Growth', lastRun: '5 days ago', format: 'Excel' },
  { name: 'Pool Liquidity Snapshot', category: 'Finance', lastRun: '1 hour ago', format: 'JSON/CSV' },
  { name: 'Retention Cohort Grid', category: 'Engagement', lastRun: '12 days ago', format: 'PDF' },
];

const recentReports = [
  { id: 'REP-001', name: 'July Full Audit', date: 'Jul 30, 2024', size: '2.4 MB', type: 'PDF' },
  { id: 'REP-002', name: 'Nairobi Node Metrics', date: 'Jul 28, 2024', size: '1.1 MB', type: 'CSV' },
  { id: 'REP-003', name: 'Flash Pool Analysis', date: 'Jul 25, 2024', size: '840 KB', type: 'JSON' },
];

export default function Reports() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-foreground">
        <div>
          <h1 className="text-4xl font-black font-serif tracking-tight text-foreground italic">Collective <span className="text-primary not-italic">Strategy</span></h1>
          <p className="text-muted-foreground max-w-lg mt-2">Generate, schedule, and download the sacred data archives for community governance.</p>
        </div>
        <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-black shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center gap-3">
          <Plus size={20} />
          <span>New Narrative Report</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-8">
          <h3 className="font-black text-xl text-foreground flex items-center gap-4 italic font-serif">
            <Target size={24} className="text-primary not-italic" />
            Strategic Alignment
          </h3>
          <div className="bg-white dark:bg-card p-10 rounded-[48px] border border-border/50 shadow-sm relative overflow-hidden">
            <div className="pattern-dots absolute inset-0 opacity-[0.02] pointer-events-none" />
            <div className="space-y-8 relative z-10">
              <div className="space-y-4">
                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] pl-1">Primary Collective Goal</label>
                <select className="w-full bg-secondary/30 border border-border/50 rounded-[20px] px-6 py-4 text-sm font-bold focus:ring-4 focus:ring-primary/10 transition-all outline-none appearance-none">
                  <option>Economic Prosperity (Wealth Distribution)</option>
                  <option>Social Harmony (Community Trust)</option>
                  <option>Infrastructural Vigor (Yield Optimization)</option>
                </select>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] pl-1">Strategy Horizon</label>
                <div className="grid grid-cols-3 gap-4">
                  {['1 Moon', '3 Moons', '12 Moons'].map(t => (
                    <button key={t} className={`py-4 rounded-2xl border text-[10px] font-black uppercase tracking-widest transition-all ${t === '3 Moons' ? 'bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/20' : 'bg-secondary/30 border-border/50 text-muted-foreground hover:text-foreground'}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="pt-6">
                <button className="w-full py-5 bg-foreground text-background rounded-full text-xs font-black uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-xl">
                  Seal Strategy Logic
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="font-black text-xl text-foreground flex items-center gap-4 italic font-serif">
            <FileText size={24} className="text-accent not-italic" />
            Archive Templates
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reportTemplates.map((template, idx) => (
              <div key={idx} className="bg-white dark:bg-card p-8 rounded-[32px] border border-border/50 hover:border-primary shadow-sm hover:shadow-2xl transition-all group cursor-pointer relative overflow-hidden">
                <div className="pattern-dots absolute inset-0 opacity-[0.02] pointer-events-none" />
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="p-3 rounded-2xl bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <TableIcon size={22} />
                  </div>
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{template.category}</span>
                </div>
                <h4 className="font-black text-lg text-foreground mb-1 relative z-10">{template.name}</h4>
                <div className="flex items-center gap-2 mt-4 relative z-10">
                  <Clock size={12} className="text-muted-foreground" />
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest opacity-60">Last Ritual: {template.lastRun}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="font-black text-xl text-foreground flex items-center gap-4 italic font-serif">
          <Download size={24} className="text-accent not-italic" />
          Historical Echoes
        </h3>
        <div className="bg-white dark:bg-card rounded-[40px] border border-border/50 overflow-hidden shadow-sm relative">
            <div className="pattern-dots absolute inset-0 opacity-[0.02] pointer-events-none" />
            <div className="p-6 border-b border-border/50 bg-secondary/20 dark:bg-card flex gap-4 relative z-10">
              <div className="flex-1 bg-white dark:bg-slate-800 border border-border/50 px-5 py-2.5 rounded-full flex items-center gap-3 shadow-inner">
                <Search size={16} className="text-muted-foreground" />
                <input type="text" placeholder="Search archives..." className="text-xs bg-transparent border-none focus:ring-0 w-full font-bold" />
              </div>
              <button className="w-12 h-12 flex items-center justify-center border border-border/50 rounded-full bg-white dark:bg-slate-800 text-muted-foreground hover:text-primary transition-all">
                <Calendar size={20} />
              </button>
            </div>
            <div className="divide-y divide-border/50 relative z-10">
              {recentReports.map((report) => (
                <div key={report.id} className="p-6 flex items-center justify-between hover:bg-secondary/10 group transition-colors">
                  <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-[10px] shadow-sm transform group-hover:scale-110 transition-transform ${
                      report.type === 'PDF' ? 'bg-rose-500/10 text-rose-600' : 
                      report.type === 'CSV' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-primary/10 text-primary'
                    }`}>
                      {report.type}
                    </div>
                    <div>
                      <h5 className="text-base font-black text-foreground">{report.name}</h5>
                      <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest opacity-60">{report.date} • {report.size}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-all opacity-0 group-hover:opacity-100">
                      <Download size={18} />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground rounded-full">
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full text-center p-6 text-[10px] font-black text-primary hover:bg-primary/5 transition-colors uppercase tracking-[0.3em] border-t border-border/50 italic font-serif">
              Unfold Full History
            </button>
          </div>
        </div>
      </div>
  );
}
