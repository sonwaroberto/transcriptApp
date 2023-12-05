import axios, {AxiosError} from 'axios';

// module still under construction
// when tested certain parameters or configurations
// will need to be adjusted.

export const handleErrorMessages = (error: AxiosError | Error) => {
  let message;
  if (axios.isAxiosError(error)) {
    if (error.code === 'ERR_NETWORK') {
      return {
        message: error.message,
        status: error.response?.status,
      };
    }
    if (error.response?.status === 401) {
      if (error.response.data?.error?.name === 'TokenExpiredError') {
        return {
          message: error.response.data?.error.name,
          status: error.response?.status,
        };
      }
    }
    if (error?.response !== null && error.response?.data !== null) {
      message = error.response?.data;
    }

    return {message: message.error, status: error.response?.status};
  } else {
    if (error.message !== null) {
      message = error.message;
    } else {
      message = error;
    }
  }

  return {message, status: error};
};
