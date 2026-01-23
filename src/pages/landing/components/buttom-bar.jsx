import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, User, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

function BottomBar() {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        {
            id: 'home',
            label: 'Home',
            icon: Home,
            path: '/dashboard',
        },
        {
            id: 'stats',
            label: 'Stats',
            icon: TrendingUp,
            path: '/dashboard/stats',
        },
        {
            id: 'profile',
            label: 'Profile',
            icon: User,
            path: '/dashboard/profile',
        },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <div className="bg-linear-to-t from-slate-900 to-slate-800 border-t border-slate-700/50 px-2 py-3 safe-bottom">
            <div className="flex items-center justify-around max-w-md mx-auto">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.path);

                    return (
                        <button
                            key={item.id}
                            onClick={() => navigate(item.path)}
                            className={cn(
                                "flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition-all duration-300 relative group",
                                active
                                    ? "text-cyan-400"
                                    : "text-slate-400 hover:text-slate-200"
                            )}
                        >
                            {/* Active indicator */}
                            {active && (
                                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full" />
                            )}

                            {/* Icon with glow effect when active */}
                            <div className={cn(
                                "relative",
                                active && "drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                            )}>
                                <Icon className={cn(
                                    "size-6 transition-transform duration-300",
                                    active && "scale-110"
                                )} />
                            </div>

                            {/* Label */}
                            <span className={cn(
                                "text-xs font-medium transition-all duration-300",
                                active ? "opacity-100 font-semibold" : "opacity-70 group-hover:opacity-100"
                            )}>
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default BottomBar;
