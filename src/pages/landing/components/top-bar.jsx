import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Trophy, Sparkles } from 'lucide-react';

function TopBar({ user }) {
    const getInitials = (name) => {
        if (!name) return 'U';
        return name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    return (
        <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 p-4 pb-6">
            {/* Background pattern overlay */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 1px, transparent 1px),
                                     radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="relative flex items-center justify-between">
                {/* User Info */}
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Avatar className="size-14 ring-4 ring-white/30 shadow-lg">
                            <AvatarImage src={user?.avatar} alt={user?.username || 'User'} />
                            <AvatarFallback className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white font-bold text-lg">
                                {getInitials(user?.username || user?.email)}
                            </AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 bg-green-500 size-4 rounded-full ring-2 ring-white"></div>
                    </div>
                    <div>
                        <h2 className="text-white font-bold text-lg leading-tight">
                            {user?.username || user?.email?.split('@')[0] || 'Player'}
                        </h2>
                        <div className="flex items-center gap-1 text-white/90 text-sm">
                            <Sparkles className="size-3" />
                            <span>Level {user?.level || 1}</span>
                        </div>
                    </div>
                </div>

                {/* Score Badge */}
                <div className="flex flex-col items-end gap-1">
                    <Badge className="bg-white/20 backdrop-blur-sm border-white/30 text-white px-3 py-1 text-xs font-semibold">
                        <Trophy className="size-3" />
                        <span>{user?.score || 0} pts</span>
                    </Badge>
                    <span className="text-white/70 text-xs">Rank #{user?.rank || '—'}</span>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
