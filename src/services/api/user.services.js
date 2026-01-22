import axiosClient from '../axios-client';
import { ENDPOINTS } from '../endoints';

export const getProfile = async () => {
    const response = await axiosClient.get(ENDPOINTS.USER.PROFILE);
    return response.data;
};

export const getUserStats = async () => {
    const response = await axiosClient.get(ENDPOINTS.USER.STATS);
    return response.data;
};

export const updateProfile = async (profileData) => {
    const response = await axiosClient.put(ENDPOINTS.USER.PROFILE, profileData);
    return response.data;
};
