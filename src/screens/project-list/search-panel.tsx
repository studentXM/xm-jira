import { param } from "@/types/paramsForUsers"
import { users } from "@/types/users"
import { Form, Select, Input } from "antd"
import { Dispatch } from "react"

interface SearchQuery {
    users: users
    param: param
    setParam: Dispatch<param>
}
//
export const SearchPanel = ({ users, param, setParam }: SearchQuery) => {
    const r = users.map((item) => ({ label: item.name, value: item.name }))
    console.log(r)
    return (
        <Form style={{ marginBottom: "2rem" }} layout="inline">
            <Form.Item style={{ display: "flex" }}>
                <Input
                    placeholder="项目名称"
                    type="text"
                    value={param.name}
                    onChange={(e) => {
                        setParam({ ...param, name: e.target.value })
                    }}
                ></Input>
            </Form.Item>
            <Form.Item>
                <Select
                    allowClear
                    // optionFilterProp="children"
                    placeholder={"请选择负责人"}
                    options={r}
                    onSelect={(value) => {
                        console.log(value)
                        setParam({ ...param, personId: value })
                    }}
                    onClear={() => {
                        setParam({ ...param, personId: "" })
                    }}
                >
                    {/* <option value={""}>负责人</option>
                    {users.map((user) => {
                        return (
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        )
                    })} */}
                </Select>
            </Form.Item>
        </Form>
    )
}
