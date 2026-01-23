import React, { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Trophy, Sparkles, Maximize, Minimize } from 'lucide-react';
import { useUserStore } from '@/store';
import { getInitials } from '@/utils/user.utils';

function TopBar() {

    const { user } = useUserStore();
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Check fullscreen state on mount and when it changes
    useEffect(() => {
        const handleFullscreenChange = () => {
            const isFs = !!(document.fullscreenElement || document.webkitFullscreenElement);
            setIsFullscreen(isFs);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
        };
    }, []);

    const toggleFullscreen = async () => {
        try {
            const docEl = document.documentElement;

            // Check if already in fullscreen (standard or webkit)
            if (document.fullscreenElement || document.webkitFullscreenElement) {
                // Exit fullscreen
                if (document.exitFullscreen) {
                    await document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            } else {
                // Enter fullscreen
                if (docEl.requestFullscreen) {
                    await docEl.requestFullscreen();
                } else if (docEl.webkitRequestFullscreen) {
                    docEl.webkitRequestFullscreen();
                } else if (docEl.webkitEnterFullscreen) {
                    docEl.webkitEnterFullscreen();
                }
            }
        } catch (error) {
            console.error('Fullscreen toggle failed:', error);
        }
    };


    return (
        <div className="relative bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 p-4 pb-6">
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
                            <AvatarFallback className="bg-linear-to-br from-yellow-400 to-orange-500 text-white font-bold text-lg">
                                {getInitials(user)}
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

                {/* Fullscreen Toggle */}
                <button
                    onClick={toggleFullscreen}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
                    aria-label="Toggle fullscreen"
                >
                    {isFullscreen ? (
                        <Minimize className="size-5 text-white" />
                    ) : (
                        <Maximize className="size-5 text-white" />
                    )}
                </button>

                {/* Score Badge */}
                {/* <div className="flex flex-col items-end gap-1">
                    <Badge className="bg-white/20 backdrop-blur-sm border-white/30 text-white px-3 py-1 text-xs font-semibold">
                        <Trophy className="size-3" />
                        <span>{user?.score || 0} pts</span>
                    </Badge>
                    <span className="text-white/70 text-xs">Rank #{user?.rank || '—'}</span>
                </div> */}
            </div>
        </div>
    );
}

export default TopBar;
