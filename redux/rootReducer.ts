import {combineReducers} from "redux";

import {IWeatherReducer, weatherReducer} from "./reducers/weather";
import {errorReducer, IErrorReducer} from "./reducers/error";
import {IMenuReducer, menuReducer} from "./reducers/menu";

export interface IRootReducer {
    weather: IWeatherReducer
    error: IErrorReducer
    menu: IMenuReducer
}

export const rootReducer = combineReducers({
    weather: weatherReducer,
    error: errorReducer,
    menu: menuReducer
})