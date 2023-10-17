import { SearchPanel } from "./search-panel.jsx"
import { List } from "./list.jsx"
import { useEffect, useState } from "react"
import qs from "qs"

import { cleanObject } from "@/utils/queryFormat"
import { useMount } from "@/utils/useMount"
import { useDebounce } from "@/utils/useDebounce"
const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
    const [users, setUsers] = useState([])

    const [param, setParam] = useState({
        name: "",
        personId: "",
    })

    const [list, setList] = useState([])

    const debounceparam = useDebounce(param, 2000)

    useEffect(() => {
        const query = cleanObject(debounceparam)
        fetch(`${apiUrl}/projects?${qs.stringify(query)}`).then(
            async (response) => {
                if (response.ok) {
                    let res = await response.json()
                    setList(res)
                }
            }
        )
    }, [debounceparam])

    // 仅调用一次
    useMount(() => {
        fetch(`${apiUrl}/users`).then(async (response) => {
            if (response.ok) {
                let res = await response.json()
                setUsers(res)
            }
        })
    })

    return (
        <div>
            <SearchPanel users={users} param={param} setParam={setParam} />
            <List users={users} list={list} />
        </div>
    )
}
