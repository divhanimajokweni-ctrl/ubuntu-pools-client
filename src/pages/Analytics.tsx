import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';
import { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Users, 
  Activity, 
  Target, 
  ArrowUpRight, 
  ArrowDownRight,
  MoreVertical,
  Calendar,
  Heart,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Lightbulb
} from 'lucide-react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { createContributionSession } from '../lib/stitch';

const data = [
  { name: '01 Apr', members: 4000, revenue: 2400 },
  { name: '05 Apr', members: 3000, revenue: 1398 },
  { name: '10 Apr', members: 5000, revenue: 9800 },
  { name: '15 Apr', members: 2780, revenue: 3908 },
  { name: '20 Apr', members: 1890, revenue: 4800 },
  { name: '25 Apr', members: 2390, revenue: 3800 },
  { name: '30 Apr', members: 3490, revenue: 4300 },
];

const distributionData = [
  { name: 'Gqeberha', value: 450, color: 'var(--primary)' },
  { name: 'East London', value: 320, color: 'var(--accent)' },
  { name: 'Mthatha', value: 280, color: '#8FBC8F' }, // Sage
  { name: 'Port Alfred', value: 190, color: '#A0522D' }, // Sienna
  { name: 'Jeffreys Bay', value: 150, color: '#E9967A' }, // Dark Salmon
];

