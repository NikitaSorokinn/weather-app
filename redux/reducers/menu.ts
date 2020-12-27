import {SHOW_MENU} from "../types";
import {IReducerAction} from "../../interfaces/redux";

export interface IMenuReducer {
    show: boolean
}

const initState: IMenuReducer = {
    show: false
}

export const menuReducer = (state: IMenuReducer = initState, action: IReducerAction<IMenuReducer>) => {
    switch (action.type) {
        case SHOW_MENU:
            return {...state, show: action.payload.show}
        default:
            return state
    }
}