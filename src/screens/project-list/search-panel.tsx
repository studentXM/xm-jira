import { param } from "@/types/paramsForUsers"
import { users } from "@/types/users"
import { Dispatch } from "react"
interface SearchQuery {
    users: users
    param: param
    setParam: Dispatch<param>
}
//
export const SearchPanel = ({ users, param, setParam }: SearchQuery) => {
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
