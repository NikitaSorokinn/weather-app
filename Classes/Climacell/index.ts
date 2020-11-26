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

        const [responseNow, responseDaily] = this.serverQuery()

        let responseObj: IWeatherObj = {
            daily: Array(),
            now: Object()
        }

        try {
            await responseNow.then(async (res) => {
                await this.queryHandler(res, responseObj, "now")
            })
            await responseDaily.then(async (res) => {
                await this.queryHandler(res, responseObj, "daily")
            })
            return responseObj
        }
         catch (e) {
            return new Promise(resolve => resolve(new Error(e)))
        }
    }

    private serverQuery(): [Promise<any>, Promise<any>] {

        const url: string = 'https://api.climacell.co/v3/weather/'

        const dailyQuery: Promise<any> = fetch(`${url}forecast/daily?lat=${this.lat}&lon=${this.lon}`
            + `&unit_system=si&fields=weather_code%2Ctemp&apikey=${this.apiKey}`
            + `&start_time=${this.getNextDayDate(1)}&end_time=${this.getNextDayDate(5)}`)

        const nowQuery: Promise<any> = fetch(`${url}realtime?lat=${this.lat}&lon=${this.lon}&`
            + `unit_system=si&fields=weather_code%2Chumidity%2Cwind_speed%2Ctemp&apikey=${this.apiKey}`)

        return [nowQuery, dailyQuery]
    }

    private getNextDayDate (plusDays: number): string {
        const data = new Date()
        const newDate = new Date(data.getFullYear(),data.getMonth(),data.getDate() + plusDays)
        const locales: string = 'en-US'

        const year: string = newDate.toLocaleString(locales, {year: 'numeric'})
        const day: string = newDate.toLocaleString(locales, {day: 'numeric'})
        const month: string = newDate.toLocaleString(locales, {month: 'numeric'})

        const addLeadingZero = function (day: number): string {
            return day > 10 ? day.toString() : '0' + day.toString()
        }

        return `${year}-${addLeadingZero(Number(month))}-${addLeadingZero(Number(day))}T00:00:00Z`
    }

    private async queryHandler(res: any, responseObj: any, responseObjParam: string) {
        let json = await res.json()
        if (json.errorCode === undefined) responseObj[responseObjParam] = json
        else throw json.errorCode
    }
}