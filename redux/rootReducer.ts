import {combineReducers} from "redux";

import {IWeatherReducer, weatherReducer} from "./reducers/weather";
import {errorReducer, IErrorReducer} from "./reducers/error";

export interface IRootReducer {
    weather: IWeatherReducer
    error: IErrorReducer
}

export const rootReducer = combineReducers({
    weather: weatherReducer,
    error: errorReducer
})