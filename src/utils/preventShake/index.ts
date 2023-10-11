type timerType = NodeJS.Timeout | null
export const PreventShake = (callBack: () => void, millliSecond: number) => {
    let timer: timerType = null
    return () => {
        console.log(timer)
        if (timer !== null) {
            console.log("清除了计时器")
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            callBack()
        }, millliSecond)
    }
}
