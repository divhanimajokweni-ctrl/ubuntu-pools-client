import { NavLink } from "react-router-dom";
import { 
  LineChart, 
  Users, 
  Layers, 
  Filter, 
  Zap, 
  Target, 
  BarChart3, 
  Bell, 
  Settings, 
  HelpCircle,
  LayoutDashboard,
  LogOut,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import AppLogo from "./ui/AppLogo";
import { cn } from "../lib/utils";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const menuItems = [
    { name: "Analytics", path: "/analytics", icon: LayoutDashboard },
    { name: "Engagement", path: "/engagement", icon: BarChart3 },
    { name: "Cohorts", path: "/cohorts", icon: Layers },
    { name: "Funnels", path: "/funnels", icon: Filter },
    { name: "Features", path: "/features", icon: Zap },
    { name: "Customers", path: "/customers", icon: Users },
    { name: "Reports", path: "/reports", icon: Target },
  ];

  const bottomItems = [
    { name: "Notifications", path: "/notifications", icon: Bell },
    { name: "Settings", path: "/settings", icon: Settings },
    { name: "Help", path: "/help", icon: HelpCircle },
  ];

  return (
    <aside 
      className={cn(
        "flex flex-col h-screen bg-white dark:bg-card border-r border-border/50 transition-all duration-500 relative",
        collapsed ? "w-24" : "w-72"
      )}
    >
      <div className="p-8 pb-10 flex items-center gap-4">
        <div className="organic-shape w-12 h-12 bg-primary/10 flex items-center justify-center">
          <AppLogo size={24} />
        </div>
        {!collapsed && (
          <span className="font-serif font-bold text-foreground text-xl tracking-tight">
            Ubuntu <span className="text-primary italic">Pools</span>
          </span>
        )}
      </div>

      <nav className="flex-1 px-4 space-y-2 overflow-y-auto scrollbar-hide">
        {!collapsed && <p className="px-4 text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4">The Collective</p>}
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all group relative duration-300",
              isActive 
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                : "text-muted-foreground hover:bg-secondary/50 dark:hover:bg-secondary/20 hover:text-foreground"
            )}
          >
            {({ isActive }) => (
              <>
                <item.icon className={cn("w-5 h-5 shrink-0 transition-transform group-hover:scale-110")} />
                {!collapsed && <span className="font-bold text-sm">{item.name}</span>}
                {isActive && !collapsed && <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-white opacity-40" />}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-6 mt-auto space-y-2">
        <div className="pattern-dots absolute inset-x-0 bottom-0 h-32 opacity-[0.03] pointer-events-none" />
        {bottomItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center gap-4 px-4 py-3 rounded-xl transition-all",
              isActive 
                ? "text-primary font-bold" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <item.icon className="w-5 h-5 shrink-0" />
            {!collapsed && <span className="text-sm font-medium">{item.name}</span>}
          </NavLink>
        ))}
        
        <button 
          className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all group"
          onClick={() => window.location.href = '/login'}
        >
          <LogOut className="w-5 h-5 shrink-0 group-hover:-translate-x-1 transition-transform" />
          {!collapsed && <span className="text-sm font-bold">Sign Out</span>}
        </button>
      </div>

      <button 
        onClick={onToggle}
        className="absolute -right-3 top-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-full p-1 shadow-sm text-slate-400 hover:text-slate-600 dark:hover:text-white z-10 transition-all"
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>
    </aside>
  );
}
