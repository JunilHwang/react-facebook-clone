import axios from 'axios';

export default class RestClient {
  constructor({ baseURL, timeout = 5000, headers = {} }, responseMiddleware = ({ data }) => data) {
    const client = axios.create({ baseURL, timeout, headers });
    for (const methodName of ['get', 'post', 'put', 'delete', 'patch']) {
      this[methodName] = (...args) =>
        client[methodName](...args)
          .then(responseMiddleware)
          .catch(({ response: { data } }) => {
            throw new Error(data.error.message);
          });
    }
  }
}
