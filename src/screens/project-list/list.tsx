import { users, usersSingle } from "@/types/users"
type listParam = {
    users: users
    list: usersSingle[]
}
export const List = ({ users, list }: listParam) => {
    return (
        <table>
            <thead>
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
            </tbody>
        </table>
    )
}
