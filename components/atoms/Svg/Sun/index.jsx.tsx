import React from "react";

import classes from './style.module.scss'

export const SunSvg: React.FC = (): JSX.Element => {
    return (
        <img
            src={'/eveningSun.svg'}
            className={classes.SunSvg__img}
            alt={" "}
        />
    )
}