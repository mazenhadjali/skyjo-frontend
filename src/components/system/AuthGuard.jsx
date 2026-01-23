import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useUserStore } from "@/store";
import { getPathByRouteId } from "@/utils/routes.utils";
import { ROUTE_IDS } from "@/routes";

const AuthGuard = ({ children }) => {
    const { isAuthenticated, initialize } = useUserStore();
    const [isInitialized, setIsInitialized] = useState(false);

    // Initialize auth state (loads profile if token exists)
    useEffect(() => {
        const initAuth = async () => {
            await initialize();
            setIsInitialized(true);
        };
        initAuth();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Show nothing while initializing (prevents flash of login page)
    if (!isInitialized) {
        return null;
    }

    // Redirect to login if not authenticated after initialization
    if (!isAuthenticated) {
        return <Navigate to={getPathByRouteId(ROUTE_IDS.LOGIN)} replace />;
    }

    // Authenticated - render protected content
    return children;
};

export default AuthGuard;
