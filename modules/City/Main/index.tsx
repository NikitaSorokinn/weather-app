import React from "react";
import {SunSvg} from "../../../components/atoms/Svg/Sun/index.jsx";
import {DateHeader} from "../../../components/organisms/headers/DateHeader";
import {FullHeightGradientBackground} from "../../../components/atoms/Backgrounds/FullHeightGradient";
import {InfoFooter} from "../../../components/organisms/footers/InfoFooter";
import {useSelector} from "react-redux";
import {IRootReducer} from "../../../redux/rootReducer";
import {WeatherForecastBodyCity} from "../WeatherForecast";
import {status as statusValue} from "../../../config/variables";
import {ErrorBody} from "../../../components/organisms/bodies/Error";
import {FullScreenOverlay} from "../../../components/atoms/Backgrounds/FullScreenOverlay";
import {BouncingLoader} from "../../../components/atoms/Loaders/BouncingLoader";
import classes from './style.module.scss'

interface IMainCity {
    isSun?: boolean
    isEmpty?: boolean
}
export const MainCityModule: React.FC<IMainCity> = ({isSun = true,
    isEmpty = false}): JSX.Element => {

    const jsxSun = isSun ? <SunSvg/> : <></>
    const jsxBody = isEmpty? <></> : <StatusComponent/>

    return (
        <>
            <div className={classes.MainCity__div}>
                <DateHeader/>
                {jsxSun}
                <FullHeightGradientBackground>
                    {jsxBody}
                </FullHeightGradientBackground>
            </div>
            <InfoFooter/>
        </>
    )
}

const StatusComponent: React.FC = (): JSX.Element => {

    const {status, error} = useSelector((state: IRootReducer) => ({
        status: state.weather.status,
        error: state.error.error
    }))

    let jsx = <WeatherForecastBodyCity/>
    let jsx2 = <></>

    if (status === statusValue.error) jsx = <ErrorBody error={error}/>
    else if (status === statusValue.downloading) {
        jsx2 =
            <FullScreenOverlay
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                backgroundColor={'rgba(119,136,153,0.3)'}
            >
                <BouncingLoader/>
            </FullScreenOverlay>
    }

    return (
        <>
            {jsx}
            {jsx2}
        </>
    )
}