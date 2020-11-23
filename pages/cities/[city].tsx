import React, {useEffect} from "react";
import {HomeTemplate} from "../../components/templates/Home";
import {NextPageContext} from "next";
import {findIndexByCompare} from "../../functions/common";
import {Climacell, IClimacellConfigParams} from "../../Classes/Climacell";
import {cities, ICities, status} from "../../config/variables";
import {useRouter} from "next/router";
import {config} from "../../config/config";
import {useDispatch} from "react-redux";
import {setWeather, setWeatherStatus} from "../../redux/actions/weather";
import {setError} from "../../redux/actions/error";
import {IWeatherObj} from "../../interfaces/weather";

const Home = ({weatherObj}: IHomeWeatherPredictionObj): JSX.Element =>  {

    const router = useRouter()
    const dispatch = useDispatch()

    useEffect( () => {

        let errno: string|null = null

        //client side
        if (weatherObj === null) {
            const city = router.query.city
            const cityIndex: number|null = getCityIndex(cities, city as string)

            if (cityIndex !== null) {
                getWeatherPrediction(cityIndex, cities, config.climacellApi).then(res => {
                    if (res instanceof Error) errorHandler(res.name, dispatch, setWeatherStatus, setError)
                    else dispatch(setWeather(res))
                })
            }
            //city wasn't found
            else errno = `${city} wasn't found`
        }
        //server side rendering
        else if (!("errno" in weatherObj)) dispatch(setWeather(weatherObj))
        //error
        else {
            errno = weatherObj.errno
        }

        if (errno !== null) errorHandler(errno, dispatch, setWeatherStatus, setError)
    },[])

    return <HomeTemplate/>
}

export default Home

function errorHandler(error: string, dispatch: (reduxAction1: void)=>void,
            setStatusAction: (status: String) => void, setErrorAction: (error: string) => void) {
    dispatch(setErrorAction(error))
    dispatch(setStatusAction(status.error))
}

interface IHomePageContext extends NextPageContext {
    query: {
        city: string
    }
}

interface IErrorObj {
    errno: string
}
interface IHomeWeatherPredictionObj {
    weatherObj: IWeatherObj|null|IErrorObj
}
Home.getInitialProps = async ({query, req}: IHomePageContext): Promise<IHomeWeatherPredictionObj|null> => {

    let weatherObj: IHomeWeatherPredictionObj = {
        weatherObj: null
    }

    //client rendering
    if (!req) return weatherObj

    //serverSide rendering
    weatherObj.weatherObj = {
        errno: ''
    }
    const city = query.city
    const cityIndex: number|null = getCityIndex(cities, city)

    if (cityIndex !== null) {
        const response = await getWeatherPrediction(cityIndex, cities, config.climacellApi)

        if (response instanceof Error) weatherObj.weatherObj.errno = response.name
        else weatherObj.weatherObj = response

        return weatherObj
    }

    //city wasn't found
    weatherObj.weatherObj.errno = `${city} was not found`

    return weatherObj
}

function getCityIndex(cities: Array<ICities>, city: string): number|null {
    return findIndexByCompare(cities, (compareElem: ICities) => compareElem.name === city)
}

async function getWeatherPrediction (cityIndex: number, cities: Array<ICities>, api: string): Promise<IWeatherObj|Error> {

    let weatherObj: IWeatherObj | Error = new Error()

    const climacellConfigParams:IClimacellConfigParams = cities[cityIndex]
    const iClimacell = new Climacell(api, climacellConfigParams.lat, climacellConfigParams.lon)
    await iClimacell.getPrediction().then(res => weatherObj = res)

    return weatherObj
}