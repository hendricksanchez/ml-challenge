import axios, { AxiosInstance } from "axios";
import { onRequest } from "./onRequest";

export const httpClient = (baseURL: string): AxiosInstance => {
  const instance = axios.create({ baseURL });
  instance.interceptors.request.use(onRequest);
  return instance;
};
