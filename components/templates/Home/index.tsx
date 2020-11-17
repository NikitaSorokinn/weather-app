import React from 'react'

import {DateHeader} from "../../organisms/headers/DateHeader";
import {WeatherForecastBody} from "../../organisms/bodies/WeatherForecast";
import classes from "./style.module.scss";
import {IStatus, status as statusValue} from "../../../config/variables";
import {FullHeightGradientBackground} from "../../atoms/Backgrounds/FullHeightGradient";
import {SunSvg} from "../../atoms/Svg/Sun/index.jsx";
import {BouncingLoader} from "../../atoms/Loaders/BouncingLoader";
import {ErrorBody} from "../../organisms/bodies/Error";

interface IHomeTemplate {
    isSun?: boolean
    isEmpty?: boolean
    status?: IStatus
}
export const HomeTemplate: React.FC<IHomeTemplate> = ({isSun = true, status,
    isEmpty = false}): JSX.Element => {

    const jsxSun = isSun ? <SunSvg/> : <></>
    const jsxBody = isEmpty? <></> : <StatusComponent status={status}/>

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

interface IStatusComponent {
    status: IStatus|undefined
}
const StatusComponent: React.FC<IStatusComponent> = ({status}): JSX.Element => {

    let currentStatus: IStatus | undefined | String = status
    if (status === undefined) {
        currentStatus = statusValue.success
    }

    let jsx = <BouncingLoader/>

    if (currentStatus === statusValue.success) jsx = <WeatherForecastBody/>
    else if (currentStatus === statusValue.error) jsx = <ErrorBody error={'New Error'}/>

    return (
        jsx
    )
}