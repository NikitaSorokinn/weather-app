import {IWeatherObj} from "../../interfaces/weather";

export interface IClimacellConfigParams {
    lat: string,
    lon: string
}

export interface IClimacell extends IClimacellConfigParams {
    apiKey: string,

    getPrediction(): Promise<IWeatherObj | Error>
}

export class Climacell implements IClimacell {
    apiKey: string;
    lat: string;
    lon: string;

    constructor(apiKey: string, lat: string, lon: string) {
        this.apiKey = apiKey
        this.lat = lat
        this.lon = lon
    }

    async getPrediction(): Promise<IWeatherObj | Error> {

        try {
            const responseDaily = await fetch(`https://api.climacell.co/v3/weather/forecast/daily?lat=${this.lat}&lon=${this.lon}`
                + `&unit_system=si&fields=weather_code%2Chumidity%2Cwind_speed%2Ctemp&apikey=${this.apiKey}`
                + `&start_time=now&end_time=${this.getNextDayDate(5)}`,
                {
                    "method": "GET",
                    "headers": {}
                }
            )

            const jsonDaily = await responseDaily.json()

            return {
                daily: jsonDaily
            }
        } catch (e) {
            return new Promise(resolve => resolve(e))
        }
    }

    getNextDayDate (plusDays: number): string {
        const data = new Date()
        const newDate = new Date(data.getFullYear(),data.getMonth(),data.getDate() + plusDays)
        const locales: string = 'en-US'

        const year: string = newDate.toLocaleString(locales, {year: 'numeric'})
        const day: string = newDate.toLocaleString(locales, {day: 'numeric'})
        const month: string = newDate.toLocaleString(locales, {month: 'numeric'})

        return `${year}-${month}-${day}T00:00:00Z`
    }
}