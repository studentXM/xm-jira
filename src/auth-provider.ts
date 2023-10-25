import { User } from "./../../imooc-jira/src/types/user"
const apiUrl = process.env.REACT_APP_API_URL
// 在真实环境中,如果使用firebase这种第三方auth服务的话,本文件不需要开发者开发
const localStorageKey = "__auth_provider_token__"
export function getToken() {
    return window.localStorage.getItem(localStorageKey)
}
export function handleUserResponse({ user }: { user: User }) {
    window.localStorage.setItem(localStorageKey, user.token || "")
    return user
}

export function login(data: { username: string; password: string }) {
    return fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(async (res) => {
        if (res.ok) {
            return handleUserResponse(await res.json())
        } else {
            return Promise.reject(data)
        }
    })
}

export function register(data: { username: string; password: string }) {
    return fetch(`${apiUrl}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(async (res) => {
        if (res.ok) {
            return handleUserResponse(await res.json())
        } else {
            return Promise.reject(data)
        }
    })
}

export async function logOut() {
    return window.localStorage.removeItem(localStorageKey)
}
