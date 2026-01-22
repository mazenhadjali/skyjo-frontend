const BASE_URL = "http://localhost:8085/api"

export const ENDPOINTS = {
    AUTH: {
        LOGIN: `${BASE_URL}/auth/login`,
        REGISTER: `${BASE_URL}/auth/register`,
        REFRESH_TOKEN: `${BASE_URL}/auth/refresh-token`
    },
    USER: {
        PROFILE: `${BASE_URL}/user/profile`,
        STATS: `${BASE_URL}/user/stats`
    }
};