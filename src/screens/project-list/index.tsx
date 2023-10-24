import { param } from "@/types/paramsForUsers"

import { SearchPanel } from "./search-panel"
import { List } from "./list"
import { useEffect, useState } from "react"
import qs from "qs"
import { cleanObject } from "@/utils/queryFormat"
import { useMount } from "@/utils/useMount"
import { useDebounce } from "@/utils/useDebounce"
import { useAuth } from "@/context/auth-context"
import { User } from "../../../../imooc-jira/src/types/user"
const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
    const { user } = useAuth()
    const [users, setUsers] = useState([])

    const [param, setParam] = useState<param>({
        name: "",
        personId: "",
        token: (user as User).token,
    })

    const [list, setList] = useState([])

    const debounceparam = useDebounce(param, 300)

    useEffect(() => {
        const query = cleanObject<param>(debounceparam)
        fetch(`${apiUrl}/projects?${qs.stringify(query)}`).then(
            async (response) => {
                if (response.ok) {
                    const res = await response.json()
                    setList(res)
                }
            }
        )
    }, [debounceparam])

    // 仅调用一次
    useMount(() => {
        fetch(`${apiUrl}/users`).then(async (response) => {
            if (response.ok) {
                const res = await response.json()
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
