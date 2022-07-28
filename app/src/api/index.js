import axios from "axios";
import { setInterceptors } from "./common/interceptors";
axios.defaults.withCredentials = true;

function createInstance(url) {
  return axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}${url}`,
  });
}

function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}${url}`,
  });
  return setInterceptors(instance);
}

export const member = createInstance("/api");