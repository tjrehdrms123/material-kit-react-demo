// Add a request interceptor
// import store from '@/store/index';
// import { initialState } from "../../reducers/adminUser";
// import { getAuthFromCookie } from "../../utils/cookies";

export function setInterceptors(instance) {
  instance.interceptors.request.use(
    function (config) {
      // Do something before request is sent

      const url = config.baseURL.split("/");
      // const base = process.env.NEXT_PUBLIC_API_URL.split("/");
      // const kakao = process.env.NEXT_PUBLIC_KAKAO_ADDRESS_LOCATION.split("/");

      // if (base[2] === url[2]) {
      //   const token = getAuthFromCookie();
      //   config.headers.Authorization = `Bearer ${token}`;
      // } else if (kakao[2] === url[2]) {
      //   config.headers.Authorization = `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`;
      // } else {
      // }

      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
  return instance;
}
