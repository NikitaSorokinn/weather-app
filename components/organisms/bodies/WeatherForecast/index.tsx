import React from "react";
import {FullHeightGradientBackground} from "../../../atoms/Backgrounds/FullHeightGradient";
import {SunSvg} from "../../../atoms/Svg/Sun/index.jsx";
import {WeatherCard} from "../../elements/WeatherCard";

export const WeatherForecastBody: React.FC = (): JSX.Element => {
    return (
        <FullHeightGradientBackground>
            <SunSvg/>
            <WeatherCard/>
        </FullHeightGradientBackground>
    )
}