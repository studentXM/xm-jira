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
        },
        {
            title: "负责人",
            render: (text: string, record: unknown, index: number) => {
                console.log(text, record, index)
                return <div>123</div>
            },
        },
    ]
    return (
        <Table dataSource={list} columns={columns}>
            {/* <thead>
                <tr>
                    <th>名称</th>
                    <th>负责人</th>
                </tr>
            </thead>
            <tbody>
                {list.map((item: usersSingle) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>
                                {users.find(
                                    (user: usersSingle) =>
                                        user.id === item.personId
                                )?.name || "未知"}
                            </td>
                        </tr>
                    )
                })}
            </tbody> */}
        </Table>
    )
}
