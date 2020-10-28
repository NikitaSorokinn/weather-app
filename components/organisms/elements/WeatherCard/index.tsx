import React from "react";

import WeatherCardStyle from './style.module.scss'
import CelsiusComponentStyle from './styleCelsiusComponent.module.scss'
import WeatherNameComponentStyle from './styleWeatherNameComponent.module.scss'
import WeatherAdditionalInfoStyle from './styleWeatherAdditionalInfo.module.scss'

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
                <div></div>
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