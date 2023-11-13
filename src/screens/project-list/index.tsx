import { param } from "@/types/paramsForUsers"

import { SearchPanel } from "./search-panel"
import { List } from "./list"
import { useEffect, useState } from "react"
// import qs from "qs"
// import { cleanObject } from "@/utils/queryFormat"
import { useMount } from "@/utils/useMount"
import { useDebounce } from "@/utils/useDebounce"
import { useAuth } from "@/context/auth-context"
import { User } from "@/types/users"
import { useHttp } from "@/utils"
// import * as qs from "qs"
import { cleanObject } from "@/utils/queryFormat"
// const apiUrl = process.env.REACT_APP_URL

export const ProjectListScreen = () => {
    const { user } = useAuth()
    const [users, setUsers] = useState([])
    const req = useHttp()
    const [param, setParam] = useState<param>({
        name: "",
        personId: "",
    })
    const [list, setList] = useState([])

    // 对搜索参数就行节流 2秒后再更改
    const debounceparam = useDebounce(param, 2000)
    useEffect(() => {
        // 对搜索参数中的空值 进行删除
        const query = cleanObject<param>(debounceparam)
        req("projects", { data: query }).then((res) => {
            setList(res)
        })
    }, [debounceparam, req])

    // 仅调用一次
    useMount(() => {
        req("users").then((res) => {
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
