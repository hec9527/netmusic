import axios from 'axios';
import { baseUrl } from '../config';

const http = {};

/**
 * 网络请求配置
 * 拦截所有请求并且做统一的容错处理
 */
const instance = axios.create({
  timeout: 30 * 1000,
  baseUrl,
  withCredentials: true, // 允许跨域发生cookie
  validateStatus(status) {
    const dic = {
      400: '请求出错',
      401: '授权失败，请重新登录',
      403: '拒绝访问',
      404: '请求资源未找到',
      500: '服务器错误'
    };
    // eslint-disable-next-line no-console
    dic[status] && console.warn(`statusCode:${status}`, dic[status]);
    return status >= 200 && status < 300;
  }
});

/**
 * 拦截请求
 * 部分请求添加请求头，或者添加参数
 */
instance.interceptors.request.use(
  config => {
    // 请求头添加token
    // const token = {};
    // if (token) {
    //   config.headers.Authorization = token;
    // }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

/**
 * 拦截响应
 * 异常处理
 * http请求信息处理
 */
instance.interceptors.response.use(
  res => {
    // eslint-disable-next-line no-console
    console.log('res:', res);
    return res;
  },
  err => {
    // eslint-disable-next-line no-console
    console.err(err);
    return Promise.reject(err);
  }
);

// 所有请求最终返回数据，http请求状态信息
http.get = function(url, options) {
  return new Promise((resolve, reject) => {
    instance.get(url, options).then(
      res => {
        resolve(res);
      },
      rej => {
        reject(rej);
      }
    );
  });
};

http.post = function(url, data, options) {
  return new Promise((resolve, reject) => {
    instance.post(url, data, options).then(
      res => {
        resolve(res);
      },
      rej => {
        reject(rej);
      }
    );
  });
};

export default http;
