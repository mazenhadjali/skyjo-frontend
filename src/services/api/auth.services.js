import axios from 'axios';
import { ENDPOINTS } from '../endoints';
import { getTokens, setTokens } from '@/utils/system.utils';

export const registerUser = async (userData) => {
    await axios.post(ENDPOINTS.AUTH.REGISTER, userData)
        .then(response => {
            setTokens({
                accessToken: response.data.accessToken,
                refreshToken: response.data.refreshToken
            });
            return response.data;
        })
        .catch(error => {
            console.error("Error registering user:", error);
            throw error;
        });
};

export const loginUser = async (credentials = { email: "", username: "", password: "" }) => {
    await axios.post(ENDPOINTS.AUTH.LOGIN, credentials)
        .then(async response => {
            await setTokens({
                accessToken: response.data.accessToken,
                refreshToken: response.data.refreshToken
            });
            return response.data;
        })
        .catch(error => {
            console.error("Error logging in:", error);
            throw error;
        });
};

export const refreshToken = async () => {
    const { refreshToken } = getTokens();
    await axios.post(ENDPOINTS.AUTH.REFRESH_TOKEN, { refreshToken })
        .then(response => {
            setTokens({
                accessToken: response.data.accessToken,
                refreshToken: response.data.refreshToken
            })
            return response.data;
        })
        .catch(error => {
            console.error("Error refreshing token:", error);
            throw error;
        });
};
