import { useEffect, useState } from "react"

export const useDebounce = (value: unknown, delay: number) => {
    const [newValue, setNewValue] = useState(value)
    useEffect(() => {
        const timer = setTimeout(() => {
            setNewValue(value)
        }, delay)
        // 返回的函数是给当前useEffect下一次执行时 的首次执行
        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])
    return newValue
}
