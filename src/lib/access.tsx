import routerlist from '@/lib/routerlist'
import { useSelector, useDispatch } from 'dva'
import { user } from '@/lib/actions'
import { useEffect } from 'react'
import { history } from 'umi'
import { TypedUseSelectorHook, UserState } from '@/lib/selector'
import api from '@/api'

const useAccess = (pathname: string) => {
    const dispatch = useDispatch();
    const setLogin = (isLogin) => {
        return dispatch(user.setLogin({ isLogin: isLogin }))
    }
    const setInfo = (data) => {
        return dispatch(user.setInfo(data))
    }
    const userModel = useSelector<TypedUseSelectorHook, UserState>(state => state.user)
    let needLogin = true
    for (const prop in routerlist) {
        if (routerlist[prop].pathname === pathname) {
            needLogin = routerlist[prop].login
            break
        }
    }
    useEffect(() => {
        if (needLogin && !userModel.isLogin) {
            api.auth.info().then(async (res) => {
                if (res.code == 0) {
                    await setInfo({
                        userName: res.userName,
                        nickName: res.nickName,
                        userID: res.userID,
                    })
                    await setLogin(true)
                } else {
                    history.push(routerlist.login.pathname)
                }
            })
        } else if (needLogin) {
            api.auth.judge().then(async (res) => {
                if (res.code != 0) {
                    await setLogin(false)
                    history.push(routerlist.login.pathname)
                }
            })
        }
    }, [pathname])
    return !needLogin || userModel.isLogin
}
export default useAccess;