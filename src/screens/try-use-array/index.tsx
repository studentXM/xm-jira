import { useArray } from "@/utils"

interface useArrayType {
    name: string
    age: number
}
type peronse = useArrayType[]

export const TsReactTest = () => {
    const persons: peronse = [
        { name: "jack", age: 25 },
        { name: "ma", age: 22 },
    ]
    const { value, add, remove, search } = useArray<useArrayType>(persons)
    return (
        <div>
            <button
                onClick={() => {
                    add({ name: "john", age: 22 })
                }}
            >
                add
            </button>
            <input
                type="text"
                onChange={(e) => {
                    search(e.target.value)
                }}
            />
            {value.map((person, index) => {
                return (
                    <div key={index}>
                        <span>{index}</span>
                        <span>{person.name}</span>
                        <span>{person.age}</span>
                        <button
                            onClick={() => {
                                remove(index)
                            }}
                        >
                            remove
                        </button>
                    </div>
                )
            })}
        </div>
    )
}
