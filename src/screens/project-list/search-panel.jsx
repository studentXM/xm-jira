import PropTypes from "prop-types"
import { useDebounce } from "@/utils/useDebounce"

export const SearchPanel = ({ users, param, setParam }) => {
    const bounce = useDebounce((value) => {
        setParam({ ...param, name: value })
    }, 2000)
    return (
        <form>
            <div>
                <input
                    type="text"
                    value={param.name}
                    onChange={(evt) => {
                        bounce(evt.target.value)
                    }}
                />
                <select
                    value={param.personId}
                    onChange={(evt) => {
                        setParam({ ...param, personId: evt.target.value })
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
