import { create } from "zustand";
import { loginUser } from "@/services/api/auth.services";
import { getProfile } from "@/services/api/user.services";
import { getTokens, clearTokens } from "@/utils/system.utils";

export const useUserStore = create((set, get) => ({
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,

    // Set / clear user synchronously
    setUser: (user) => set({ user, isAuthenticated: !!user }),
    clearUser: () => set({ user: null, isAuthenticated: false }),

    // Fetch the current profile (requires valid access token)
    loadProfile: async () => {
        try {
            set({ loading: true, error: null });
            const res = await getProfile();
            const data = res?.data || null;
            set({ user: data, isAuthenticated: !!data, loading: false });
            return { success: !!data, data };
        } catch (err) {
            set({ error: err, loading: false, isAuthenticated: false, user: null });
            return { success: false, error: err };
        }
    },

    // Login via service, then load profile
    login: async (credentials) => {
        try {
            set({ loading: true, error: null });
            const res = await loginUser(credentials);
            if (!res?.success) {
                set({ loading: false, error: res?.message || 'Login failed', isAuthenticated: false });
                return { success: false, error: res?.message };
            }
            // Tokens saved by service; now load profile
            const profileResult = await get().loadProfile();
            set({ loading: false });
            return { success: profileResult.success };
        } catch (err) {
            set({ loading: false, error: err, isAuthenticated: false });
            return { success: false, error: err };
        }
    },

    // Logout: clear tokens and store
    logout: () => {
        clearTokens();
        set({ user: null, isAuthenticated: false, error: null });
    },

    // Initialize auth from tokens (load profile if token present)
    initialize: async () => {
        const { accessToken } = getTokens();
        if (accessToken) {
            await get().loadProfile();
        } else {
            set({ user: null, isAuthenticated: false, loading: false });
        }
    },
}));

