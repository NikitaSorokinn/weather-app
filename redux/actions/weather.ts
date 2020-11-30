import {SET_WEATHER, SET_WEATHER_STATUS} from "../types";
import {IWeatherReducerAction} from "../reducers/weather";
import {IReducerAction} from "../../interfaces/redux";
import {IWeatherObj} from "../../interfaces/weather";

export function setWeather (weatherObj: IWeatherObj, city: String) {
    return (dispatch: (dispatchObj: IReducerAction<IWeatherReducerAction>) => void) => {

        const dispatchObj: IReducerAction<IWeatherReducerAction> = {
            type: SET_WEATHER,
            payload: {
                weatherObj: weatherObj,
                city: city
            }
        }

        dispatch(dispatchObj)
    }
}

export function setWeatherStatus (status: String) {
    return (dispatch: (dispatchObj: IReducerAction<IWeatherReducerAction> ) => void) => {

        const dispatchObj: IReducerAction<IWeatherReducerAction> = {
            type: SET_WEATHER_STATUS,
            payload: {
                status: status
            }
        }

        dispatch(dispatchObj)
    }
}