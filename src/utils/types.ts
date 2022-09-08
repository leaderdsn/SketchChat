import { METHODS } from "~src/utils/HTTPTransport";

export type Nullable<T> = T | null;
export type Keys<T extends Record<string, unknown>> = keyof T;
export type Values<T extends Record<string, unknown>> = T[Keys<T>];

export type Options = {
  method: METHODS;
  data?: any;
  timeout?: number;
  headers?: string;
};

export type OptionsWithoutMethod = Omit<Options, "method">;
