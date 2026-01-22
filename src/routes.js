
export const ROUTES = {
    AUTH: {
        isLayout: true,
        layout: null, // Placeholder for Auth layout component
        children: {
            LOGIN: {
                path: '/login',
                name: 'Login',
                element: null, // Placeholder for Login component
                isMenuItem: false,
            },
            REGISTER: {
                path: '/register',
                name: 'Register',
                element: null, // Placeholder for Register component
                isMenuItem: false,
            },
        },
    },
    DASHBOARD: {
        isLayout: true,
        layout: null, // Placeholder for Dashboard layout component
        children: {
            HOME: {
                path: '/dashboard',
                name: 'Dashboard Home',
                element: null, // Placeholder for Dashboard Home component
                isMenuItem: true,
            },
            PROFILE: {
                path: '/profile',
                name: 'Profile',
                element: null, // Placeholder for Profile component
                isMenuItem: true,
            },
            STATS: {
                path: '/stats',
                name: 'Statistics',
                element: null, // Placeholder for Statistics component
                isMenuItem: true,
            },
        },
    },
};