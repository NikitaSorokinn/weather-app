import React from "react";

import classes from './style.module.scss'

export const FullHeightGradientBackground: React.FC = ({children}) : JSX.Element => {
    return (
        <div className={classes.FullHeightGradientSun__div}>
            {children}
        </div>
    )
}