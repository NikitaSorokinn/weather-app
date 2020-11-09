import React from "react";

import WeatherCardStyle from './style.module.scss'
import CelsiusComponentStyle from './styleCelsiusComponent.module.scss'
import WeatherNameComponentStyle from './styleWeatherNameComponent.module.scss'
import WeatherAdditionalInfoStyle from './styleWeatherAdditionalInfo.module.scss'
import WeatherCloudsStyle from './styleWeatherClouds.module.scss'
import ShowplaceStyle from './styleShowplace.module.scss'
import PlaceNameStyle from './stylePlaceName.module.scss'
import CityCardStyle from './styleCityCard.module.scss'
import WeatherWeekdayStyle from './styleWeatherWeekday.module.scss'

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
                    <Showplace pictureSrc={'/big-ben-in-london.svg'}/>
                    <PlaceName placeName={'LONDON'}/>
                </div>
            </div>
            <div className={WeatherCardStyle.WeatherCard__div__bottom}>
                <div className={WeatherCardStyle.WeatherCard__div__bottom__half1}>
                    <CityCard
                        img={'/london-color.svg'}
                        cityName={'London'}
                        isActive={true}
                    />
                    <CityCard img={'/moscow.svg'} cityName={'Moscow'}/>
                    <CityCard img={'/paris.svg'} cityName={'Paris'}/>
                    <CityCard img={'/burj-al-arab.svg'} cityName={'Dubai'}/>
                </div>
                <div className={WeatherCardStyle.WeatherCard__div__bottom__half2}>
                    <WeatherWeekday
                        img={'/285ec93-cloudy.svg'}
                        celsius={'12°'}
                        weekday={'MON'}
                        description={'Light freezing rain falling in fine pieces'}
                    />
                    <WeatherWeekday
                        img={'/285ec93-cloudy.svg'}
                        celsius={'12°'}
                        weekday={'MON'}
                        description={'Thunderstorm conditions'}
                    />
                    <WeatherWeekday
                        img={'/285ec93-cloudy.svg'}
                        celsius={'12°'}
                        weekday={'MON'}
                        description={'Light freezing rain falling in fine pieces'}
                    />
                    <WeatherWeekday
                        img={'/285ec93-cloudy.svg'}
                        celsius={'12°'}
                        weekday={'MON'}
                        description={'Light freezing rain falling in fine pieces'}
                    />
                    <WeatherWeekday
                        img={'/285ec93-cloudy.svg'}
                        celsius={'12°'}
                        weekday={'MON'}
                        description={'Light freezing rain falling in fine pieces'}
                    />
                </div>
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

    const cloudImg: string = '/big-cloud.svg'

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
            <p className={WeatherWeekdayStyle.WeatherWeekday__div__celsius}>{celsius}</p>
            <p className={WeatherWeekdayStyle.WeatherWeekday__div__p}>{description}</p>
        </div>
    )
}