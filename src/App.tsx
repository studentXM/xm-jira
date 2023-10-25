import appStyles from "./App.scss"
import { useAuth } from "./context/auth-context"
import { UnanuthenticatedApp } from "./unauthenticated-app/index"
import { AuthenticatedApp } from "./authenticated-app"
function App() {
    const { user } = useAuth()
    return (
        <div className={appStyles.box}>
            {/* 判断是否登陆过/ 登陆显示app组件/未登录显示 对应组件 */}
            {user ? (
                <AuthenticatedApp></AuthenticatedApp>
            ) : (
                <UnanuthenticatedApp></UnanuthenticatedApp>
            )}
        </div>
    )
}
export default App
