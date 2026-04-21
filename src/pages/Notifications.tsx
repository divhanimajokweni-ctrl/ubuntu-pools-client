import { 
  Bell, 
  Check, 
  AlertCircle, 
  Mail, 
  Info,
  Calendar,
  MoreVertical,
  Settings
} from 'lucide-react';

const notifications = [
  { id: 1, title: 'New Community Node Joined', message: 'Eldoret Savings Union has successfully integrated with the platform.', time: '2 hours ago', type: 'success', read: false },
  { id: 2, title: 'Unusual Growth Spike', message: 'Kibera East node showed a 250% increase in activity in the last hour.', time: '5 hours ago', type: 'info', read: false },
  { id: 3, title: 'Sync Failure Warning', message: 'Nairobi API gateway failed to sync for more than 15 minutes.', time: '8 hours ago', type: 'warning', read: true },
  { id: 4, title: 'Scheduled Maintenance', message: 'Platform will be down for 2 hours on Sunday 02:00 UTC.', time: '1 day ago', type: 'info', read: true },
  { id: 5, title: 'Monthly Report Ready', message: 'Your "Governance Performance" report for July is now available.', time: '2 days ago', type: 'success', read: true },
];

export default function Notifications() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'success': return <Check size={18} className="text-primary" />;
      case 'warning': return <AlertCircle size={18} className="text-accent" />;
      case 'info': return <Info size={18} className="text-foreground" />;
      default: return <Bell size={18} className="text-muted-foreground" />;
    }
  };

  const getBgColor = (type: string) => {
    switch (type) {
      case 'success': return 'bg-primary/10';
      case 'warning': return 'bg-accent/10';
      case 'info': return 'bg-secondary';
      default: return 'bg-secondary';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in slide-in-from-bottom-12 duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-foreground">
        <div>
          <h1 className="text-4xl font-black font-serif tracking-tight text-foreground italic">Village <span className="text-primary not-italic">Crier</span></h1>
          <p className="text-muted-foreground max-w-lg mt-2">Listening to the important echoes from our collective nodes and platform health alerts.</p>
        </div>
        <div className="flex gap-4">
          <button className="w-14 h-14 flex items-center justify-center bg-white dark:bg-card border border-border/50 rounded-full text-muted-foreground hover:text-primary hover:shadow-xl transition-all shadow-sm">
            <Settings size={22} />
          </button>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-black shadow-xl shadow-primary/20 hover:scale-105 transition-all">
            Hush All Echoes
          </button>
        </div>
      </div>

      <div className="space-y-6 relative">
        <div className="pattern-dots absolute inset-0 opacity-[0.02] pointer-events-none" />
        {notifications.map((n) => (
          <div key={n.id} className={`p-8 rounded-[40px] border transition-all relative z-10 ${n.read ? 'bg-white/50 dark:bg-card/50 border-border/30 opacity-60' : 'bg-white dark:bg-card border-primary/20 shadow-xl shadow-primary/5'}`}>
            <div className="flex items-start gap-8">
              <div className={`w-16 h-16 organic-shape flex items-center justify-center shrink-0 ${getBgColor(n.type)}`}>
                {getIcon(n.type)}
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className={`text-xl font-black ${n.read ? 'text-muted-foreground' : 'text-foreground'}`}>{n.title}</h4>
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{n.time}</span>
                </div>
                <p className={`text-base mt-2 leading-relaxed font-medium ${n.read ? 'text-muted-foreground' : 'text-muted-foreground'}`}>
                  {n.message}
                </p>
                <div className="flex gap-6 mt-6">
                  <button className="text-xs font-black text-primary uppercase tracking-[0.2em] hover:opacity-80 transition-opacity">Explore Echo</button>
                  <button className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em] hover:text-foreground transition-all">Acknowledge</button>
                </div>
              </div>
              
              <button className="text-muted-foreground/30 hover:text-foreground shrink-0 mt-1 transition-colors">
                <MoreVertical size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full text-center py-8 text-[10px] font-black text-muted-foreground hover:text-primary tracking-[0.4em] uppercase bg-secondary/30 border border-border/50 rounded-[40px] transition-all italic font-serif">
        Unearth Ancient Echoes
      </button>
    </div>
  );
}
