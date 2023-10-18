import appStyles from "./App.scss"
import { LoginScreen } from "./screens/login"
// import { ProjectListScreen } from "./screens/project-list"
// import { TsReactTest } from "@/screens/try-use-array"
import "./test.less"
function App() {
    return (
        <div className={appStyles.box}>
            {/* <ProjectListScreen /> */}
            {/* <TsReactTest /> */}
            <LoginScreen />
        </div>
    )
}
export default App
