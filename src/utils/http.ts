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
    // 函数中声明形参时 放数组内 并展开数组 就代表函数的形参会存在该数组内,并且该数组也可以解构出来
    // 这里的typeof 是ts中的typeof 也就是静态的 不是 js运行时的 typeof
    // 这里的typeof 后面传递一个变量 把它的类型提取出来 Parameters<typeof >
}
// 以下代码是 Parameters的示例
// const a = (name:string)=>{}
// Parameters<typeof a> 取出的是 一个存放a形参类型的 数组
// typeof 就是取得 一个变量的 数据类型 比如 typeof a 就是 ()=>void
// const x:Parameters<typeof a>[0] = "1awd"
