import { param } from "@/types/paramsForUsers"

import { SearchPanel } from "./search-panel"
import { List } from "./list"
import { useEffect, useState } from "react"
import { cleanObject } from "@/utils/queryFormat"
import { useMount } from "@/utils/useMount"
import { useDebounce } from "@/utils/useDebounce"
import { useHttp } from "@/utils/http"

export const ProjectListScreen = () => {
    const [users, setUsers] = useState([])
    const client = useHttp()
    const [param, setParam] = useState<param>({
        name: "",
        personId: "",
    })
    const [list, setList] = useState([])

    const debounceparam = useDebounce(param, 300)

    useEffect(() => {
        const param = cleanObject<param>(debounceparam)
        client("projects", { data: param }).then(setList)
    }, [debounceparam, client])

    // 仅调用一次
    useMount(() => {
        client("users").then((res) => {
            console.log(res)
            setUsers(res)
        })
    })
    return (
        <div>
            <SearchPanel users={users} param={param} setParam={setParam} />
            <List users={users} list={list} />
        </div>
    )
}
