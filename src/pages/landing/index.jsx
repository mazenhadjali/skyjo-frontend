import { useUserStore } from '@/store';
import React from 'react';
import TopBar from './components/top-bar';
import BottomBar from './components/buttom-bar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Users, Zap, Crown, Sparkles } from 'lucide-react';

function Landing() {
    const { user } = useUserStore();

    const gameStats = [
        { label: 'Games Played', value: user?.gamesPlayed || 0, icon: Play, color: 'text-blue-400' },
        { label: 'Win Rate', value: `${user?.winRate || 0}%`, icon: Crown, color: 'text-yellow-400' },
        { label: 'Best Score', value: user?.bestScore || 0, icon: Zap, color: 'text-purple-400' },
    ];

    return (
        <div className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl overflow-hidden h-screen flex flex-col">
            {/* Top Bar */}
            <TopBar user={user} />

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
                {/* Welcome Section */}
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Welcome to Skyjo
                    </h1>
                    <p className="text-slate-400 text-sm">
                        Challenge players worldwide in this exciting card game!
                    </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3">
                    {gameStats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 p-3 text-center space-y-1">
                                <Icon className={`size-5 mx-auto ${stat.color}`} />
                                <div className="text-xl font-bold text-white">{stat.value}</div>
                                <div className="text-xs text-slate-400">{stat.label}</div>
                            </Card>
                        );
                    })}
                </div>

                {/* Play Button */}
                <Card className="bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 border-none p-6 text-center space-y-4 relative overflow-hidden">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 animate-pulse" style={{
                            backgroundImage: `radial-gradient(circle at 20% 50%, white 2px, transparent 2px),
                                             radial-gradient(circle at 80% 80%, white 2px, transparent 2px)`,
                            backgroundSize: '60px 60px'
                        }}></div>
                    </div>

                    <div className="relative z-10">
                        <Sparkles className="size-8 mx-auto mb-2 text-yellow-300 animate-pulse" />
                        <h3 className="text-xl font-bold text-white mb-2">Ready to Play?</h3>
                        <p className="text-white/80 text-sm mb-4">Start a new game or join an existing match</p>
                        <div className="flex gap-3">
                            <Button className="flex-1 bg-white text-purple-600 hover:bg-white/90 font-semibold shadow-lg">
                                <Play className="size-4 mr-2" />
                                Quick Match
                            </Button>
                            <Button className="flex-1 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-semibold border border-white/30">
                                <Users className="size-4 mr-2" />
                                Create Room
                            </Button>
                        </div>
                    </div>
                </Card>

                {/* Recent Activity */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">Recent Matches</h3>
                        <Badge variant="outline" className="border-slate-600 text-slate-400">
                            Last 24h
                        </Badge>
                    </div>

                    {[1, 2, 3].map((_, index) => (
                        <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className={`size-10 rounded-full flex items-center justify-center ${index === 0 ? 'bg-green-500/20 text-green-400' :
                                    index === 1 ? 'bg-red-500/20 text-red-400' :
                                        'bg-green-500/20 text-green-400'
                                    }`}>
                                    {index === 0 ? '🏆' : index === 1 ? '😔' : '🏆'}
                                </div>
                                <div>
                                    <div className="font-medium text-white">vs Player {index + 1}</div>
                                    <div className="text-xs text-slate-400">
                                        {index === 0 ? 'Victory' : index === 1 ? 'Defeat' : 'Victory'} • 5 min ago
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className={`font-bold ${index === 1 ? 'text-red-400' : 'text-green-400'
                                    }`}>
                                    {index === 0 ? '+25' : index === 1 ? '-10' : '+30'}
                                </div>
                                <div className="text-xs text-slate-400">points</div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Bottom Navigation */}
            <BottomBar />
        </div>
    );
}

export default Landing;