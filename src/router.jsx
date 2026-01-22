import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { ROUTES } from './routes';

const makeRelative = (parentAbs, childRaw) => {
    let c = childRaw || '';
    if (parentAbs && c.startsWith(parentAbs)) c = c.slice(parentAbs.length);
    if (c.startsWith('/')) c = c.slice(1);
    return c;
};

const absJoin = (parentAbs, rel) => {
    if (!parentAbs) return rel || '/';
    if (!rel) return parentAbs;
    return parentAbs.replace(/\/+$/g, '') + '/' + rel;
};

const build = (node, parentAbs = null) => {

    const raw = node.path || '';
    const isIndex = !!parentAbs && (raw === parentAbs || raw === '/' || raw === '');

    let route;
    let currentAbs;

    if (!parentAbs) {
        route = { path: raw || '/', element: node.element };
        currentAbs = route.path;
    } else if (isIndex) {
        route = { index: true, element: node.element };
        currentAbs = parentAbs;
    } else {
        const rel = makeRelative(parentAbs, raw);
        route = { path: rel || '', element: node.element };
        currentAbs = absJoin(parentAbs, rel);
    }

    if (node.children) {
        route.children = Object.values(node.children).map((child) => build(child, currentAbs));
    }

    return route;
};

// Transform our ROUTES config into React Router RouteObjects using the recursive function
const buildRoutesFromConfig = (config) => {
    if (!config || typeof config !== 'object') return [];
    return Object.values(config).map((node) => build(node));
};

// Default router built from current ROUTES
const routeObjects = buildRoutesFromConfig(ROUTES);

// Provider component to mount in your app root
export const AppRouterProvider = () => {
    const router = createBrowserRouter(routeObjects);
    return <RouterProvider router={router} />;
};

