import appStyles from "./App.scss"
import { ProjectListScreen } from "./screens/project-list"

function App() {
    return (
        <div className={appStyles.box}>
            <ProjectListScreen />
        </div>
    )
}

export default App
