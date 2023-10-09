import PropTypes from "prop-types"
export const SearchPanel = ({ users, param, setParam }) => {
    return (
        <form>
            <div>
                <input
                    type="text"
                    value={param.name}
                    onChange={(evt) => {
                        setParam({ ...param, name: evt.target.value })
                    }}
                />
                <select
                    value={param.psersonId}
                    onChange={(evt) => {
                        setParam({ ...param, psersonId: evt.target.value })
                    }}
                >
                    <option value={""}>负责人</option>
                    {users.map((user) => {
                        return (
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        )
                    })}
                </select>
            </div>
        </form>
    )
}
SearchPanel.propTypes = {
    param: PropTypes.object.isRequired,
    setParam: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
}
