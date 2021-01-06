import axios from '../axios'

export const addComment = (data: any) => {
    return axios({
        url: '/v1/comment/',
        method: 'post',
        data
    })
}

export const getCommentList = (data: any) => {
    return axios({
        url: '/v1/comment/list',
        method: 'post',
        data
    })
}