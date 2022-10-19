import axios from 'axios';
import type { AxiosResponse } from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

axiosInstance.interceptors.response.use((res: AxiosResponse) => {
  return res.data;
});
