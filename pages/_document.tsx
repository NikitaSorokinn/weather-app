import React from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document'

import {MainPageHeadTags} from "../components/organisms/HeadTags/MainPageHeadTags";

export default class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap' rel='stylesheet'/>
                    <meta charSet={"utf-8"}/>
                    <MainPageHeadTags/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}