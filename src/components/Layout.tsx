import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import { Search, Bell, User, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex h-screen bg-background overflow-hidden transition-all duration-300 tracking-tight">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-24 flex items-center justify-between px-10 z-10 transition-all">
          <div className="flex items-center gap-4 bg-white dark:bg-card px-6 py-3 rounded-full w-[450px] border border-border/50 shadow-sm focus-within:shadow-xl focus-within:border-primary/30 transition-all group">
            <Search className="w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Searching the Collective Memory..." 
              className="bg-transparent border-none focus:ring-0 text-sm w-full text-foreground placeholder:text-muted-foreground/60 font-medium"
            />
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <button 
                onClick={toggleTheme}
                className="w-12 h-12 flex items-center justify-center text-muted-foreground hover:text-primary bg-white dark:bg-card border border-border/50 rounded-full transition-all shadow-sm hover:shadow-md"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </button>

              <button className="relative w-12 h-12 flex items-center justify-center text-muted-foreground hover:text-primary bg-white dark:bg-card border border-border/50 rounded-full transition-all shadow-sm hover:shadow-md">
                <Bell size={20} />
                <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-primary rounded-full border-2 border-background animate-pulse"></span>
              </button>
            </div>
            
            <div className="flex items-center gap-5 pl-8 border-l border-border/50">
              <div className="text-right hidden lg:block">
                <p className="text-sm font-bold text-foreground">Maya Krishnan</p>
                <p className="text-[10px] uppercase font-black text-primary tracking-[0.2em] leading-none mt-1">Facilitator</p>
              </div>
              <div className="w-12 h-12 organic-shape bg-primary text-primary-foreground flex items-center justify-center font-black text-sm shadow-xl shadow-primary/30 border-2 border-white/20">
                MK
              </div>
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-10 pt-4 lg:p-14 lg:pt-6 scrollbar-hide">
          {children}
        </main>
      </div>
    </div>
  );
}
