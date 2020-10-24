import {combineReducers} from "redux";

import {countReducer, ICountReducer} from "./reducers/countReducer";

export interface IRootReducer {
    count: ICountReducer
}

export const rootReducer = combineReducers({
    count: countReducer
})