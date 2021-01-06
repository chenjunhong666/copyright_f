const user = {
    state: {
        isLogin: false,
        userName: "",
        nickName: "",
        userID: "",
    },
    reducers: {
        setInfo: (state, action) => {
            state.userName = action.payload.userName
            state.nickName = action.payload.nickName
            state.userID = action.payload.userID
        },
        setLogin: (state, action) => {
            state.isLogin = action.payload.isLogin
        },
    },
    effects: {
        // * setInfo(action, { put,call }) {
        //     try {
        //     }
        //     catch (e) {
        //         console.log(e)
        //     }
        // },
    },
}
export default user
