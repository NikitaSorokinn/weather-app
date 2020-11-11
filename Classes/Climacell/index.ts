export interface IClimacellConfigParams {
    lat: string,
    lon: string
}

export interface IClimacell extends IClimacellConfigParams {
    apiKey: string,

    getPrediction(): Promise<object>
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

    async getPrediction(): Promise<object> {

        try {
            const response = await fetch(`https://api.climacell.co/v3/weather/realtime?lat=${this.lat}&lon=${this.lon}`
                + `&unit_system=si&fields=weather_code%2Chumidity%2Cwind_speed&apikey=${this.apiKey}`,
                {
                    "method": "GET",
                    "headers": {}
                }
            )

            return await response.json()
        } catch (e) {
            return new Promise(resolve => resolve(e))
        }
    }
}