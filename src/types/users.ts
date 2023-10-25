export type usersSingle = {
    personId: number
    organization: string
    name: string
    id: number
    created: number
}
export type users = usersSingle[]

export type User = {
    id: number
    name: string
    email: string
    title: string
    organization: string
    token: string
}
