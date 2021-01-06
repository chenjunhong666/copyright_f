import axios from '../axios'

/* 
 * 系统登录模块
 */
export const login = (data: any) => {
    return axios({
        url: '/v1/login',
        method: 'post',
        data
    })
}

// 登出
export const logout = () => {
    return axios({
        url: '/v1/logout',
        method: 'post',

    })
}
export const registe = (data: any) => {
    return axios({
        url: '/v1/registe',
        method: 'post',
        data
    })
}
export const verification = (data: any) => {
    return axios({
        url: '/v1/verification',
        method: 'post',
        data

    })
}
export const judge = () => {
    return axios({
        url: '/v1/judge',
        method: 'post',

    })
}

export const info = () => {
    return axios({
        url: '/v1/info',
        method: 'post',
    })
}
