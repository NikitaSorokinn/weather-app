export interface IReducerAction<Type> {
    type: string
    payload: Type
}