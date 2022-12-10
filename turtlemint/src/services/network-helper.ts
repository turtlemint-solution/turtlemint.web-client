import { request } from "./network-handler";
import { HTTPStatusCode } from "../common/enums";

interface ReturnValueType {
  status: number;
  data: object;
  headers: any;
  error: object;
}

interface ErrorObjectType {
  method: any;
  url: string;
  status: string;
  message: string;
  serverMessage?: any;
}

export const executeRequestAsync = async (req: any) => {
  const returnValue: ReturnValueType = {
    status: 0,
    data: {},
    headers: "",
    error: {},
  };
  let response;
  response = await request({
    method: req.method,
    url: req.url,
    params: req.queryStringParams,
    data: req.data,
    headers: req?.headers,
  });
  if (
    [
      HTTPStatusCode.OK,
      HTTPStatusCode.CREATED,
      HTTPStatusCode.ACCEPTED,
    ].includes(response?.status)
  ) {
    const { status } = response;
    returnValue.data = response?.data;
    returnValue.status = status;
    returnValue.headers = response?.headers;
    return returnValue;
  } else {
    let serverMessage =
      (response?.data?.errors || [])
        .map((el: any) => `${el.fieldName} - ${el.message}`)
        .join(`\n`) || response?.data?.message;
    const errorObject: ErrorObjectType = {
      method: response?.config?.method,
      url: response?.config?.url,
      status: response?.status,
      message: response?.message,
      serverMessage,
    };
    returnValue.status = response?.status;
    returnValue.data = {};
    returnValue.error = errorObject;
    return returnValue;
  }
};
