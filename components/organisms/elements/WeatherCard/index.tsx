import React from "react";

import WeatherCardStyle from './style.module.scss'
import CelsiusComponentStyle from './styleCelsiusComponent.module.scss'
import WeatherNameComponentStyle from './styleWeatherNameComponent.module.scss'
import WeatherAdditionalInfoStyle from './styleWeatherAdditionalInfo.module.scss'
import WeatherCloudsStyle from './styleWeatherClouds.module.scss'
import PlaceNameStyle from './stylePlaceName.module.scss'
import CityCardStyle from './styleCityCard.module.scss'
import WeatherWeekdayStyle from './styleWeatherWeekday.module.scss'
import {RoundAnimateFrame} from "../../../atoms/Backgrounds/RoundAnimateFrame";
import {useSelector} from "react-redux";
import {IRootReducer} from "../../../../redux/rootReducer";

export const WeatherCard: React.FC = (): JSX.Element => {

    const { weatherObj } = useSelector((state: IRootReducer) => ({
        weatherObj: state.weather.weatherObj
    }))

    let jsx = <></>

    if (weatherObj !== null) {

        jsx =
            <RoundAnimateFrame>
                <div className={WeatherCardStyle.WeatherCard__div__top}>
                    <div className={WeatherCardStyle.WeatherCard__div__top__left}>
                        <CelsiusComponent value={weatherObj.now.temp.value}/>
                        <WeatherNameComponent
                            value={weatherCodeToString(weatherObj.now.weather_code.value)}
                        />
                        <div className={WeatherCardStyle.WeatherCard__div__top__left__additionalInfo}>
                            <WeatherAdditionalInfo name={'HUMIDITY'} value={`${weatherObj.now.humidity.value.toString()}%`}/>
                            <div className={WeatherCardStyle.WeatherCard__div__top__left__additionalInfo__border}/>
                            <WeatherAdditionalInfo name={'WIND'} value={`${weatherObj.now.wind_speed.value}m/s`}/>
                        </div>
                    </div>
                    <div className={WeatherCardStyle.WeatherCard__div__top__right}>
                        <div className={WeatherCardStyle.WeatherCard__div__top__right__stars}/>
                        <WeatherClouds/>
                        <PlaceName placeName={'LONDON'}/>
                    </div>
                </div>
                <div className={WeatherCardStyle.WeatherCard__div__bottom}>
                    <div className={WeatherCardStyle.WeatherCard__div__bottom__half1}>
                        <CityCard
                            img={'/big-ben.svg'}
                            cityName={'London'}
                            isActive={true}
                        />
                        <CityCard img={'/moscow.svg'} cityName={'Moscow'}/>
                        <CityCard img={'/eiffel-tower.svg'} cityName={'Paris'}/>
                        <CityCard img={'/burj-khalifa.svg'} cityName={'Dubai'}/>
                    </div>
                    <div className={WeatherCardStyle.WeatherCard__div__bottom__half2}>
                        {
                            weatherObj.daily.map((elem, i) => {
                                return (
                                    <WeatherWeekday
                                        key={elem.observation_time.value}
                                        img={`/${elem.weather_code.value}.svg`}
                                        celsius={Math.round(
                                                    (elem.temp[0].min.value + elem.temp[1].max.value)/2
                                                ).toString()}
                                        weekday={getDateDayName(i+1).toUpperCase()}
                                        description={weatherCodeToString(elem.weather_code.value)}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </RoundAnimateFrame>
    }

    return (
        jsx
    )
}

export interface ICelsiusComponent {
    value: number
}
export const CelsiusComponent: React.FC<ICelsiusComponent> = ({value}): JSX.Element => {

    const temp = Math.round(value).toString()

    return (
        <div className={CelsiusComponentStyle.CelsiusComponent__div}>
            <p className={CelsiusComponentStyle.CelsiusComponent__div__p}>
                {`${temp}`}<span className={CelsiusComponentStyle.CelsiusComponent__div__p__span}>°</span>
            </p>
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

    const cloudImg: string = '/cloud-computing.svg'

    return (
        <>
            <img className={WeatherCloudsStyle.WeatherClouds__1} src={cloudImg} alt={' '}/>
            <img className={WeatherCloudsStyle.WeatherClouds__2} src={cloudImg} alt={' '}/>
            <img className={WeatherCloudsStyle.WeatherClouds__3} src={cloudImg} alt={' '}/>
            <img className={WeatherCloudsStyle.WeatherClouds__4} src={cloudImg} alt={' '}/>
            <img className={WeatherCloudsStyle.WeatherClouds__5} src={cloudImg} alt={' '}/>
            <img className={WeatherCloudsStyle.WeatherClouds__6} src={cloudImg} alt={' '}/>
        </>
    )
}

export interface IPlaceName {
    placeName: string
}
export const PlaceName: React.FC<IPlaceName> = ({placeName}): JSX.Element => {
    return (
        <div className={PlaceNameStyle.PlaceName__div}>
            <p className={PlaceNameStyle.PlaceName__div__p}>{placeName}</p>
        </div>
    )
}

export interface ICityCard {
    img: string
    cityName: string
    isActive?: boolean
}
export const CityCard: React.FC<ICityCard> = ({img, cityName, isActive = false}): JSX.Element => {

    const divStyle =
        isActive ?
            `${CityCardStyle.CityCard__div} ${CityCardStyle.CityCard__div__activeCity}`
            :
            CityCardStyle.CityCard__div

    return (
        <div className={divStyle}>
            <img className={CityCardStyle.CityCard__div__img} src={img} alt=" "/>
            <p className={CityCardStyle.CityCard__div__p}>{cityName}</p>
        </div>
    )
}

export interface IWeatherWeekday {
    weekday: string
    img: string
    celsius: string
    description: string
}
export const WeatherWeekday: React.FC<IWeatherWeekday> =
    ({weekday, img, celsius, description}): JSX.Element => {

    return (
        <div className={WeatherWeekdayStyle.WeatherWeekday__div}>
            <p
                className={`${WeatherWeekdayStyle.WeatherWeekday__div__p} 
                    ${WeatherWeekdayStyle.WeatherWeekday__div__p__weekday}`}
            >
                {weekday}
            </p>
            <img className={WeatherWeekdayStyle.WeatherWeekday__div__img} src={img} alt=" "/>
            <p className={WeatherWeekdayStyle.WeatherWeekday__div__celsius}>
                {`${celsius}`}<span className={WeatherWeekdayStyle.WeatherWeekday__div__span}>°</span>
            </p>
            <p className={WeatherWeekdayStyle.WeatherWeekday__div__p}>{description}</p>
        </div>
    )
}

function weatherCodeToString(weatherCode: string) {
    return weatherCode.replace("_", " ").toUpperCase()
}

function getDateDayName(plusDays: number): string {
    const data = new Date()
    const newDate = new Date(data.getFullYear(),data.getMonth(),data.getDate() + plusDays)
    const locales: string = 'en-US'

    return newDate.toLocaleString(locales, {weekday: 'short'})
}