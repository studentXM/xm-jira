import { useState } from "react"
import { RegisterScreen } from "./register"
import { LoginScreen } from "./login"
import { Button, Card } from "antd"
export const UnanuthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false)
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Card style={{ textAlign: "center" }}>
                {isRegister ? <RegisterScreen /> : <LoginScreen />}
                <Button
                    onClick={() => {
                        setIsRegister(!isRegister)
                    }}
                >
                    切换{isRegister ? "登陆" : "注册"}
                </Button>
            </Card>
        </div>
    )
}
