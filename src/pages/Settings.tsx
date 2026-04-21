import { useState, useEffect } from 'react';
import { 
  User, 
  Shield, 
  MapPin, 
  Bell, 
  Globe, 
  Database,
  ChevronRight,
  MoreVertical,
  Check,
  Star,
  Info,
  Trash2
} from 'lucide-react';
import { calculateUbuntuScore, getAuthorityLevel } from '../services/ubuntuScore';

const settingsSections = [
  { id: 'profile', name: 'Profile Information', description: 'Update your display name and email address.', icon: User },
  { id: 'ubuntu-score', name: 'Ubuntu Reputation', description: 'View your collective contribution and authority level.', icon: Star },
  { id: 'security', name: 'Security & Access', description: 'Manage your password and zero-knowledge credentials.', icon: Shield },
  { id: 'compliance', name: 'Compliance & Sovereignty', description: 'AWS Africa (Cape Town) hosting and POPIA settings.', icon: Globe },
  { id: 'data', name: 'Data Management', description: 'Export your account data or clear local caches.', icon: Database },
];

export default function Settings() {
  const [activeSection, setActiveSection] = useState('profile');
  const [complianceSettings, setComplianceSettings] = useState({
    zeroKnowledge: true,
    immutableAudit: true,
    consentSharing: false
  });

  const toggleCompliance = (id: string) => {
    setComplianceSettings(prev => ({
      ...prev,
      [id as keyof typeof prev]: !prev[id as keyof typeof prev]
    }));
  };

  // Mock Ubuntu Score Data
  const mockComponents = { reciprocity: 85, consistency: 70, endorsements: 60, governance: 90, sharing: 50 };
  const score = calculateUbuntuScore(mockComponents);
  const authority = getAuthorityLevel(score);

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-foreground">
        <div>
          <h1 className="text-4xl font-black font-serif tracking-tight text-foreground italic">Hub <span className="text-primary not-italic">Governance</span></h1>
          <p className="text-muted-foreground max-w-lg mt-2">Manage your node manager preferences and platform sacred configurations.</p>
        </div>
        <div className="bg-primary/10 text-primary px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/10">
          POPIA Compliant • AWS Cape Town
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1 space-y-4">
          {settingsSections.map((s) => (
            <button 
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`w-full flex items-center gap-5 p-6 rounded-[32px] transition-all border ${
                activeSection === s.id 
                  ? 'bg-primary text-primary-foreground shadow-2xl shadow-primary/20 border-primary' 
                  : 'bg-white dark:bg-card text-muted-foreground hover:bg-secondary/50 hover:text-foreground border-border/50'
              }`}
            >
              <div className={`w-12 h-12 organic-shape flex items-center justify-center ${activeSection === s.id ? 'bg-white/20' : 'bg-secondary'}`}>
                 <s.icon size={22} />
              </div>
              <div className="text-left flex-1">
                <p className="text-sm font-black uppercase tracking-widest leading-none">{s.name}</p>
              </div>
              <ChevronRight size={18} className={`${activeSection === s.id ? 'text-primary-foreground' : 'text-muted-foreground/30'}`} />
            </button>
          ))}
        </div>

        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white dark:bg-card rounded-[48px] border border-border/50 shadow-sm overflow-hidden relative min-h-[600px]">
            <div className="pattern-dots absolute inset-0 opacity-[0.02] pointer-events-none" />
            <div className="p-10 border-b border-border/50 relative z-10">
              <h3 className="text-3xl font-black font-serif text-foreground italic">
                {settingsSections.find(s => s.id === activeSection)?.name.split(' ')[0]} <span className="text-primary not-italic">{settingsSections.find(s => s.id === activeSection)?.name.split(' ').slice(1).join(' ')}</span>
              </h3>
              <p className="text-sm font-medium text-muted-foreground mt-2">
                {settingsSections.find(s => s.id === activeSection)?.description}
              </p>
            </div>
            
            <div className="p-10 space-y-10 relative z-10">
               {activeSection === 'profile' && (
                 <div className="space-y-8">
                   <div className="flex items-center gap-8">
                     <div className="relative group">
                       <div className="w-28 h-28 organic-shape bg-primary/10 flex items-center justify-center text-3xl font-black text-primary border-4 border-white dark:border-card shadow-2xl">
                         MK
                       </div>
                       <button className="absolute bottom-0 right-0 w-10 h-10 bg-white dark:bg-slate-800 border border-border/50 rounded-full shadow-xl flex items-center justify-center text-muted-foreground hover:text-primary transition-all">
                         <MoreVertical size={16} />
                       </button>
                     </div>
                     <div>
                        <h4 className="font-black text-xl text-foreground">Manager Avatar</h4>
                        <p className="text-sm text-muted-foreground mt-1">Village identity image. JPG, PNG or GIF. Max 2MB.</p>
                        <div className="flex gap-4 mt-4">
                           <button className="text-xs font-black text-primary uppercase tracking-widest hover:opacity-80">Upload New</button>
                           <button className="text-xs font-black text-accent uppercase tracking-widest hover:opacity-80">Dissolve</button>
                        </div>
                     </div>
                   </div>

                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                     <div className="space-y-3">
                       <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] pl-1">Full Birth Name</label>
                       <input type="text" defaultValue="Maya Krishnan" className="w-full bg-secondary/30 dark:bg-slate-800/50 border border-border/50 rounded-[20px] px-6 py-4 text-sm font-bold focus:ring-4 focus:ring-primary/10 transition-all outline-none" />
                     </div>
                     <div className="space-y-3">
                       <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] pl-1">Governance Echo (Email)</label>
                       <input type="email" defaultValue="maya.k@ubuntupools.com" className="w-full bg-secondary/30 dark:bg-slate-800/50 border border-border/50 rounded-[20px] px-6 py-4 text-sm font-bold focus:ring-4 focus:ring-primary/10 transition-all outline-none" />
                     </div>
                   </div>
                 </div>
               )}

               {activeSection === 'ubuntu-score' && (
                 <div className="space-y-10">
                   <div className="bg-primary/5 rounded-[40px] p-10 border border-primary/20 flex items-center justify-between gap-8">
                     <div className="space-y-4">
                       <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary text-white rounded-full text-[10px] font-black uppercase tracking-widest">
                         <Star size={12} fill="currentColor" />
                         {authority.level} Status
                       </div>
                       <h4 className="text-5xl font-black font-serif italic text-foreground">{score} <span className="text-xl not-italic opacity-50">/ 100</span></h4>
                       <p className="text-sm font-medium text-muted-foreground max-w-[280px]">Your reputation unlocks deep collective prosperity and governance privileges.</p>
                     </div>
                     <div className="w-32 h-32 organic-shape bg-primary/10 flex items-center justify-center text-primary">
                        <Star size={64} fill="currentColor" stroke="none" />
                     </div>
                   </div>

                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <UbuntuComponent label="Reciprocity" value={mockComponents.reciprocity} weight="25%" />
                     <UbuntuComponent label="Consistency" value={mockComponents.consistency} weight="20%" />
                     <UbuntuComponent label="Endorsements" value={mockComponents.endorsements} weight="20%" />
                     <UbuntuComponent label="Governance" value={mockComponents.governance} weight="20%" />
                     <UbuntuComponent label="Sharing" value={mockComponents.sharing} weight="15%" />
                   </div>
                 </div>
               )}

               {activeSection === 'compliance' && (
                 <div className="space-y-8">
                   <div className="p-8 bg-secondary/30 rounded-[32px] border border-border/50">
                     <div className="flex items-start gap-5">
                       <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                         <Globe size={24} />
                       </div>
                       <div>
                         <h4 className="font-bold text-lg">AWS Africa (Cape Town)</h4>
                         <p className="text-sm text-muted-foreground mt-1">Your data is hosted within the South African jurisdiction, ensuring zero latency and full sovereignty.</p>
                         <div className="mt-4 flex items-center gap-2 text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                           <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                           Sovereign Path Active
                         </div>
                       </div>
                     </div>
                   </div>

                   <div className="space-y-6">
                     <h4 className="font-bold text-xl flex items-center gap-3">
                       <Shield size={20} className="text-primary" />
                       POPIA Protections
                     </h4>
                     <div className="space-y-4">
                       <ComplianceToggle 
                         label="Zero-Knowledge Identity" 
                         enabled={complianceSettings.zeroKnowledge} 
                         onToggle={() => toggleCompliance('zeroKnowledge')}
                       />
                       <ComplianceToggle 
                         label="Immutable Audit Trail" 
                         enabled={complianceSettings.immutableAudit} 
                         onToggle={() => toggleCompliance('immutableAudit')}
                       />
                       <ComplianceToggle 
                         label="Consent-Based Sharing" 
                         enabled={complianceSettings.consentSharing} 
                         onToggle={() => toggleCompliance('consentSharing')}
                       />
                     </div>
                   </div>
                 </div>
               )}

               {activeSection === 'data' && (
                 <div className="space-y-10">
                   <div className="p-8 bg-rose-500/5 rounded-[32px] border border-rose-500/10 space-y-6">
                      <div className="flex items-center gap-4 text-rose-600">
                        <Trash2 size={24} />
                        <h4 className="font-bold text-lg">Cryptographic Shredding</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        In accordance with POPIA rights, you can request the immediate erasure of your game history and narrative trail. This action is irreversible.
                      </p>
                      <button className="w-full py-4 bg-rose-500 text-white rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-rose-600 transition-colors shadow-xl shadow-rose-500/20">
                        Shred My Narrative History
                      </button>
                   </div>

                   <div className="space-y-6">
                      <h4 className="font-bold text-xl flex items-center gap-3">
                        <Database size={20} className="text-accent" />
                        Sacred Archive Export
                      </h4>
                      <p className="text-sm text-muted-foreground">Download your full event history in JSON format for external auditing.</p>
                      <button className="px-8 py-4 bg-secondary text-foreground rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-secondary/80 transition-all">
                        Generate Export
                      </button>
                   </div>
                 </div>
               )}

               {activeSection === 'security' && (
                 <div className="flex flex-col items-center justify-center py-24 text-center space-y-6">
                   <div className="w-24 h-24 organic-shape bg-secondary flex items-center justify-center text-muted-foreground/30">
                     <Shield size={48} />
                   </div>
                   <div>
                     <h4 className="font-black text-2xl text-foreground italic font-serif">Awaiting Sacred Migration</h4>
                     <p className="text-sm font-medium text-muted-foreground mt-2 max-w-sm">Security credentials are being moved to the decentralized vault.</p>
                   </div>
                 </div>
               )}

               <div className="flex justify-end gap-6 pt-8 border-t border-border/50">
                 <button className="px-8 py-3 text-xs font-black text-muted-foreground hover:text-foreground transition-all uppercase tracking-widest">Discard</button>
                 <button className="px-10 py-4 bg-primary text-primary-foreground rounded-full text-xs font-black shadow-2xl shadow-primary/20 hover:scale-105 transition-all flex items-center gap-3 uppercase tracking-widest">
                    <Check size={20} />
                    Seal Settings
                 </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UbuntuComponent({ label, value, weight }: any) {
  return (
    <div className="p-5 bg-secondary/20 border border-border/50 rounded-2xl space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{label}</span>
        <span className="text-[10px] font-bold text-primary">{weight}</span>
      </div>
      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full" 
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function ComplianceToggle({ label, enabled, onToggle }: any) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3">
        <span className="text-sm font-bold text-foreground">{label}</span>
        <div className="text-muted-foreground/50 cursor-pointer">
          <Info size={14} />
        </div>
      </div>
      <button 
        onClick={onToggle}
        className={`w-12 h-6 rounded-full relative transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ${
          enabled ? 'bg-primary' : 'bg-secondary'
        }`}
      >
        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all shadow-sm ${
          enabled ? 'right-1' : 'left-1'
        }`} />
      </button>
    </div>
  );
}
