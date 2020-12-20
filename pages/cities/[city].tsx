import React, {useEffect, useState} from "react";
import {HomeTemplate} from "../../components/templates/Home";
import {NextPageContext} from "next";
import {findIndexByCompare} from "../../functions/common";
import {IClimacellGetPredictionParams} from "../../Classes/Climacell";
import {cities, ICities, status} from "../../config/variables";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {setWeather, setWeatherStatus} from "../../redux/actions/weather";
import {setError} from "../../redux/actions/error";
import {IWeatherObj} from "../../interfaces/weather";
import {iClimacell, iLocalStorage} from "../../config/classes";

const Home = ({weatherObj}: IHomeWeatherPredictionObj): JSX.Element =>  {

    const router = useRouter()
    const dispatch = useDispatch()
    const city = router.query.city
    const [isFirst, setIsFirst] = useState(true)

    useEffect( () => {

        iLocalStorage.clear()

        let errno: string|null = null
        const cityIndex: number|null = getCityIndex(cities, city as string)

        //client side
        if (weatherObj === null) {

            if (cityIndex !== null) setWeatherHandler(cityIndex, dispatch)
            //city wasn't found
            else errno = `${city} wasn't found`
        }
        //server side rendering
        else if (!("errno" in weatherObj)) {
            if (cityIndex !== null) {
                dispatch(setWeather(weatherObj, cities[cityIndex].name))
                iLocalStorage.set(cities[cityIndex].name, JSON.stringify(weatherObj))
            }
            else errno = `${city} wasn't found`
        }
        //error
        else errno = weatherObj.errno

        if (errno !== null) errorHandler(errno, dispatch, setWeatherStatus, setError)
        setIsFirst(false)
    },[])

    //change city's weather
    useEffect(() => {
        if (!isFirst) {
            const cityIndex: number|null = getCityIndex(cities, city as string)

            if (cityIndex !== null) {
                dispatch(setWeatherStatus(status.downloading))

                const cityName: string = cities[cityIndex].name
                const weatherFromStorage: string|null = iLocalStorage.get(cityName)

                if (weatherFromStorage !== null) dispatch(setWeather(JSON.parse(weatherFromStorage), cityName))
                else setWeatherHandler(cityIndex, dispatch)
            }
        }
    }, [city])

    return <HomeTemplate/>
}

export default Home

function setWeatherHandler(cityIndex: number, dispatch: (func: any) => void):void {
    getWeatherPrediction(cities[cityIndex]).then(res => {
        if (res instanceof Error) errorHandler(res.message, dispatch, setWeatherStatus, setError)
        else {
            iLocalStorage.set(cities[cityIndex].name, JSON.stringify(res))
            dispatch(setWeather(res, cities[cityIndex].name))
        }
    })
}

function errorHandler(error: string, dispatch: (reduxAction1: void)=>void,
            setStatusAction: (status: String) => void, setErrorAction: (error: string) => void): void {
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
        const response = await getWeatherPrediction(cities[cityIndex])

        if (response instanceof Error) weatherObj.weatherObj.errno = response.message
        else weatherObj.weatherObj = response

        return weatherObj
    }

    //city wasn't found
    weatherObj.weatherObj.errno = `${city} was not found`

    return weatherObj
}

function getCityIndex(cities: Array<ICities>, city: string): number|null {
    return findIndexByCompare(cities,
        (compareElem: ICities) => compareElem.name.toLowerCase() === city.toLowerCase())
}

async function getWeatherPrediction (climacellConfigParams:IClimacellGetPredictionParams): Promise<IWeatherObj|Error> {

    let weatherObj: IWeatherObj | Error = new Error()
    const {lat, lon}: IClimacellGetPredictionParams = climacellConfigParams

    await iClimacell.getPrediction({lat, lon}).then(res => weatherObj = res)

    return weatherObj
}