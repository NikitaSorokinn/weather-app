import {SET_WEATHER, SET_WEATHER_STATUS} from "../types";
import {IReducerAction} from "../../interfaces/redux";
import {status} from "../../config/variables";
export interface IWeatherReducer {
    weatherArr?: Array<object>
    status?: String
}

const initState: IWeatherReducer = {
    weatherArr: [],
    status: status.downloading
}

export const weatherReducer = (state: IWeatherReducer = initState, action: IReducerAction<IWeatherReducer>) => {
    switch (action.type) {
        case SET_WEATHER:
            return {...state, weatherArr: action.payload.weatherArr, status: status.success}
        case SET_WEATHER_STATUS:
            return {...state, status: action.payload.status}
        default:
            return state
    }
}
