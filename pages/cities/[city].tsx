import React, {useEffect} from "react";
import {HomeTemplate} from "../../components/templates/Home";
import {NextPageContext} from "next";
import {getClimacellConfigParams} from "../../functions/city";
import {Climacell, IClimacellConfigParams} from "../../Classes/Climacell";
import {globalVar} from "../../config/variables";

interface HomeProps {
    weatherObj: IHomeWeatherPredictionObj|null
}
const Home = ({weatherObj}: HomeProps): JSX.Element =>  {

    useEffect(() => {

        // @ts-ignore
        if (weatherObj.errno) cnsole.log(1)
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
    const climacellConfigParams:IClimacellConfigParams|undefined = getClimacellConfigParams(query.city)
    if (climacellConfigParams !== undefined) {
        const iClimacell = new Climacell(globalVar.climacellApi, climacellConfigParams.lat, climacellConfigParams.lon)
        await iClimacell.getPrediction().then(res => {weatherObj.weatherObj = res})

        return weatherObj
    }

    //city wasn't found
    return null
}
