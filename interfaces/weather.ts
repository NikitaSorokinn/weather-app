export interface IWeatherObj {
    daily: Array<IWeatherDailyArr>
}

interface IWeatherDailyArr {
    temp: [IWeatherValueMin, IWeatherValueMax]
    humidity: [IWeatherValueMin, IWeatherValueMax]
    wind_speed: [IWeatherValueMin, IWeatherValueMax]
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

