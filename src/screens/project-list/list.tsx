import { users, usersSingle } from "@/types/users"
import { Table } from "antd"

type listParam = {
    users: users
    list: usersSingle[]
}

export const List = ({ users, list }: listParam) => {
    const columns = [
        {
            title: "名称",
            dataIndex: "name",
            key: "name",
            sorter: (a: usersSingle, b: usersSingle) => {
                console.log(a, b)
                // a.name相隔b.name 字符串的距离 例："a".localeCompare("b") == -1
                return a.id - b.id
            },
        },
        {
            title: "负责人",
            render(value: number, project: usersSingle) {
                return (
                    <span>
                        {users.find(
                            (user: usersSingle) => user.id === project.personId
                        )?.name || "未知"}
                    </span>
                )
            },
        },
    ]
    return (
        // rowKey 是antd需要的 回调函数会循环内部的值 取出id做key
        <Table dataSource={list} columns={columns} rowKey={(e) => e.id}></Table>
    )
}
