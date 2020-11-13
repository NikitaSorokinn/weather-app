import {SET_WEATHER} from "../types";
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