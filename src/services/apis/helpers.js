export const socialApiResponseInterceptor =
  (({ data: { error, response, success } }) => {
    if (!success) {
      return Promise.reject(error);
    }
    return response;
  },
  (err) => {
    // Handle server error
    if (err?.error?.status) {
      return Promise.reject(err.error);
    }
    // Handle AxiosClient error
    return Promise.reject(err);
  });
