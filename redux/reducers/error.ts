import {SET_ERROR} from "../types";
import {IReducerAction} from "../../interfaces/redux";

export interface IErrorReducer {
    error: string
}

const initState: IErrorReducer = {
    error: ''
}

export const errorReducer = (state = initState, action: IReducerAction<IErrorReducer>) => {
    switch (action.type) {
        case SET_ERROR:
            return {...state, error: action.payload.error}
        default:
            return state
    }
}