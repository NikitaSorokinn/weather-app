import {IClimacellConfigParams} from "../Classes/Climacell";

export const globalVar = {
    url: 'https://weatherapp.nikitasorokin.ru'
}

export interface ICities extends IClimacellConfigParams{
    name: string
}
export const cities: Array<ICities> = [
    {
        name: 'London',
        lat: '51.5074',
        lon: '0.1278'
    }
]

export interface IStatus {
    downloading: String
    success: String
    error: String
}
export const status: IStatus = {
    downloading: 'downloading',
    success: 'success',
    error: 'error'
}