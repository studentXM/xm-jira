// 检查非0的假值
export const isFalsy = (value: unknown) => {
    return value === 0 ? false : !value
}
// Record 声明一个对象类型 <key,value>
export const cleanObject = <T extends Record<string, unknown>>(object: T) => {
    const result = { ...object }
    Object.keys(result).forEach((key: string) => {
        const value = result[key]
        if (isFalsy(value)) {
            delete result[key]
        }
    })
    return result
}
