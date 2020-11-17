import React from "react";

import classes from "./style.module.scss";

export const RoundAnimateFrame : React.FC = ({children}) : JSX.Element => {
    return (
        <div className={classes.RoundAnimateFrame}>
            {children}
        </div>
    )
}