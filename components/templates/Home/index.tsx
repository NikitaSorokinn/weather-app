import React from 'react'

import {DateHeader} from "../../organisms/headers/DateHeader";
import {WeatherForecastBody} from "../../organisms/bodies/WeatherForecast";

import classes from "./style.module.scss";

export const HomeTemplate: React.FC = (): JSX.Element => {
    return (
        <div className={classes.HomeTemplate__div}>
            <DateHeader/>
            <WeatherForecastBody/>
        </div>
    )
}