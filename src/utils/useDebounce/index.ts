import { useState, useEffect } from "react"
export const useDebounce = <T>(value: T, delay: number): T => {
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
