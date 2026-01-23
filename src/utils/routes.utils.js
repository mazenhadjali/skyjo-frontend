// Simple path finder for a given Route ID based on src/routes.jsx
import { ROUTES } from "../routes";

function buildPath(base, path) {
    if (!path) return base || "/";
    if (!base) return path;
    // If child is already absolute under the base, keep it
    if (path.startsWith(base)) return path;
    return base + (path.startsWith("/") ? path : "/" + path);
}

function find(node, base, targetId) {
    if (!node) return null;

    const isLayout = node.isLayout === true;
    const nodePath = typeof node.path === "string" ? node.path : "";
    // Layout paths in routes.jsx are absolute (e.g., "/", "/auth", "/dashboard")
    const nextBase = isLayout && nodePath ? nodePath : base;

    if (node.id === targetId) {
        return isLayout ? (nextBase || "/") : buildPath(nextBase, nodePath);
    }

    const children = node.children;
    if (children && typeof children === "object") {
        for (const key of Object.keys(children)) {
            const res = find(children[key], nextBase, targetId);
            if (res) return res;
        }
    }
    return null;
}

export function getPathByRouteId(routeId) {
    if (!routeId) return null;
    return find(ROUTES?.ROOT, "", routeId) || null;
}

