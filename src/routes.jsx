import { Navigate, Outlet } from "react-router-dom";
import { AuthenticationLayout } from "./layout/authentication";
import Login from "./pages/authentication/login";
import Register from "./pages/authentication/register";
import { Placeholder } from "./components/view/placeholder";

export const ROUTE_IDS = {
    ROOT: 'ROOT',
    AUTH: 'AUTH',
    LOGIN: 'LOGIN',
    REGISTER: 'REGISTER',
    DASHBOARD: 'DASHBOARD',
    PROFILE: 'PROFILE',
    STATS: 'STATS',
};

export const ROUTES = {
    ROOT: {
        id: ROUTE_IDS.ROOT,
        isLayout: true,
        layout: <Outlet />, // Main layout component
        path: '/',
        children: {
            ROOT: {
                id: ROUTE_IDS.ROOT,
                isLayout: false,
                path: '/',
                name: 'Home',
                element: <Navigate to="/auth/login" replace />,
                isMenuItem: false,
            },
            AUTH: {
                id: ROUTE_IDS.AUTH,
                isLayout: true,
                element: <AuthenticationLayout />, // Authentication layout component
                path: '/auth',
                children: {
                    AUTH: {
                        id: ROUTE_IDS.AUTH,
                        isLayout: false,
                        path: '/auth',
                        name: 'Authentication Home',
                        element: <Navigate to="/auth/login" replace />,
                        isMenuItem: false,
                    },
                    LOGIN: {
                        id: ROUTE_IDS.LOGIN,
                        isLayout: false,
                        path: '/login',
                        name: 'Login',
                        element: <Login />, // Login component
                        isMenuItem: false,
                    },
                    REGISTER: {
                        id: ROUTE_IDS.REGISTER,
                        isLayout: false,
                        path: '/register',
                        name: 'Register',
                        element: <Register />, // Register component
                        isMenuItem: false,
                    },
                },
            },
            DASHBOARD: {
                id: ROUTE_IDS.DASHBOARD,
                isLayout: true,
                layout: <Outlet />, // Main layout component
                path: '/dashboard',
                children: {
                    HOME: {
                        id: ROUTE_IDS.DASHBOARD,
                        isLayout: false,
                        path: '/dashboard',
                        name: 'Dashboard Home',
                        element: <Placeholder name="Dashboard Home" />, // Placeholder for Dashboard Home component
                        isMenuItem: true,
                    },
                    PROFILE: {
                        id: ROUTE_IDS.PROFILE,
                        isLayout: false,
                        path: '/profile',
                        name: 'Profile',
                        element: <Placeholder name="Profile" />, // Placeholder for Profile component
                        isMenuItem: true,
                    },
                    STATS: {
                        id: ROUTE_IDS.STATS,
                        isLayout: false,
                        path: '/stats',
                        name: 'Statistics',
                        element: <Placeholder name="Statistics" />, // Placeholder for Statistics component
                        isMenuItem: true,
                    },
                },
            },
        },
    },

};