import {SET_WEATHER, SET_WEATHER_STATUS} from "../types";
import {IWeatherReducer} from "../reducers/weather";
import {IReducerAction} from "../../interfaces/redux";

export function setWeather (weatherArr: Array<object>) {
    return (dispatch: (dispatchObj: IReducerAction<IWeatherReducer>) => void) => {

        const dispatchObj: IReducerAction<IWeatherReducer> = {
            type: SET_WEATHER,
            payload: {
                weatherArr: weatherArr
            }
        }

        dispatch(dispatchObj)
    }
}

export function setWeatherStatus (status: String) {
    return (dispatch: (dispatchObj: IReducerAction<IWeatherReducer> ) => void) => {

        const dispatchObj: IReducerAction<IWeatherReducer> = {
            type: SET_WEATHER_STATUS,
            payload: {
                status: status
            }
        }

        dispatch(dispatchObj)
    }
}