import {combineReducers} from "redux";

import {weatherReducer} from "./reducers/weather";

export const rootReducer = combineReducers({
    weather: weatherReducer
})