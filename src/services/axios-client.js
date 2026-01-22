import axios from 'axios';
import { getTokens } from '../utils/system.utils';

// Create a pre-configured axios instance
const axiosClient = axios.create({
	baseURL: import.meta.env?.VITE_API_BASE_URL || '/api',
	headers: {
		'Content-Type': 'application/json',
	},
});

// Inject Authorization header from localStorage before each request
axiosClient.interceptors.request.use(
	(config) => {
		const { accessToken } = getTokens();
		if (accessToken) {
			config.headers = config.headers || {};
			config.headers.Authorization = `Bearer ${accessToken}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

export default axiosClient;

