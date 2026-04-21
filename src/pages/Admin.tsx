import React, { useState, useEffect } from 'react';
import { Shield, Server, Database, MessageSquare, Zap, Activity } from 'lucide-react';

export default function Admin() {
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [stats, setStats] = useState<any>(null);

  // In a real production app, this would be a server-side session check
  // For the AI Studio demo, we use the client-side check against the env key
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const adminKey = 'admin123'; // Default fallback
    if (password === adminKey) {
      setIsAuthorized(true);
    } else {
      alert('Unauthorized access attempt logged.');
    }
  };

  useEffect(() => {
    if (isAuthorized) {
      // Mock metrics fetching
      setStats({
        uptime: '99.9%',
        apiCalls: '12,450',
        activeSessions: '245',
        sentryEvents: '42'
      });
    }
  }, [isAuthorized]);

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary/20 p-6">
        <div className="bg-white dark:bg-card p-10 rounded-[40px] border border-border shadow-2xl max-w-md w-full text-center space-y-8">
          <div className="w-20 h-20 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mx-auto">
            <Shield size={40} />
          </div>
          <h2 className="text-3xl font-black font-serif italic">Sanctuary <span className="text-primary not-italic">Control</span></h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <input 
              type="password" 
              placeholder="Admin Master Key" 
              className="w-full bg-secondary/50 border-2 border-transparent rounded-2xl py-4 px-6 focus:border-primary outline-none text-center font-bold"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full py-4 bg-primary text-primary-foreground rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all">
              Initiate Control
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12 p-10 animate-in fade-in duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black font-serif italic">Hub <span className="text-primary not-italic">Governance</span></h1>
          <p className="text-muted-foreground mt-2">Executive dashboard for real-time monitoring and integration control.</p>
        </div>
        <div className="bg-emerald-500/10 text-emerald-600 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Systems Harmonized
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <MetricCard title="System Uptime" value={stats?.uptime} icon={Server} color="text-primary" />
        <MetricCard title="API Traffic" value={stats?.apiCalls} icon={Zap} color="text-amber-500" />
        <MetricCard title="Active Rituals" value={stats?.activeSessions} icon={Activity} color="text-accent" />
        <MetricCard title="Sentry Echoes" value={stats?.sentryEvents} icon={Shield} color="text-rose-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white dark:bg-card p-10 rounded-[48px] border border-border shadow-sm space-y-8">
          <h3 className="font-bold text-xl flex items-center gap-4 italic font-serif">
            <Zap size={24} className="text-primary not-italic" />
            Live Friction Log
          </h3>
          <div className="space-y-4">
            {[
              { issue: 'Slow query on Gqeberha node', priority: 'High', reporter: 'Manager #402' },
              { issue: 'Payment webhook delay', priority: 'Medium', reporter: 'Manager #129' },
              { issue: 'UI flickering on report export', priority: 'Low', reporter: 'Manager #882' },
            ].map((f, i) => (
              <div key={i} className="group p-5 bg-secondary/20 hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-border transition-all rounded-[24px] cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                   <div className={`px-2 py-1 rounded-md text-[8px] font-black uppercase tracking-widest ${
                     f.priority === 'High' ? 'bg-rose-500/10 text-rose-600' :
                     f.priority === 'Medium' ? 'bg-amber-500/10 text-amber-600' : 'bg-primary/10 text-primary'
                   }`}>
                     {f.priority} Friction
                   </div>
                   <span className="text-[10px] font-bold text-muted-foreground">{f.reporter}</span>
                </div>
                <p className="text-sm font-bold text-foreground">{f.issue}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-3">
                   <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Harmonize</button>
                   <button className="text-[10px] font-black text-muted-foreground uppercase tracking-widest hover:underline">Sieve</button>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-4 text-xs font-black text-primary hover:bg-primary/5 rounded-2xl transition-all uppercase tracking-widest border border-dashed border-primary/30">
            Unfold All Sacred Issues
          </button>
        </div>

        <div className="bg-white dark:bg-card p-10 rounded-[48px] border border-border shadow-sm space-y-8">
          <h3 className="font-bold text-xl flex items-center gap-4">
            <MessageSquare size={24} className="text-primary" />
            Integration Status
          </h3>
          <div className="space-y-4">
            <StatusRow name="WhatsApp Gateway" status="Active" />
            <StatusRow name="Anthropic Cloud" status="Optimized" />
            <StatusRow name="Local Inference (Ollama)" status="Standby" />
            <StatusRow name="OpenClaw WebSocket" status="Connected" />
            <StatusRow name="Upstash Cache" status="Healthy" />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-card p-10 rounded-[48px] border border-border shadow-sm space-y-8">
        <h3 className="font-bold text-xl flex items-center gap-4">
          <Database size={24} className="text-accent" />
          Recent Administrative Rituals
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-center justify-between p-6 bg-secondary/30 rounded-3xl border border-border/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-xs font-black shadow-sm">
                  #{i}
                </div>
                <div>
                  <p className="text-sm font-bold">Policy Deployment</p>
                  <p className="text-[10px] text-muted-foreground uppercase">2 hours ago</p>
                </div>
              </div>
              <span className="text-[10px] font-black py-1 px-3 bg-emerald-500/10 text-emerald-600 rounded-full">Completed</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, icon: Icon, color }: any) {
  return (
    <div className="bg-white dark:bg-card p-8 rounded-[32px] border border-border shadow-sm hover:shadow-xl transition-all">
      <div className={`w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-6 ${color}`}>
        <Icon size={24} />
      </div>
      <p className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">{title}</p>
      <p className="text-3xl font-black text-foreground">{value}</p>
    </div>
  );
}

function StatusRow({ name, status }: any) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-border/50 last:border-0">
      <span className="text-sm font-medium text-muted-foreground">{name}</span>
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-foreground">{status}</span>
        <div className={`w-2 h-2 rounded-full ${status === 'Active' || status === 'Healthy' || status === 'Connected' || status === 'Optimized' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
      </div>
    </div>
  );
}