function StatCard({ title, value, change, trend, icon: Icon, color }: any) {
  return (
    <div className="bg-white dark:bg-card p-6 rounded-3xl border border-border/50 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group relative overflow-hidden">
      <div className="pattern-dots absolute inset-0 opacity-[0.03] pointer-events-none" />
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className={`w-14 h-14 flex items-center justify-center organic-shape ${color} group-hover:rotate-12 transition-transform`}>
          <Icon size={24} />
        </div>
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <MoreVertical size={20} />
        </button>
      </div>
      <div className="relative z-10">
        <h3 className="text-muted-foreground text-sm font-medium tracking-tight mb-1 uppercase tracking-wider">{title}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-foreground">{value}</span>
          <div className={`flex items-center gap-0.5 text-xs font-bold ${trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
            {trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
            {change}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Analytics() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const isNewUser = searchParams.get('onboarding') === 'true';
  const [insight, setInsight] = useState<string | null>(null);
  const [loadingInsight, setLoadingInsight] = useState(false);

  useEffect(() => {
    const fetchInsight = async () => {
      setLoadingInsight(true);
      try {
        const response = await fetch('/api/inference', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: 'Provide a short, 2-sentence executive insight about a 12.5% increase in collective members for a community governance platform called Ubuntu Pools.' })
        });
        const data = await response.json();
        setInsight(data.result);
      } catch (error) {
        console.error('Failed to fetch AI insight:', error);
        setInsight("Growth metrics indicate strong community trust. Recommend focusing on East London node expansion to balance provincial spread.");
      } finally {
        setLoadingInsight(false);
      }
    };
    fetchInsight();
  }, []);

  const sendWhatsAppUpdate = async () => {
    try {
      await fetch('/api/whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          to: '27000000000', 
          message: 'The Ubuntu Pools collective has grown by 12.5%! High harmonized growth detected in Gqeberha.' 
        })
      });
      alert('Community Broadcast Initiated via WhatsApp');
    } catch (error) {
      console.error('WhatsApp Broadcast failed');
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
      {isNewUser && (
        <div className="bg-primary p-12 rounded-[56px] text-primary-foreground relative overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500">
          <div className="pattern-dots absolute inset-0 opacity-[0.1] pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 bg-white/20 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
                <Sparkles size={16} />
                Initiation Sequence Active
              </div>
              <h2 className="text-5xl font-black font-serif italic tracking-tight">Step into the <span className="not-italic opacity-80">Circle</span></h2>
              <p className="text-xl text-primary-foreground/80 max-w-xl font-medium leading-relaxed italic">
                Your manager node is live. Now, align with a cohort to begin the collective strategy and share in the abundance.
              </p>
            </div>
            <button 
              onClick={() => navigate('/cohorts')}
              className="px-12 py-8 bg-white text-primary rounded-[32px] text-xl font-black shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-4 uppercase tracking-[0.2em]"
            >
              Join a Cohort
              <ArrowRight size={24} />
            </button>
          </div>
          <div className="organic-shape w-96 h-96 bg-white/10 absolute -right-20 -bottom-20 blur-3xl" />
        </div>
      )}

      <header className="relative bg-primary/5 dark:bg-primary/10 p-10 rounded-[40px] overflow-hidden border border-primary/10">
        <div className="organic-shape w-64 h-64 bg-accent/20 absolute -right-20 -top-20 blur-3xl" />
        <div className="organic-shape w-48 h-48 bg-primary/20 absolute right-10 -bottom-10 blur-2xl" />
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Molo, welcome to the <span className="text-primary italic">Collective Hub.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Managing the sustainable growth of our pools across the Eastern Cape nodes. 
              Reflecting our strength in <span className="font-serif italic text-foreground">Ubuntu</span> logic.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-white dark:bg-secondary px-6 py-3 rounded-full border border-border text-sm font-bold text-foreground hover:shadow-lg transition-all">
              <Calendar size={18} className="text-primary" />
              <span>Full Archive</span>
            </button>
            <button 
              onClick={() => createContributionSession(100)}
              className="group flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full text-sm font-bold shadow-xl shadow-accent/20 hover:scale-105 transition-all"
            >
              <Heart size={18} className="group-hover:scale-125 transition-transform fill-current" />
              <span>Contribute R100 (EFT)</span>
            </button>
            <button 
              onClick={() => navigate('/reports')}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all"
            >
              Strategy Report
            </button>
            <button 
              onClick={sendWhatsAppUpdate}
              className="w-12 h-12 flex items-center justify-center bg-white dark:bg-secondary rounded-full border border-border text-primary hover:text-white hover:bg-emerald-500 transition-all shadow-sm"
              title="Broadcast Update"
            >
              <MessageCircle size={20} />
            </button>
          </div>
        </div>
      </header>

      {insight && (
        <div className="bg-white dark:bg-card p-8 rounded-[40px] border border-border/50 shadow-sm relative overflow-hidden group">
          <div className="pattern-dots absolute inset-0 opacity-[0.02] pointer-events-none" />
          <div className="flex items-center gap-6 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Lightbulb size={32} />
            </div>
            <div>
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1 italic font-serif">Executive Shadow Insight (AI)</p>
              <p className="text-lg font-bold text-foreground leading-relaxed italic">"{insight}"</p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard 
          title="Collective Members" 
          value="24,589" 
          change="12.5%" 
          trend="up" 
          icon={Users} 
          color="bg-primary/10 text-primary" 
        />
        <StatCard 
          title="Active Nodes" 
          value="1,247" 
          change="8.2%" 
          trend="up" 
          icon={Activity} 
          color="bg-accent/10 text-accent" 
        />
        <StatCard 
          title="Harmonious Growth" 
          value="78.4%" 
          change="2.4%" 
          trend="down" 
          icon={Target} 
          color="bg-emerald-500/10 text-emerald-600" 
        />
        <StatCard 
          title="Network Expansion" 
          value="15.6%" 
          change="4.2%" 
          trend="up" 
          icon={TrendingUp} 
          color="bg-amber-500/10 text-amber-600" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-card p-10 rounded-[32px] border border-border/50 shadow-sm relative group overflow-hidden">
          <div className="pattern-dots absolute inset-0 opacity-[0.02] pointer-events-none" />
          <div className="flex justify-between items-center mb-10 relative z-10">
            <h3 className="font-bold text-xl text-foreground">Participation Rhythms</h3>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Members</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Flow Rate</span>
              </div>
            </div>
          </div>
          <div className="h-[400px] relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorMembers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="6 6" vertical={false} stroke="currentColor" className="text-border/50" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11, fontWeight: 600 }} 
                  dy={15}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11, fontWeight: 600 }} 
                />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '20px', 
                    border: 'none', 
                    boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
                    backgroundColor: 'var(--tooltip-bg, #fff)',
                    color: 'var(--tooltip-color, #1a1a1a)',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}
                />
                <Area 
                  type="natural" 
                  dataKey="members" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={4} 
                  fillOpacity={1} 
                  fill="url(#colorMembers)" 
                />
                <Area 
                  type="natural" 
                  dataKey="revenue" 
                  stroke="hsl(var(--accent))" 
                  strokeWidth={4} 
                  fillOpacity={0} 
                  fill="transparent" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-10 rounded-[32px] border border-border/50 shadow-sm flex flex-col relative overflow-hidden">
          <div className="pattern-dots absolute inset-0 opacity-[0.02] pointer-events-none" />
          <h3 className="font-bold text-xl text-foreground mb-10 relative z-10">Provincial Spread</h3>
          <div className="flex-1 min-h-[350px] relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={distributionData} layout="vertical" margin={{ left: -10, right: 20 }}>
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'currentColor', fontSize: 13, fontWeight: 600 }} 
                  className="text-foreground/80"
                  width={100}
                />
                <Tooltip cursor={{ fill: 'transparent' }} />
                <Bar dataKey="value" radius={[0, 12, 12, 0]} barSize={32}>
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-10 space-y-4 relative z-10">
            {distributionData.map((item) => (
              <div key={item.name} className="flex justify-between items-center p-3 bg-secondary/30 rounded-2xl border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 organic-shape" style={{ backgroundColor: item.color }} />
                  <span className="text-sm font-bold text-foreground/80">{item.name}</span>
                </div>
                <span className="text-sm font-black text-primary">{Math.round((item.value / 1390) * 100)}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
