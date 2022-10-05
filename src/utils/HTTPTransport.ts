import { Nullable } from "~src/utils/types";
import queryStringify from "~src/utils/myLodash/queryStringify";

export type Options = {
  method: METHODS;
  data?: Nullable<unknown>;
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
export default class HTTPTransport {
  static API_URL = "https://ya-praktikum.tech/api/v2";
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  public get(
    url: string = "/",
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(this.endpoint + url, {
      ...options,
      method: METHODS.GET,
    });
  }

  public post(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(this.endpoint + url, {
      ...options,
      method: METHODS.POST,
      data: options.data,
    });
  }

  public put(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(this.endpoint + url, {
      ...options,
      method: METHODS.PUT,
      data: options.data,
    });
  }

  public patch(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(this.endpoint + url, {
      ...options,
      method: METHODS.PATCH,
      data: options.data,
    });
  }

  public delete(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(this.endpoint + url, {
      ...options,
      method: METHODS.DELETE,
    });
  }

  private request(
    url: string,
    options: Options = { method: METHODS.GET }
  ): Promise<XMLHttpRequest> {
    const { headers = null, method, data, timeout } = options;

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
      } else {
        if (!(data instanceof FormData)) {
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.responseType = "json";
        }
      }

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = () => reject({ reason: "abort" });
      xhr.onerror = () => reject({ reason: "network error" });
      if (timeout) {
        xhr.timeout = timeout;
      }
      xhr.ontimeout = () => reject({ reason: "timeout" });

      xhr.withCredentials = true;

      if (isGet || !data) {
        xhr.send();
      } else {
        if (headers) {
          xhr.send(data as Nullable<Document | XMLHttpRequestBodyInit>);
        } else {
          if (!(data instanceof FormData)) {
            xhr.send(JSON.stringify(data));
          } else {
            xhr.send(data as Nullable<Document | XMLHttpRequestBodyInit>);
          }
        }
      }
    });
  }
}
