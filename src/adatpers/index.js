import RestClient from './RestClient';

export const socialAdapter = new RestClient(
  {
    baseURL: 'http://15.164.170.69:8080/api',
  },
  ({ data: { error, response, success } }) => {
    if (!success) {
      throw new Error(error);
    }
    return response;
  }
);
