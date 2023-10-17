import { param } from "@/types/paramsForUsers"
type keyAndVal = {
    [key: string]: unknown
}
// 0的值和非0的值 返回false  而本身是假值 就返回true 然后删除掉
export const isFalsy = (value: unknown) => {
    return value === 0 ? false : !value
}
// Record 声明一个对象类型 <key,value>
export const cleanObject = <T extends param>(object: T) => {
    const result: keyAndVal = { ...object }
    Object.keys(result).forEach((key: string) => {
        const value = result[key]
        if (isFalsy(value)) {
            delete result[key]
        }
    })
    return result
}
