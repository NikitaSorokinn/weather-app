import {IClimacellGetPredictionParams} from "../Classes/Climacell";
import {faGithub, IconDefinition} from "@fortawesome/free-brands-svg-icons";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";

export const globalVar = {
    url: 'https://weatherapp.nikitasorokin.ru'
}

export interface ICities extends IClimacellGetPredictionParams{
    name: string,
    img: string
}
export const cities: Array<ICities> = [
    {
        name: 'London',
        lat: '51.5074',
        lon: '0.1278',
        img: 'big-ben.svg'
    },
    {
        name: 'Moscow',
        lat: '55.7558',
        lon: '37.6173',
        img: 'moscow.svg'
    },
    {
        name: 'Paris',
        lat: '48.8566',
        lon: '2.3522',
        img: 'eiffel-tower.svg'
    },
    {
        name: 'Dubai',
        lat: '25.2048',
        lon: '55.2708',
        img: 'burj-khalifa.svg'
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

export interface ISocialNetworks {
    icon: IconDefinition,
    href: string
}

export const socialNetworks: Array<ISocialNetworks> = [
    { icon : faGithub, href: 'https://github.com/NikitaSorokinn'},
    { icon: faUserCircle, href: ''}
]

export interface IAttributions {
    author: string
}
export const attributions: Array<IAttributions> = [
    {author: 'ultimatearm'},
    {author: 'mynamepong'},
    {author: 'Roundicons'},
    {author: 'Freepik'}
]