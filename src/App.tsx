import appStyles from "./App.scss"
import { useAuth } from "./context/auth-context"
import { UnanuthenticatedApp } from "./unauthenticated-app/index"
import { AuthenticatedApp } from "./authenticated-app"
function App() {
    const { user } = useAuth()
    return (
        <div className={appStyles.box}>
            {user ? (
                <AuthenticatedApp></AuthenticatedApp>
            ) : (
                <UnanuthenticatedApp></UnanuthenticatedApp>
            )}
        </div>
    )
}
export default App
