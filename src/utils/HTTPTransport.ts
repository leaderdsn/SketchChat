import { Nullable } from "~src/utils/types";

export type Options = {
  method: METHODS;
  data?: Nullable<any>;
  timeout?: Nullable<number>;
  headers?: Nullable<{}>;
};

export type OptionsWithoutMethod = Omit<Options, "method">;

export enum METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

function queryStringify(data: Record<string, unknown>) {
  if (typeof data !== "object") {
    throw new Error("Data must be object");
  }
  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? "&" : ""}`;
  }, "?");
}

export default class HTTPTransport {
  get(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHODS.GET });
  }
  post(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHODS.POST });
  }
  put(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHODS.PUT });
  }
  delete(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHODS.DELETE });
  }

  request(
    url: string,
    options: Options = { method: METHODS.GET }
  ): Promise<XMLHttpRequest> {
    const { headers = {}, method, data, timeout } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject("No method");
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);

      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value as string);
        });
      }

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      if (timeout) {
        xhr.timeout = timeout;
      }
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  }
}
