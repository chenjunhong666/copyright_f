export interface UserState {
    isLogin: boolean
    userName: string
    nickName: string
    userID: string
}

export interface TypedUseSelectorHook {
    user: UserState
}
