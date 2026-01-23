import React from "react";
import { Outlet } from "react-router-dom";
import SuperLayout from "../super-layout";

export const AuthenticationLayout = () => {
    return (
        <SuperLayout title="SKYJO • Auth">
            {/* SKYJO-inspired vibrant gradient background */}
            <div className="fixed inset-0 -z-10 bg-linear-to-br from-emerald-300 via-sky-300 to-fuchsia-300 dark:from-emerald-900 dark:via-sky-900 dark:to-fuchsia-900" />

            {/* Mobile viewport panel */}
            <div className="w-full mx-auto px-4">
                <div className="bg-card text-card-foreground rounded-3xl border shadow-lg overflow-hidden">
                    <div className="px-6 pt-6 pb-4 border-b">
                        <h1 className="text-center text-3xl font-extrabold tracking-wider">
                            SKYJO
                        </h1>
                        <p className="text-muted-foreground text-center text-sm mt-1">
                            Playful, modern, and fun card game experience
                        </p>
                    </div>
                    <div className="p-6">
                        <Outlet />
                    </div>
                </div>
            </div>
        </SuperLayout>
    );
};

export default AuthenticationLayout;