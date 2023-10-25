// 事件中的参数类型
import { useAuth } from "@/context/auth-context"
import { Button, Form, Input } from "antd"
import { FormEvent } from "react"

export const LoginScreen: React.FC = () => {
    console.log(useAuth())
    const { login, user } = useAuth()
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        console.log(event)
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement)
            .value
        const password = (event.currentTarget.elements[1] as HTMLInputElement)
            .value
        login({ username, password })
    }
    return (
        <div>
            <Form onFinish={handleSubmit}>
                <Form.Item name="username">
                    <Input placeholder="用户名" type="text" />
                </Form.Item>
                <Form.Item name="password">
                    <Input placeholder="密码" type="password" />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">登录</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
