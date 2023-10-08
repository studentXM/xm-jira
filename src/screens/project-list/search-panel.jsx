import { useState } from "react"
import PropTypes from "prop-types"
export const SearchPanel = ({ param, setParam }) => {
    const [users, setUsers] = useState([])

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
                            <option key={user.psersonId} value={user.psersonId}>
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
}
