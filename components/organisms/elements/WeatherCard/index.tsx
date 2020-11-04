import React from "react";

import WeatherCardStyle from './style.module.scss'
import CelsiusComponentStyle from './styleCelsiusComponent.module.scss'
import WeatherNameComponentStyle from './styleWeatherNameComponent.module.scss'
import WeatherAdditionalInfoStyle from './styleWeatherAdditionalInfo.module.scss'
import WeatherCloudsStyle from './styleWeatherClouds.module.scss'
import ShowplaceStyle from './styleShowplace.module.scss'
import PlaceNameStyle from './stylePlaceName.module.scss'

export const WeatherCard: React.FC = (): JSX.Element => {

    return (
        <div className={WeatherCardStyle.WeatherCard__div}>
            <div className={WeatherCardStyle.WeatherCard__div__top}>
                <div className={WeatherCardStyle.WeatherCard__div__top__left}>
                    <CelsiusComponent value={'12°'}/>
                    <WeatherNameComponent value={'CLOUDY'}/>
                    <div className={WeatherCardStyle.WeatherCard__div__top__left__additionalInfo}>
                        <WeatherAdditionalInfo name={'HUMIDITY'} value={'65%'}/>
                        <div className={WeatherCardStyle.WeatherCard__div__top__left__additionalInfo__border}/>
                        <WeatherAdditionalInfo name={'WIND'} value={'35%'}/>
                    </div>
                </div>
                <div className={WeatherCardStyle.WeatherCard__div__top__right}>
                    <div className={WeatherCardStyle.WeatherCard__div__top__right__stars}/>
                    <WeatherClouds/>
                    <Showplace pictureSrc={'./big-ben-in-london.svg'}/>
                    <PlaceName placeName={'LONDON'}/>
                </div>
            </div>
            <div className={WeatherCardStyle.WeatherCard__div__bottom}>

            </div>
        </div>
    )
}

export interface ICelsiusComponent {
    value: string
}
export const CelsiusComponent: React.FC<ICelsiusComponent> = ({value}): JSX.Element => {
    return (
        <div className={CelsiusComponentStyle.CelsiusComponent__div}>
            <p className={CelsiusComponentStyle.CelsiusComponent__div__p}>{value}</p>
        </div>
    )
}

export interface IWeatherNameComponent {
    value: string
}
export const WeatherNameComponent: React.FC<IWeatherNameComponent> = ({value}): JSX.Element => {
    return (
        <div className={WeatherNameComponentStyle.WeatherNameComponent__div}>
            <p className={WeatherNameComponentStyle.WeatherNameComponent__div__p}>{value}</p>
        </div>
    )
}

export interface IWeatherAdditionalInfo {
    name: string
    value: string
}
export const WeatherAdditionalInfo: React.FC<IWeatherAdditionalInfo> = ({name, value}): JSX.Element => {
    return (
        <div className={WeatherAdditionalInfoStyle.WeatherAdditionalInfo__div}>
            <p className={WeatherAdditionalInfoStyle.WeatherAdditionalInfo__div__p}>{name}</p>
            <p className={WeatherAdditionalInfoStyle.WeatherAdditionalInfo__div__p}>{value}</p>
        </div>
    )
}

export const WeatherClouds: React.FC = (): JSX.Element => {
    return (
        <>
            <img className={WeatherCloudsStyle.WeatherClouds__1} src={'./big-cloud.svg'} alt={' '}/>
            <img className={WeatherCloudsStyle.WeatherClouds__2} src={'./big-cloud.svg'} alt={' '}/>
            <img className={WeatherCloudsStyle.WeatherClouds__3} src={'./big-cloud.svg'} alt={' '}/>
            <img className={WeatherCloudsStyle.WeatherClouds__4} src={'./big-cloud.svg'} alt={' '}/>
            <img className={WeatherCloudsStyle.WeatherClouds__5} src={'./big-cloud.svg'} alt={' '}/>
            <img className={WeatherCloudsStyle.WeatherClouds__6} src={'./big-cloud.svg'} alt={' '}/>
        </>
    )
}

export interface IShowplace {
    pictureSrc: string
}
export const Showplace: React.FC<IShowplace> = ({pictureSrc}): JSX.Element => {
    return (
        <div className={ShowplaceStyle.Showplace__div}>
            <img
                className={ShowplaceStyle.Showplace__div__img}
                src={pictureSrc}
                alt=" "
            />
        </div>
    )
}

export interface IPlaceName {
    placeName: string
}
export const PlaceName: React.FC<IPlaceName> = ({placeName}): JSX.Element => {
    return (
        <div className={PlaceNameStyle.PlaceName__div}>
            <p className={PlaceNameStyle.PlaceName__div__p}>{placeName}</p>
            <div className={PlaceNameStyle.PlaceName__div__div}/>
        </div>
    )
}