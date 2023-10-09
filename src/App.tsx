import appStyles from "./App.scss"
import { ProjectListScreen } from "./screens/project-list/index.jsx"

function App() {
    return (
        <div className={appStyles.box}>
            <ProjectListScreen />
        </div>
    )
}

export default App
