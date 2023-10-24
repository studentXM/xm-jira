import qs from "qs"
const apiUrl = process.env.REACT_APP_API_URL
interface Config extends RequestInit {
    data: object
    token: string
}
export const http = async (
    endpoint: string,
    { data, token, headers, ...customConfig }: Config
) => {
    const config = {
        // 默认配置
        method: "GET",
        headers: {
            Authorization: token ? `Bearer ${token}` : "",
            "Content-type": data ? "application/json" : "",
        },
        // 传递配置
        ...customConfig,
    }
    // 若是get 就把参数传话为query
    if (config.method.toUpperCase() === "GET") {
        endpoint += `${qs.stringify(data)}`
        // 反之使用以下方式
    } else {
        config.body = JSON.stringify(data || {})
    }

    return window.fetch(`${apiUrl}/${endpoint}`, config)
}
