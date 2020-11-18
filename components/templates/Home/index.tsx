import React from 'react'

import {DateHeader} from "../../organisms/headers/DateHeader";
import {WeatherForecastBody} from "../../organisms/bodies/WeatherForecast";
import classes from "./style.module.scss";
import {status as statusValue} from "../../../config/variables";
import {FullHeightGradientBackground} from "../../atoms/Backgrounds/FullHeightGradient";
import {SunSvg} from "../../atoms/Svg/Sun/index.jsx";
import {BouncingLoader} from "../../atoms/Loaders/BouncingLoader";
import {ErrorBody} from "../../organisms/bodies/Error";
import {useSelector} from "react-redux";
import {IRootReducer} from "../../../redux/rootReducer";

interface IHomeTemplate {
    isSun?: boolean
    isEmpty?: boolean
}
export const HomeTemplate: React.FC<IHomeTemplate> = ({isSun = true,
    isEmpty = false}): JSX.Element => {

    const jsxSun = isSun ? <SunSvg/> : <></>
    const jsxBody = isEmpty? <></> : <StatusComponent/>

    return (
        <div className={classes.HomeTemplate__div}>
            <DateHeader/>
            {jsxSun}
            <FullHeightGradientBackground>
                {jsxBody}
            </FullHeightGradientBackground>
        </div>
    )
}

const StatusComponent: React.FC = (): JSX.Element => {

    const {status, error} = useSelector((state: IRootReducer) => ({
        status: state.weather.status,
        error: state.error.error
    }))

    let jsx = <BouncingLoader/>

    if (status === statusValue.success) jsx = <WeatherForecastBody/>
    else if (status === statusValue.error) jsx = <ErrorBody error={error}/>

    return (
        jsx
    )
}