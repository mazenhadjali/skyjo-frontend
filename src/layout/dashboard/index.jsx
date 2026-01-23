import React from 'react'
import SuperLayout from '../super-layout'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {

    return (
        <SuperLayout>
            {/* SKYJO-inspired vibrant gradient background */}
            <div className="fixed inset-0 -z-10 bg-linear-to-br from-emerald-300 via-sky-300 to-fuchsia-300 dark:from-emerald-900 dark:via-sky-900 dark:to-fuchsia-900" />

            {/* Mobile viewport panel */}
            <div className="w-full mx-auto h-full">
                <Outlet />
            </div>
        </SuperLayout>
    )
}

export default DashboardLayout