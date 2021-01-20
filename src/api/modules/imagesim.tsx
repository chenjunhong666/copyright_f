import axios from '../axios'

export const calsim = (data: any) => {
    return axios({
        url: '/api2/v1/cal',
        method: 'post',
        data
    })
}

export const rand = () => {
    return axios({
        url: '/api2/v1/rand',
        method: 'post'
    })
}
