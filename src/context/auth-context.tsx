import { useState, createContext, ReactNode, useContext } from "react"
import { User } from "../../../imooc-jira/src/types/user"
import * as auth from "@/auth-provider"
interface AuthForm {
    username: string
    password: string
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

// 逻辑处理
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
