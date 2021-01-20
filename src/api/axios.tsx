import axios from 'axios';
import config from './config';
import Cookies from "js-cookie";
import { notification, message } from 'antd';
// import NProgress from 'nprogress';
import {history} from 'umi'
import routerlist from "../lib/routerlist"
axios.defaults.timeout = config.timeout
// axios.defaults.baseURL = config.baseUrl;
axios.defaults.withCredentials = config.withCredentials;
axios.defaults.headers = config.headers;

  

const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '登录过期或用户未登录。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};

axios.interceptors.request.use((config) => {
    // 请求开始，蓝色过渡滚动条开始出现
    // NProgress.start();
    let access_token = Cookies.get('access_token');
    if (access_token) {
        config.headers.Authorization = access_token;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
axios.interceptors.response.use((response) => {
    if (response.data && response.data.access_token) {
        const min = 360;
        var inFifteenMinutes = new Date(new Date().getTime() + min * 60 * 1000);
        Cookies.set('access_token', response.data.access_token, {
            expires: inFifteenMinutes
        });
    }
    return response;
}, (error) => {
    return Promise.reject(error);
});
export default function request(opt) {
    // 调用 axios api，统一拦截
    return axios(opt)
        .then((response) => {
            // >>>>>>>>>>>>>> 请求成功 <<<<<<<<<<<<<<
            // console.log(`【${opt.method} ${opt.url}】请求成功，响应数据：%o`, response);
            if (response.data && response.data.code == 1) {
                message.error(response.data.message);
            }
            return { ...response.data };
        })
        .catch((error) => {
            // >>>>>>>>>>>>>> 请求失败 <<<<<<<<<<<<<<
            // 请求配置发生的错误
            if (!error.response) {
                return console.log('Error', error.message);
            }

            // 响应时状态码处理 
            const status = error.response.status;
            const errortext = codeMessage[status] || error.response.statusText;
            if (status === 401) {
                // history.push(routerlist);
            }
            else {
                notification.error({
                    message: `请求错误 ${status}`,
                    description: errortext,
                });
            }
            // 开发时使用，上线时删除
            // console.log(`【${opt.method} ${opt.url}】请求失败，响应数据：%o`, error.response);
            return Promise.reject(error.response.data);
        });
}