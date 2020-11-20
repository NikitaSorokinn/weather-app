export interface IWeatherObj {
    daily: Array<IWeatherDailyArr>
    now: IWeatherNow
}

export interface IWeatherNow extends IWeatherDefaultValues {
    temp: IValueObj
    humidity: IValueObj
    wind_speed: IValueObj
}

export interface IWeatherDailyArr extends IWeatherDefaultValues {
    temp: [IWeatherValueMin, IWeatherValueMax]
}

interface IWeatherDefaultValues {
    weather_code: {
        value: string
    }
    observation_time: {
        value: string
    }
    lat: number
    lon: number
}

interface IWeatherValueMin extends IWeatherValueObj {
    min: IValueObj
}

interface IWeatherValueMax extends IWeatherValueObj {
    min: IValueObj
}

interface IWeatherValueObj {
    observation_time: string
}

interface IValueObj {
    value: number
    units: string
}

