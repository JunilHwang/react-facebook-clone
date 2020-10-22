export const socialApiResponseInterceptor =
  ((res) => {
    return res.response;
  },
  (err) => {
    // Handle server error
    if (err?.error?.status) {
      return Promise.reject(err.error);
    }
    // Handle AxiosClient error
    return Promise.reject(err);
  });
