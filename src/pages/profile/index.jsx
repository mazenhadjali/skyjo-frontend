import React from 'react'
import { Mail, Phone, Globe, User } from 'lucide-react'
import { InfoCard } from './components/info-card'
import { getInitials } from '@/utils/user.utils'
import { useUserStore } from '@/store'

function Profile() {
    // Sample user data
    const { user } = useUserStore();

    return (
        <div className="px-4 py-6 pb-20 space-y-6 h-full overflow-y-auto">
            {/* Profile Header Card */}
            <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-400/30 p-6 backdrop-blur-sm">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-linear-to-br from-slate-900 to-slate-800 opacity-50 -z-10" />

                <div className="flex items-center gap-4 relative z-10">
                    {/* Avatar */}
                    <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                            <span className="text-2xl font-bold text-white">{getInitials(user)}</span>
                        </div>
                        <div className="absolute bottom-0 right-0 w-6 h-6 bg-emerald-400 rounded-full border-2 border-slate-900 shadow-lg" />
                    </div>

                    {/* User Info */}
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold text-white">
                            {user.firstname} {user.lastname}
                        </h1>
                        <p className="text-sm text-cyan-400 font-medium">@{user.username}</p>
                    </div>
                </div>
            </div>

            {/* Personal Information Section */}
            <div>
                <h2 className="text-lg font-bold text-white mb-3 px-1">Personal Information</h2>
                <div className="space-y-3">
                    <InfoCard
                        icon={User}
                        label="First Name"
                        value={`${user.firstname}`}
                    />
                    <InfoCard
                        icon={User}
                        label="Last Name"
                        value={`${user.lastname}`}
                    />
                    <InfoCard
                        icon={Mail}
                        label="Email Address"
                        value={user.email}
                        copyable
                    />
                    <InfoCard
                        icon={Phone}
                        label="Phone Number"
                        value={user.phone}
                        copyable
                    />
                </div>
            </div>

            {/* Account Settings Section */}
            <div>
                <h2 className="text-lg font-bold text-white mb-3 px-1">Account Settings</h2>
                <div className="space-y-3">
                    <InfoCard
                        icon={Globe}
                        label="Default Language"
                        value={user.defaultLanguage === 'en' ? 'English' : user.defaultLanguage}
                    />
                    <InfoCard
                        icon={User}
                        label="User ID"
                        value={user.id}
                        copyable
                    />
                </div>
            </div>
        </div>
    )
}

export default Profile