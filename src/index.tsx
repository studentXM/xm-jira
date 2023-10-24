import { createRoot } from "react-dom/client"
import { loadDevTools } from "jira-dev-tool"
import "./index.scss"
import App from "./App"
import { AppProviders } from "./context"
const root = createRoot(document.getElementById("app") as Element)
loadDevTools(() => {
    root.render(
        <AppProviders>
            <App />
        </AppProviders>
    )
})
