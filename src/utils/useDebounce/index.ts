import { useState, useEffect } from "react"
export const useDebounce = (value: unknown, delay: number) => {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        console.log("right")
        const timeout = setTimeout(() => setDebounceValue(value), delay)
        return () => {
            clearTimeout(timeout)
        }
    }, [value, delay])
    return debounceValue
}
