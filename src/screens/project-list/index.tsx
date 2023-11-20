import { param } from "@/types/paramsForUsers"

import { SearchPanel } from "./search-panel"
import { List } from "./list"
import { useEffect, useState } from "react"
import { useMount } from "@/utils/useMount"
import { useDebounce } from "@/utils/useDebounce"
import { useHttp } from "@/utils"
import { cleanObject } from "@/utils/queryFormat"
import styled from "@emotion/styled"

export const ProjectListScreen = () => {
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
            <Tit>项目列表</Tit>
            <SearchPanel users={users} param={param} setParam={setParam} />
            <List users={users} list={list} />
        </div>
    )
}

const Tit = styled.p`
    font-size: 30px;
`
