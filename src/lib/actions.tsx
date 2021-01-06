export const user = {
    setLogin: (data) => {
        return {
            type: 'user/setLogin',
            payload: data
        }
    },
    setInfo: (data) => {
        return {
            type: 'user/setInfo',
            payload: data
        }
    },
}