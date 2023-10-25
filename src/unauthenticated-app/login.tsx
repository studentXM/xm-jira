// 事件中的参数类型
import { useAuth } from "@/context/auth-context"
import { Button, Form } from "antd"
import { Input } from "postcss"
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
        <Form onSubmit={handleSubmit}>
            <Form.Item name={"username"}>
                <Input placeholder="用户名" type="text" />
            </Form.Item>
            <Form.Item name={"password"}>
                <Input placeholder="密码" type="password" />
            </Form.Item>
            <Button type={"submit"}>登录</Button>
        </Form>
    )
}
