import React from "react";
import { Outlet } from "react-router-dom";
import SuperLayout from "../super-layout";

export const AuthenticationLayout = () => {
    return (
        <SuperLayout title="SKYJO • Auth">
            <Outlet />
        </SuperLayout>
    );
};

export default AuthenticationLayout;