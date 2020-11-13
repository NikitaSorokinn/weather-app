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

        //client side
        if (weatherObj === null) {
            const city = router.query.city
            const cityIndex: number|null = getCityIndex(cities, city as string)

            if (cityIndex !== null) {
                getWeatherPrediction(cityIndex, cities, config.climacellApi).then(res => console.log(res))
            } else {
                //city wasn't found
            }
        }
        //server side rendering
        else if (weatherObj instanceof Array) {
            dispatch(setWeather(weatherObj))
        }
        //error
        else {
        }
    },[])

    return <HomeTemplate/>
}

export default Home

interface IHomePageContext extends NextPageContext {
    query: {
        city: string
    }
}

interface IHomeWeatherPredictionObj {
    weatherObj: Array<object>|null|object
}
Home.getInitialProps = async ({query, req}: IHomePageContext): Promise<IHomeWeatherPredictionObj|null> => {

    let weatherObj: IHomeWeatherPredictionObj = {
        weatherObj: null
    }

    //client rendering
    if (!req) return weatherObj

    //serverSide rendering
    const cityIndex: number|null = getCityIndex(cities, query.city)
    if (cityIndex !== null) {
        weatherObj.weatherObj = await getWeatherPrediction(cityIndex, cities, config.climacellApi)
        return weatherObj
    }

    //city wasn't found
    weatherObj.weatherObj = {
        errno: "This city wasn't found"
    }
    return weatherObj
}

function getCityIndex(cities: Array<ICities>, city: string): number|null {
    return findIndexByCompare(cities, (compareElem: ICities) => {
        return compareElem.name === city
    })
}

async function getWeatherPrediction (cityIndex: number, cities: Array<ICities>, api: string) {

    let weatherObj = {}

    const climacellConfigParams:IClimacellConfigParams = cities[cityIndex]
    const iClimacell = new Climacell(api, climacellConfigParams.lat, climacellConfigParams.lon)
    await iClimacell.getPrediction().then(res => {weatherObj = res})

    return weatherObj
}