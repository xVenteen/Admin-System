import Axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { GlobalStore } from "@/store";
import { AxiosCanceler } from "./axiosCancel";

const baseURL = import.meta.env.VITE_API_URL;
const axiosCanceler = new AxiosCanceler();

const config = {
  baseURL,
  timeout: 10000,
  withCredentials: true,
};

const axios = Axios.create(config);

/**
 * 请求拦截
 */
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const globalStore = GlobalStore();
    axiosCanceler.addPending(config);
    config.data = JSON.stringify(config.data);
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

/**
 * 响应拦截
 */
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data, config } = response;
    const globalStore = GlobalStore();

    // * 在请求结束后，移除本次请求
    axiosCanceler.removePending(config);
    return response.data;
  },
  (error: AxiosError) => {
    // 关闭 loading

    // 对响应错误做点什么
    switch (error.response?.status) {
      case 400:
        error.message = "请求错误(400)";
        break;
      case 401:
        error.message = "未授权(401)";
        break;
      case 403:
        error.message = "拒绝访问(403)";
        break;
      case 404:
        error.message = "请求出错(404)";
        break;
      case 408:
        error.message = "请求超时(408)";
        break;
      case 500:
        error.message = "服务器错误(500)";
        break;
      case 501:
        error.message = "服务未实现(501)";
        break;
      case 502:
        error.message = "网络错误(502)";
        break;
      case 503:
        error.message = "服务不可用(503)";
        break;
      case 504:
        error.message = "网络超时(504)";
        break;
      case 505:
        error.message = "HTTP版本不受支持(505)";
        break;
      default:
        error.message = `连接出错(${error.response?.status})!`;
    }

    return Promise.reject(error);
  }
);

export default axios;
