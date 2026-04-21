import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, 
  ArrowRight, 
  Mail, 
  Lock,
  Globe,
  Check
} from 'lucide-react';
import AppLogo from '../components/ui/AppLogo';
import { Button } from '../components/ui/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate auth
    setTimeout(() => {
      setLoading(false);
      // If registering, we might want to flag onboarding
      navigate(isRegistering ? '/?onboarding=true' : '/');
    }, 1200);
  };

  return (
    <div className="min-h-screen flex bg-background font-sans overflow-hidden">
      {/* Left side - Aesthetic Pane */}
      <div className="hidden lg:flex w-1/2 bg-primary relative p-20 flex-col justify-between overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-4">
            <AppLogo size={52} />
            <span className="text-3xl font-black text-primary-foreground tracking-tight font-serif italic">Ubuntu <span className="not-italic">Pools</span></span>
          </div>
          <h1 className="mt-28 text-7xl font-black text-primary-foreground leading-[1.05] tracking-tighter italic font-serif">
            {isRegistering ? 'Step into the' : 'Nurturing'} <br />
            <span className="text-primary-foreground/70 not-italic">{isRegistering ? 'Circle' : 'Collective'}</span> <br />
            Governance.
          </h1>
          <p className="mt-10 text-primary-foreground/80 text-xl max-w-sm leading-relaxed font-medium">
            {isRegistering 
              ? 'Begin your journey as a node manager. Join our collective strategy to optimize local governance and wealth distribution.'
              : 'The comprehensive indigenous platform for managing neighborhood pools, village councils, and localized trust networks.'}
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-6">
          <div className="flex -space-x-5">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-16 h-16 rounded-full border-[6px] border-primary bg-secondary/20 flex items-center justify-center overflow-hidden shadow-2xl">
                <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="user" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
          <div>
            <p className="text-primary-foreground font-black text-lg leading-tight">Joined by 12k+</p>
            <p className="text-primary-foreground/60 text-[10px] font-black uppercase tracking-widest">Community Node Managers</p>
          </div>
        </div>

        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-white opacity-[0.07] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black opacity-[0.1] rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />
        <div className="pattern-dots absolute inset-0 opacity-[0.05] pointer-events-none" />
      </div>

      {/* Right side - Form Pane */}
      <div className="flex-1 flex flex-col justify-center px-10 sm:px-20 lg:px-32 relative bg-background">
        <div className="max-w-md w-full mx-auto space-y-12">
          <div className="relative z-10 text-center lg:text-left">
            <div className="lg:hidden mb-10 flex justify-center">
              <AppLogo size={64} />
            </div>
            <h2 className="text-4xl font-black text-foreground tracking-tight font-serif italic">
              {isRegistering ? 'Initiate' : 'Hub'} <span className="text-primary not-italic">{isRegistering ? 'Ritual' : 'Entrance'}</span>
            </h2>
            <p className="text-muted-foreground mt-3 font-medium text-lg leading-relaxed">
              {isRegistering ? 'Register your village node to start.' : 'Access your community governance sanctuary.'}
            </p>
          </div>

          <form onSubmit={handleAuth} className="space-y-8 relative z-10">
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] pl-1">Village Domain (Email)</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-6 flex items-center text-muted-foreground group-focus-within:text-primary transition-colors pointer-events-none">
                    <Mail size={22} />
                  </div>
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="maya.k@ubuntupools.com" 
                    className="w-full bg-secondary/50 border-2 border-transparent rounded-[24px] py-6 pl-16 pr-6 text-base font-bold focus:bg-white dark:focus:bg-card focus:border-primary focus:ring-8 focus:ring-primary/5 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center px-2">
                  <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">Master Key</label>
                  {!isRegistering && <button type="button" className="text-[10px] uppercase font-black text-primary hover:opacity-80 tracking-widest">Forgotten?</button>}
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-6 flex items-center text-muted-foreground group-focus-within:text-primary transition-colors pointer-events-none">
                    <Lock size={22} />
                  </div>
                  <input 
                    type="password" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••" 
                    className="w-full bg-secondary/50 border-2 border-transparent rounded-[24px] py-6 pl-16 pr-6 text-base font-bold focus:bg-white dark:focus:bg-card focus:border-primary focus:ring-8 focus:ring-primary/5 transition-all outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 px-2">
              <div className="relative flex items-center">
                <input type="checkbox" id="remember" className="w-6 h-6 rounded-[8px] border-2 border-muted-foreground/30 text-primary focus:ring-primary/20 transition-all appearance-none checked:bg-primary" />
                <Check className="absolute text-white pointer-events-none opacity-0 checked:opacity-100 left-1 w-4 h-4" />
              </div>
              <label htmlFor="remember" className="text-sm font-black text-muted-foreground cursor-pointer select-none uppercase tracking-widest leading-none">
                {isRegistering ? 'Accept Sanctuary Terms' : 'Remain Initiated'}
              </label>
            </div>

            <Button 
              type="submit" 
              className="w-full h-20 rounded-[28px] text-lg font-black shadow-2xl shadow-primary/20 hover:scale-[1.02] transition-all group relative overflow-hidden bg-primary text-primary-foreground uppercase tracking-[0.2em]"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-6 h-6 border-4 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  <span>{isRegistering ? 'Initiating...' : 'Scanning Node...'}</span>
                </div>
              ) : (
                <div className="flex items-center gap-3 relative z-10">
                  <span>{isRegistering ? 'Register & Step into Circle' : 'Enter Dashboard'}</span>
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </div>
              )}
            </Button>
          </form>

          <div className="pt-12 border-t border-border/50 relative z-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
                {isRegistering ? 'Already have a sanctuary?' : 'New managed governance area?'}
              </p>
              <button 
                onClick={() => setIsRegistering(!isRegistering)}
                className="text-[10px] font-black text-foreground bg-secondary px-6 py-3 rounded-full hover:bg-secondary/80 transition-all flex items-center gap-3 uppercase tracking-widest border border-border/10"
              >
                <Globe size={16} className="text-primary" />
                {isRegistering ? 'Return to Entrance' : 'Step into the Circle'}
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 opacity-20 relative z-10 grayscale">
            <Shield size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">AES-256 Ritual Tunnel</span>
          </div>
        </div>

        {/* Global Organic Decoration */}
        <div className="pattern-dots absolute inset-0 opacity-[0.03] pointer-events-none" />
      </div>
    </div>
  );
}
