// 事件中的参数类型
import { useAuth } from "@/context/auth-context"
import { Button, Form, Input } from "antd"

export const RegisterScreen = () => {
    const { register } = useAuth()
    const handleSubmit = (values: { username: string; password: string }) => {
        register(values)
    }
    return (
        <Form onFinish={handleSubmit}>
            <Form.Item name={"username"}>
                <Input type="text" placeholder="用户名" />
            </Form.Item>
            <Form.Item name={"password"}>
                <Input type="password" placeholder="密码"></Input>
            </Form.Item>
            <Form.Item style={{ textAlign: "center" }}>
                <Button htmlType={"submit"} type={"primary"}>
                    注册
                </Button>
            </Form.Item>
        </Form>
    )
}
