import { SearchPanel } from "./search-panel.jsx"
import { List } from "./list.jsx"
import { useEffect, useState } from "react"
console.log(process.env)
export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: "",
        psersonId: "",
    })
    const [list, setList] = useState([])
    useEffect(() => {
        // fetch(`${apiUrl}/users`).then(async (response) => {
        //     if (response.ok) {
        //         setList(await response.json())
        //         console.log(list)
        //     }
        // })
    }, [param])
    return <div>123</div>
}
