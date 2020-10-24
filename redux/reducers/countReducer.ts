import {SET_COUNT} from "../types";

export interface ICountReducer {
    count: number
}

export interface ICountReducerAction {
    type: string
    payload: ICountReducer
}

const initState: ICountReducer = {
    count: 0
}

export const countReducer = (state: ICountReducer = initState, action: ICountReducerAction) => {
    switch (action.type) {
        case SET_COUNT:
            return {...state, count: action.payload.count}
        default:
            return state
    }
}