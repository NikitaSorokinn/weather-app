import {cities} from "../config/variables";
import {IClimacellConfigParams} from "../Classes/Climacell";

export function getClimacellConfigParams(cityName: string): IClimacellConfigParams|undefined {
    for (let i = 0; i < cities.length; i++) {
        const city = cities[i]
        if (city.name === cityName) return {lat: city.lat, lon: city.lon}
    }
}