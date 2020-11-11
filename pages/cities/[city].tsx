import React, {useEffect, useState} from "react";
import {HomeTemplate} from "../../components/templates/Home";
import {NextPageContext} from "next";
import {findIndexByCompare} from "../../functions/common";
import {Climacell, IClimacellConfigParams} from "../../Classes/Climacell";
import {cities, globalVar, ICities} from "../../config/variables";
import {useRouter} from "next/router";

interface HomeProps {
    weatherObj: IHomeWeatherPredictionObj|null
}
const Home = ({weatherObj}: HomeProps): JSX.Element =>  {
    const router = useRouter()
    const [weather, setWeather] = useState(weatherObj)

    useEffect( () => {

        if (weather === null) {
            //client side
            const city = router.query.city
            const cityIndex: number|null = getCityIndex(cities, city as string)
            if (cityIndex !== null) {
                getWeatherPrediction(cityIndex, cities, globalVar.climacellApi).then(res => console.log(res))
            } else {
                //city wasn't found
            }
        }
        // @ts-ignore
        else if (!weather?.errno) {
            //server side

        } else {
            //error
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
    weatherObj: object|null
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
        weatherObj.weatherObj = await getWeatherPrediction(cityIndex, cities, globalVar.climacellApi)
        return weatherObj
    }

    //city wasn't found
    return null
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