import { InternalAxiosRequestConfig } from "axios";

const token = process.env.ML_ACCESS_TOKEN!;

export const onRequest = (config: InternalAxiosRequestConfig) => {
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
};
