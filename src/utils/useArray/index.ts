import { useState } from "react"

export const useArray = <T>(value: T[]) => {
    const [newValue, setNewValue] = useState<T[]>(value)
    const [param, setParam] = useState("")
    return {
        remove(index: number) {
            const arr = [...newValue]
            arr.splice(index, 1)
            setNewValue(arr)
        },
        add(person: T) {
            setNewValue([...newValue, person])
        },
        clear() {
            setParam("")
        },
        search(value: string) {
            setParam(value)
            console.log(param)
        },
        value: newValue,
        setValue: setNewValue,
    }
}
