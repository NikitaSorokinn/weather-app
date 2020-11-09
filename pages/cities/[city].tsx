import React from "react";
import {HomeTemplate} from "../../components/templates/Home";
import {NextComponentType, NextPageContext} from "next";
import {globalVar} from "../../config/variables";
import {awaitExpression} from "@babel/types";

const Home: NextComponentType = (): JSX.Element => {
    return <HomeTemplate/>
}

export default Home

interface IHomePageContext extends NextPageContext {
    query: {
        city: string
    }
}
interface IHomeWeatherPredictionObj {
    post: object|null
}
Home.getInitialProps = async ({query, req}: IHomePageContext): Promise<IHomeWeatherPredictionObj> => {

    fetch(`https://api.climacell.co/v3/weather/realtime?lat=51.5074&lon=0.1278&unit_system=si&fields=wind_gust&apikey=${globalVar.climacellApi}`, {
        "method": "GET",
        "headers": {}
    })
        .then(async response => {
            console.log(await response.json());
        })
        .catch(err => {
            console.error(err);
        });

    let post: IHomeWeatherPredictionObj = {
        post: null
    }

    if (!req) return post

    post.post = {}

    return post
}
