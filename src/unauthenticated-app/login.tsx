// 事件中的参数类型
import { useAuth } from "@/context/auth-context"
import { FormEvent } from "react"

export const LoginScreen = () => {
    console.log(useAuth())
    const { login, user } = useAuth()
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement)
            .value
        const password = (event.currentTarget.elements[1] as HTMLInputElement)
            .value
        login({ username, password })
    }
    return (
        <form onSubmit={handleSubmit}>
            longin done ! userName:{user?.name}
            <div>
                <label htmlFor="username">用户名</label>
                <input type="text" id={"username"} />
            </div>
            <div>
                <label htmlFor="passwd">密码</label>
                <input type="password" id={"passwd"} />
            </div>
            <button type={"submit"}>登录</button>
        </form>
    )
}
