import { handleCopy } from "@/utils/user.utils";
import { Copy } from "lucide-react";

export const InfoCard = ({ icon: Icon, label, value, copyable = false }) => (
    <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-cyan-400/30 transition-all duration-300">
        <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3 flex-1">
                <div className="p-2.5 rounded-lg bg-cyan-400/10 group-hover:bg-cyan-400/20 transition-colors">
                    <Icon className="size-5 text-cyan-400" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-slate-400 mb-1">{label}</p>
                    <p className="text-sm font-semibold text-white break-all">{value}</p>
                </div>
            </div>
            {copyable && (
                <button
                    onClick={() => handleCopy(value)}
                    className="p-1.5 rounded-lg bg-slate-700/50 hover:bg-cyan-400/20 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                    <Copy className="size-4" />
                </button>
            )}
        </div>
    </div>
)