import axios from 'axios';
import { authService } from '@/services';

const SOCIAL_SERVER_URL = 'http://15.164.170.69:8081/api';

const socialApiClient = axios.create({
  baseURL: SOCIAL_SERVER_URL,
  timeout: 5000,
});

socialApiClient.interceptors.request.use((config) => {
  const { apiToken } = authService.get();
  if (apiToken !== null) {
    config.headers.api_key = `Bearer ${apiToken}`;
  }
  return config;
});

socialApiClient.interceptors.response.use(
  ({ data: { error, response, success } }) => {
    if (!success) {
      return Promise.reject(error);
    }
    return response;
  },
  (err) => {
    if (err?.error?.status) {
      return Promise.reject(err.error);
    }
    return Promise.reject(err);
  }
);

export { socialApiClient };
