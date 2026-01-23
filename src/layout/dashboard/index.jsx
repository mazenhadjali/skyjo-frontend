import React from 'react'
import SuperLayout from '../super-layout'
import { Outlet } from 'react-router-dom'
import TopBar from './components/top-bar'
import BottomBar from './components/buttom-bar'

function DashboardLayout() {

    return (
        <SuperLayout>
            {/* SKYJO-inspired vibrant gradient background */}
            <div className="fixed inset-0 -z-10 bg-linear-to-br from-emerald-300 via-sky-300 to-fuchsia-300 dark:from-emerald-900 dark:via-sky-900 dark:to-fuchsia-900" />

            {/* Mobile viewport panel */}
            <div className="w-full mx-auto h-full">
                <div className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl overflow-hidden h-screen flex flex-col">
                    {/* Top Bar */}
                    <TopBar />

                    {/* Main Content */}
                    <Outlet />

                    {/* Bottom Navigation */}
                    <BottomBar />
                </div>
            </div>
        </SuperLayout>
    )
}

export default DashboardLayout