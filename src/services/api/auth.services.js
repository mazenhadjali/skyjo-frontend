import axiosClient from '../axios-client';
import { ENDPOINTS } from '../endoints';
import { getTokens, setTokens } from '@/utils/system.utils';

export const registerUser = async (userData) => {
    try {
        const response = await axiosClient.post(ENDPOINTS.AUTH.REGISTER, userData);
        setTokens({
            accessToken: response.data?.data?.accessToken ?? "",
            refreshToken: response.data?.data?.refreshToken ?? "",
        });
        return response.data;
    } catch (error) {
        console.error("Error registering user:", error);
        return {
            data: null,
            success: false,
            failed: true,
            message: error?.response?.data?.message || "Registration failed",
        };
    }
};

export const loginUser = async (credentials = { email: "", username: "", password: "" }) => {
    try {
        const response = await axiosClient.post(ENDPOINTS.AUTH.LOGIN, credentials);
        await setTokens({
            accessToken: response.data?.data?.accessToken ?? "",
            refreshToken: response.data?.data?.refreshToken ?? "",
        });
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        return {
            data: null,
            success: false,
            failed: true,
            message: error?.response?.data?.message || "Login failed",
        };
    }
};

export const refreshToken = async () => {
    const { refreshToken } = getTokens();
    try {
        const response = await axiosClient.post(ENDPOINTS.AUTH.REFRESH_TOKEN, { refreshToken });
        setTokens({
            accessToken: response.data?.data?.accessToken ?? "",
            refreshToken: response.data?.data?.refreshToken ?? "",
        });
        return response.data;
    } catch (error) {
        console.error("Error refreshing token:", error);
        return {
            data: null,
            success: false,
            failed: true,
            message: error?.response?.data?.message || "Refresh token failed",
        };
    }
};
