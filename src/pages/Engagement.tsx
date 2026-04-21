import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line
} from 'recharts';
import { 
  Users, 
  Clock, 
  MousePointer2, 
  Zap,
  ArrowUpRight,
  TrendingUp,
  Waves
} from 'lucide-react';

const activityData = [
  { time: '08:00', active: 120, baseline: 100 },
  { time: '10:00', active: 450, baseline: 400 },
  { time: '12:00', active: 890, baseline: 800 },
  { time: '14:00', active: 1250, baseline: 1100 },
  { time: '16:00', active: 980, baseline: 900 },
  { time: '18:00', active: 620, baseline: 600 },
  { time: '20:00', active: 340, baseline: 300 },
];

const retentionData = [
  { day: 'Day 0', rate: 100 },
  { day: 'Day 1', rate: 82 },
  { day: 'Day 7', rate: 45 },
  { day: 'Day 14', rate: 32 },
  { day: 'Day 30', rate: 24 },
];

function MetricCard({ title, value, subtext, icon: Icon, trend, color }: any) {
  return (
    <div className="bg-white dark:bg-card p-6 rounded-[32px] border border-border/50 shadow-sm transition-all group overflow-hidden relative">
      <div className="pattern-dots absolute inset-0 opacity-[0.02] pointer-events-none" />
      <div className="flex items-center gap-5 relative z-10">
        <div className={`p-4 rounded-2xl ${color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-muted-foreground text-[10px] font-black uppercase tracking-widest">{title}</h3>
          <p className="text-2xl font-black text-foreground">{value}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-2 relative z-10 border-t border-border/50 pt-4">
        <span className="text-[10px] font-black text-primary uppercase tracking-widest">
          {trend}
        </span>
        <span className="text-[10px] font-bold text-muted-foreground italic uppercase">{subtext}</span>
      </div>
    </div>
  );
}

export default function Engagement() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black font-serif text-foreground tracking-tight italic">Collective <span className="text-primary not-italic">Vibrancy</span></h1>
          <p className="text-muted-foreground max-w-lg mt-2">Observing the rhythmic flow of our community interaction and the enduring bond of our collective nodes.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-primary/5 dark:bg-primary/10 px-6 py-3 rounded-full border border-primary/10 flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
             <span className="text-xs font-black text-primary uppercase tracking-widest whitespace-nowrap">Pulse Active</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <MetricCard 
          title="Daily Active Hearts" 
          value="12,847" 
          subtext="Harmonious Expansion" 
          icon={Users} 
          trend="↑ 12%"
          color="bg-primary/10 text-primary"
        />
        <MetricCard 
          title="Avg. Unity Time" 
          value="8m 32s" 
          subtext="Deep Listening" 
          icon={Clock} 
          trend="↑ 4%"
          color="bg-accent/10 text-accent"
        />
        <MetricCard 
          title="Action Flow" 
          value="24.3" 
          subtext="Collective Energy" 
          icon={MousePointer2} 
          trend="↓ 2%"
          color="bg-amber-500/10 text-amber-600"
        />
        <MetricCard 
          title="Instant Resonance" 
          value="98.2%" 
          subtext="Village Speed" 
          icon={Zap} 
          trend="↑ 1%"
          color="bg-emerald-500/10 text-emerald-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-card p-10 rounded-[40px] border border-border/50 shadow-sm flex flex-col relative group overflow-hidden">
          <div className="pattern-dots absolute inset-0 opacity-[0.02] pointer-events-none" />
          <div className="flex justify-between items-center mb-10 relative z-10">
            <h3 className="font-bold text-xl text-foreground flex items-center gap-3">
              <Waves className="text-primary" size={24} />
              Participation Wave
            </h3>
            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Real-time Rhythm</span>
          </div>
          <div className="h-[350px] relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={activityData}>
                <CartesianGrid strokeDasharray="8 8" vertical={false} stroke="currentColor" className="text-border/40" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11, fontWeight: 700 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11, fontWeight: 700 }} />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '24px', 
                    border: 'none', 
                    boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
                    backgroundColor: 'var(--tooltip-bg, #fff)',
                    color: 'var(--tooltip-color, #1e293b)'
                  }} 
                />
                <Line 
                  type="natural" 
                  dataKey="active" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={5} 
                  dot={{ r: 6, fill: 'hsl(var(--primary))', strokeWidth: 3, stroke: '#fff' }} 
                  activeDot={{ r: 8, strokeWidth: 0 }} 
                />
                <Line 
                  type="natural" 
                  dataKey="baseline" 
                  stroke="hsl(var(--accent))" 
                  strokeWidth={2} 
                  strokeDasharray="10 10" 
                  dot={false} 
                  opacity={0.5}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-10 rounded-[40px] border border-border/50 shadow-sm flex flex-col relative group overflow-hidden">
          <div className="pattern-dots absolute inset-0 opacity-[0.02] pointer-events-none" />
          <div className="flex justify-between items-center mb-10 relative z-10">
            <h3 className="font-bold text-xl text-foreground flex items-center gap-3">
              <TrendingUp className="text-accent" size={24} />
              Enduring Bonds
            </h3>
            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">30-Moon Retention</span>
          </div>
          <div className="h-[350px] relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={retentionData}>
                <CartesianGrid strokeDasharray="8 8" vertical={false} stroke="currentColor" className="text-border/40" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11, fontWeight: 700 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11, fontWeight: 700 }} unit="%" />
                <Tooltip 
                  cursor={{ fill: 'hsl(var(--primary) / 0.05)' }} 
                  contentStyle={{ 
                    borderRadius: '24px', 
                    border: 'none', 
                    boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
                    backgroundColor: 'var(--tooltip-bg, #fff)',
                    color: 'var(--tooltip-color, #1e293b)'
                  }} 
                />
                <Bar dataKey="rate" fill="hsl(var(--primary))" radius={[12, 12, 0, 0]} barSize={50} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
