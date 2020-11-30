import {SET_WEATHER, SET_WEATHER_STATUS} from "../types";
import {IReducerAction} from "../../interfaces/redux";
import {status, cities} from "../../config/variables";
import {IWeatherObj} from "../../interfaces/weather";

export interface IWeatherReducer {
    weatherObj: IWeatherObj | null
    status: String
    city: String
}
export interface IWeatherReducerAction {
    weatherObj?: IWeatherObj
    status?: String
    city?: String
}

const initState: IWeatherReducer = {
    weatherObj: null,
    status: status.downloading,
    city: cities[0].name
}

export const weatherReducer = (state: IWeatherReducer = initState, action: IReducerAction<IWeatherReducer>) => {
    switch (action.type) {
        case SET_WEATHER:
            return {...state, weatherObj: action.payload.weatherObj, city: action.payload.city, status: status.success}
        case SET_WEATHER_STATUS:
            return {...state, status: action.payload.status}
        default:
            return state
    }
}