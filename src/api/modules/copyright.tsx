import axios from '../axios'

export const getDocSim = (data: any) => {
    return axios({
        url: '/v1/docsim',
        method: 'post',
        data
    })
}

export const getIllegalText = (data: any) => {
    return axios({
        url: '/v1/illegalText',
        method: 'post',
        data
    })
}

export const getRandText = () => {
    return axios({
        url: '/v1/rand',
        method: 'post',
    })
}
