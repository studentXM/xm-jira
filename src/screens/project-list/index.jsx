import { SearchPanel } from "./search-panel.jsx"
import { List } from "./list.jsx"
import { useEffect, useState } from "react"

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
    const [users, setUsers] = useState([])

    const [param, setParam] = useState({
        name: "",
        psersonId: "",
    })

    const [list, setList] = useState([])

    useEffect(() => {
        fetch(`${apiUrl}/projects`).then(async (response) => {
            if (response.ok) {
                let res = await response.json()
                setList(res)
            }
        })
    }, [param])

    useEffect(() => {
        fetch(`${apiUrl}/users`).then(async (response) => {
            if (response.ok) {
                let res = await response.json()
                setUsers(res)
            }
        })
    }, [])

    return (
        <div>
            <SearchPanel users={users} param={param} setParam={setParam} />
            <List users={users} list={list} />
        </div>
    )
}
