import appStyles from "./App.scss"
import { ProjectListScreen } from "./screens/project-list/index.jsx"
// console.log(process.env)

function App() {
    return (
        <div className={appStyles.box}>
            <ProjectListScreen />
        </div>
    )
}

export default App
