// 事件中的参数类型
import { useAuth } from "@/context/auth-context"
import { Form, Input } from "antd"
import { LoangBtn } from "./index"
export const LoginScreen: React.FC = () => {
    // console.log(useAuth())
    const { login } = useAuth()
    const handleSubmit = (values: { username: string; password: string }) => {
        login(values)
    }
    return (
        <div>
            <Form onFinish={handleSubmit}>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: "请输入用户名" }]}
                >
                    <Input placeholder="用户名" type="text" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: "请输入密码" }]}
                >
                    <Input placeholder="密码" type="password" />
                </Form.Item>
                <Form.Item style={{ textAlign: "center" }}>
                    <LoangBtn htmlType={"submit"} type={"primary"}>
                        登录
                    </LoangBtn>
                </Form.Item>
            </Form>
        </div>
    )
}
