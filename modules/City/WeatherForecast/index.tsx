import React from "react";
import {CityCard, WeatherCard} from "../WeatherCard";
import {cities} from "../../../config/variables";

import styles from './style.module.scss'
import {useSelector} from "react-redux";
import {IRootReducer} from "../../../redux/rootReducer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {setShow} from "../../../redux/actions/menu";
import {Dispatch} from "redux";

export const WeatherForecastBody: React.FC = (): JSX.Element => {

    const dispatch = useDispatch()

    return (
        <>
            <WeatherCard/>
            <ChooseCityMenu
                dispatch={dispatch}
            />
        </>
    )
}

interface IChooseCityMenu {
    dispatch: Dispatch<any>
}
const ChooseCityMenu: React.FC<IChooseCityMenu> = ({dispatch}): JSX.Element => {

    const { show } = useSelector((state: IRootReducer) => ({
        show: state.menu.show
    }))
    const hideMenu = () => dispatch(setShow(false))
    const display = show ? 'contents' : 'none'

    return (
        <section
            style={{display: display}}
        >
            <div className={styles.ChooseCityMenu__circle}/>
            <button
                className={styles.ChooseCityMenu__buttonExit}
            >
                <FontAwesomeIcon
                    icon={faTimes}
                    className={styles.ChooseCityMenu__exitSvg}
                    size={'lg'}
                    onClick={hideMenu}
                />
            </button>
            <Menu action={hideMenu}/>
        </section>
    )
}

interface IMenu {
    action?(): any
}
const Menu: React.FC<IMenu> = ({action = () => null}): JSX.Element => {

    const { city } = useSelector((state: IRootReducer) => ({
        city: state.weather.city
    }))

    return (
        <div className={styles.ChooseCityMenu__menu}>
            {
                cities.map(e => {

                    return (
                        <CityCard
                            key={e.name + e.img}
                            cityObj={e}
                            isActive={city === e.name}
                            action={action}
                        />
                    )
                })
            }
        </div>
    )
}