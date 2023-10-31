import { useAuth } from "./context/auth-context"
import { ProjectListScreen } from "./screens/project-list"

// 登陆状态
export const AuthenticatedApp = () => {
    const { logOut } = useAuth()
    console.log(process.env.NODE_ENV)

    return (
        <div>
            <button onClick={logOut}>登出</button>
            <ProjectListScreen></ProjectListScreen>
        </div>
    )
}
