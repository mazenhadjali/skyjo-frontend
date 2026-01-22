import { Navigate, Outlet } from "react-router-dom";
import { Placeholder } from "./components/view/placeholder";

export const ROUTES = {
    ROOT: {
        isLayout: true,
        layout: <Outlet />, // Main layout component
        path: '/',
        children: {
            ROOT: {
                isLayout: false,
                path: '/',
                name: 'Home',
                element: <Navigate to="/auth/login" replace />,
                isMenuItem: false,
            },
            AUTH: {
                isLayout: true,
                layout: <Outlet />, // Main layout component
                path: '/auth',
                children: {
                    LOGIN: {
                        isLayout: false,
                        path: '/login',
                        name: 'Login',
                        element: <Placeholder name="Login" />, // Placeholder for Login component
                        isMenuItem: false,
                    },
                    REGISTER: {
                        isLayout: false,
                        path: '/register',
                        name: 'Register',
                        element: <Placeholder name="Register" />, // Placeholder for Register component
                        isMenuItem: false,
                    },
                },
            },
            DASHBOARD: {
                isLayout: true,
                layout: <Outlet />, // Main layout component
                path: '/dashboard',
                children: {
                    HOME: {
                        isLayout: false,
                        path: '/dashboard',
                        name: 'Dashboard Home',
                        element: <Placeholder name="Dashboard Home" />, // Placeholder for Dashboard Home component
                        isMenuItem: true,
                    },
                    PROFILE: {
                        isLayout: false,
                        path: '/profile',
                        name: 'Profile',
                        element: <Placeholder name="Profile" />, // Placeholder for Profile component
                        isMenuItem: true,
                    },
                    STATS: {
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