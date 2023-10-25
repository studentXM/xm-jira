import { useEffect } from "react"

// 只会在组件首次渲染时 执行 之后该组件内部的任何数据变化 都不会执行
export const useMount = (callBack: () => void) => {
    useEffect(() => {
        callBack()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}
