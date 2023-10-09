type timerType = NodeJS.Timeout | null
export const PreventShake = (callBack: () => void, millliSecond: number) => {
    let timer: timerType = null
    return () => {
        if (timer !== null) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            callBack()
        }, millliSecond)
    }
}
