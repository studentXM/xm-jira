import { useAuth } from "./context/auth-context"
import { ProjectListScreen } from "./screens/project-list"

// 登陆状态
export const AuthenticatedApp = () => {
    const { logOut } = useAuth()
    return (
        <div>
            <button onClick={logOut}>登出</button>
            <ProjectListScreen></ProjectListScreen>
        </div>
    )
}
