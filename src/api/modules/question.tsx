import axios from '../axios'

/* 
 * 系统登录模块
 */


export const getQuestionOverviewList = (data?: any) => {
    return axios({
        url: '/v1/question/list',
        method: 'post',
        data
    })
}

export const addQuestion = (data: any) => {
    return axios({
        url: '/v1/question/',
        method: 'post',
        data
    })
}

export const addAnswer = (data: any) => {
    return axios({
        url: '/v1/answer/',
        method: 'post',
        data
    })
}

export const getAnswerList = (data: any) => {
    return axios({
        url: '/v1/answer/list',
        method: 'post',
        data
    })
}

export const addQuestionAgreeOrDisagree = (data: any) => {
    return axios({
        url: '/v1/answer/agree_disagree',
        method: 'post',
        data
    })
}