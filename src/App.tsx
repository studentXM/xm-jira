import appStyles from "./App.scss"
import { useAuth } from "./context/auth-context"
import { UnanuthenticatedApp } from "./unauthenticated-app/index"
import { AuthenticatedApp } from "./authenticated-app"
import { ConfigProvider } from "antd"
function App() {
    const { user } = useAuth()
    return (
        <ConfigProvider
            theme={{
                token: {
                    // Seed Token，影响范围大
                    colorPrimary: "#00b96b",
                    borderRadius: 2,
                    fontSize: 16,
                    // 派生变量，影响范围小
                    // colorBgContainer: "#f6ffed",
                },
            }}
        >
            <div className={appStyles.box}>
                {/* 判断是否登陆过/ 登陆显示app组件/未登录显示 对应组件 */}
                {user ? (
                    <AuthenticatedApp></AuthenticatedApp>
                ) : (
                    <UnanuthenticatedApp></UnanuthenticatedApp>
                )}
            </div>
        </ConfigProvider>
    )
}
export default App
