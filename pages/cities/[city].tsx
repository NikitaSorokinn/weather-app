import React, {useEffect} from "react";
import {HomeTemplate} from "../../components/templates/Home";
import {NextPageContext} from "next";
import {findIndexByCompare} from "../../functions/common";
import {Climacell, IClimacellConfigParams} from "../../Classes/Climacell";
import {cities, ICities} from "../../config/variables";
import {useRouter} from "next/router";
import {config} from "../../config/config";
import {useDispatch} from "react-redux";
import {setWeather} from "../../redux/actions/weather";

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
                    if (res instanceof Array) dispatch(setWeather(res))
                    else errorHandler(res.name)
                })
            }
            //city wasn't found
            else errno = `${city} wasn't found`
        }
        //server side rendering
        else if (weatherObj instanceof Array) dispatch(setWeather(weatherObj))
        //error
        else {
            const serverError = weatherObj.errno
            if (serverError) errno = serverError
            else errno = "Server error"
        }

        if (errno !== null) errorHandler(errno)
    },[])

    return <HomeTemplate/>
}

export default Home

function errorHandler(error: string) {
    console.log(error)
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
    weatherObj: Array<object>|null|IErrorObj
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

        if (response instanceof Array) weatherObj.weatherObj = response
        else weatherObj.weatherObj.errno = response.name

        return weatherObj
    }

    //city wasn't found
    weatherObj.weatherObj.errno = `${city} was not found`

    return weatherObj
}

function getCityIndex(cities: Array<ICities>, city: string): number|null {
    return findIndexByCompare(cities, (compareElem: ICities) =>  compareElem.name === city)
}

async function getWeatherPrediction (cityIndex: number, cities: Array<ICities>, api: string): Promise<Array<object>|Error> {

    let weatherObj: Array<object> | Error = Array()

    const climacellConfigParams:IClimacellConfigParams = cities[cityIndex]
    const iClimacell = new Climacell(api, climacellConfigParams.lat, climacellConfigParams.lon)
    await iClimacell.getPrediction().then(res => {weatherObj = res})

    return weatherObj
}