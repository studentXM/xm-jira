import PropTypes from "prop-types"

export const List = ({ users, list }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>名称</th>
                    <th>负责人</th>
                </tr>
            </thead>
            <tbody>
                {list.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>
                                {users.find((user) => user.id === item.personId)
                                    ?.name || "未知"}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
List.propTypes = {
    list: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired,
}
