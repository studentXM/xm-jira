import PropTypes from "prop-types"

export const List = ({ list }) => {
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
                            <td></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
List.propTypes = {
    list: PropTypes.object.isRequired,
}
