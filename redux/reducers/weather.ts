import {SET_WEATHER} from "../types";
import {IReducerAction} from "../../interfaces/redux";
export interface IWeatherReducer {
    weatherArr: Array<object>
}

const initState: IWeatherReducer = {
    weatherArr: []
}

export const weatherReducer = (state: IWeatherReducer = initState, action: IReducerAction<IWeatherReducer>) => {
    switch (action.type) {
        case SET_WEATHER:
            return {...state, weatherArr: action.payload.weatherArr}
        default:
            return state
    }
}
