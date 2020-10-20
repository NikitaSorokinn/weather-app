import React from "react";
import {appVar} from "../../../config/variables";

export interface IMainPageHeadTags {
    title?: string
    description?: string
    type?: string
    url?: string
}

export const MainPageHeadTags: React.FC<IMainPageHeadTags> = (
    {
        title= 'WeatherApp',
        description = '6 days weather forecast app. Find out the weather of the capitals of the world',
        type= 'website',
        url= appVar.url
    }) => {

    return (
        <>
            <title>{title}</title>
            <meta name={'description'}
                  content={description}
            />
            <meta property={'og:title'} content={title}/>
            <meta property={'og:type'} content={type}/>
            <meta property={'og:url'} content={url}/>
        </>
    )
}