import React from "react";
import {globalVar} from "../../../config/variables";

export interface IMainPageHeadTags {
    title?: string
    description?: string
    type?: string
    url?: string
}

export const MainPageHeadTags: React.FC<IMainPageHeadTags> =
    ({
        title= 'WeatherApp',
        description = '6 days weather forecast app. Find out the weather of the capitals of the world',
        type= 'website',
        url= globalVar.url
    })
: JSX.Element => {

    return (
        <>
            <title>{title}</title>
            <meta name={'description'} content={description}/>
            <meta property={'og:title'} content={title}/>
            <meta property={'og:type'} content={type}/>
            <meta property={'og:url'} content={url}/>
            <meta property={'og:site_name'} content={title}/>
            <meta property={'og:description'} content={description}/>
            <meta property={'og:image'} content={'/og-image.png'}/>
            <meta property={'og:image:width'} content={'572'}/>
            <meta property={'og:image:height'} content={'286'}/>
        </>
    )
}