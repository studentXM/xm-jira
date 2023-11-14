import { useState } from "react"
import { RegisterScreen } from "./register"
import { LoginScreen } from "./login"
import { Button, Divider } from "antd"
import styled from "@emotion/styled"
export const UnanuthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false)
    return (
        <Container>
            <ShadowCard>
                <Tit>{isRegister ? "请登陆" : "请注册"}</Tit>
                {isRegister ? <RegisterScreen /> : <LoginScreen />}
                <Divider></Divider>
                <a
                    onClick={() => {
                        setIsRegister(!isRegister)
                    }}
                >
                    {isRegister ? "直接登陆" : "去注册"}
                </a>
            </ShadowCard>
        </Container>
    )
}

// emotion 配置css
const Tit = styled.div`
    font-size: 25px;
    margin-bottom: 10px;
`

const ShadowCard = styled.div`
    width: 40rem;
    min-height: 56rem;
    padding: 3.2rem 4rem;
    border-radius: 0.3rem;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
    text-align: center;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`

/* 以原有组件 为基础添加样式 */
export const LoangBtn = styled(Button)`
    width: 100%;
`
