import { useState, createContext, ReactNode, useContext } from "react"
import { User } from "@/types/users"
import * as auth from "@/auth-provider"
import { http } from "@/utils/http"
import { useMount } from "@/utils"
// import { setuid } from "process"
interface AuthForm {
    username: string
    password: string
}

const bootStrapUser = async () => {
    let user = null
    const token = auth.getToken()
    // 有token校验是否过期 / 没token就返回null
    if (token) {
        // 该接口会校验token是否过期
        const data = await http("me", { token })
        user = data.user
    }
    return user
}
const AuthContext = createContext<
    | {
          user: User | null
          // eslint-disable-next-line no-unused-vars
          register: (form: AuthForm) => Promise<void>
          // eslint-disable-next-line no-unused-vars
          login: (form: AuthForm) => Promise<void>
          logOut: () => Promise<void>
      }
    | undefined
>(undefined)
//
AuthContext.displayName = "AuthContext"

// 逻辑处理 AuthProvider是一个context组件 它包裹app组件的最外层 所以它只会在页面初始化的时候 调用一次
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const login = (form: AuthForm) => {
        return auth.login(form).then(setUser)
    }
    const register = (form: AuthForm) => {
        return auth.register(form).then(setUser)
    }
    const logOut = () => {
        return auth.logOut().then(() => setUser(null))
    }
    // 页面初始化调用一次 给user设置默认值
    // 之所以放useMount内 是因为该自定义hook 只会在AuthProvider组件初始化的时候执行一次 之后的数据更新不会再让它执行
    useMount(() => {
        bootStrapUser().then(setUser)
    })
    return (
        <AuthContext.Provider value={{ user, login, register, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must use in the AuthProvider")
    }
    return context
}
