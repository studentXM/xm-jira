/* eslint-disable @typescript-eslint/no-unused-vars */
import qs from "qs"
import * as auth from "@/auth-provider"
import { useAuth } from "@/context/auth-context"
import { useCallback } from "react"
const apiUrl = process.env.REACT_APP_API_URL
interface Config extends RequestInit {
    data?: object
    token?: string
}
export const http = async (
    endpoint: string,
    // customConfig是剩余参数
    // eslint-disable-next-line no-unused-vars
    { data, token, headers, ...customConfig }: Config = {}
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
        endpoint += `?${qs.stringify(data)}`
        // 反之使用以下方式
    } else {
        config.body = JSON.stringify(data || {})
    }
    return window.fetch(`${apiUrl}/${endpoint}`, config).then(async (res) => {
        // 状态值 判断 > 退出登陆
        if (res.status === 401) {
            await auth.logOut()
            window.location.reload()
            return Promise.reject({ message: "请重新登陆" })
        }
        const data = await res.json()
        if (res.ok) {
            return data
        } else {
            return Promise.reject(data)
        }
    })
}

// 再把http封装成hook 供外部使用
export const useHttp = () => {
    const { user } = useAuth()
    return useCallback(
        (...[endpoint, config]: Parameters<typeof http>) => {
            return http(endpoint, { ...config, token: user?.token })
        },
        [user]
    )
}

// 以下代码是 Parameters的示例
// const a = (name:string)=>{}
// Parameters<typeof a> 取出的是 一个存放a形参类型的 数组
// typeof 就是取得 一个变量的 数据类型 比如 typeof a 就是 ()=>void
// const x:Parameters<typeof a>[0] = "1awd"
