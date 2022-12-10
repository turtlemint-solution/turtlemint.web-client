import axios from "axios";

/**
 * Create an Axios Client with defaults
 */
export const client = axios.create({
  baseURL: "",
});

/**
 * Request Wrapper with default success/error actions
 */
export const request = function (options: any) {
  const onSuccess = function (response: any) {
    return response;
  };
  const onError = function (error: any) {
    console.log(error.response);
    return error.response;
  };
  return client(options).then(onSuccess).catch(onError);
};
