import axios from 'axios';
import { socialApiResponseInterceptor } from './helpers';

const SOCIAL_SERVER_URL = 'http://15.164.170.69:8080';

const socialApiClient = axios.create({
  baseURL: SOCIAL_SERVER_URL,
});

export { socialApiClient };
