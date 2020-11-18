import React from "react";
import classes from "./style.module.scss";

interface IRoundAnimateFrameStyles {
    big: String
    small: String
}
export const RoundAnimateFrameStyles: IRoundAnimateFrameStyles = {
    big: 'big',
    small: 'small'
}
interface IRoundAnimateFrame {
    style?: String
}
export const RoundAnimateFrame : React.FC<IRoundAnimateFrame> = ({children,
      style}) : JSX.Element => {

    let styleFrame = classes.RoundAnimateFrame__bigFrame

    if (style !== undefined) {
        switch (style) {
            case RoundAnimateFrameStyles.small:
                styleFrame = classes.RoundAnimateFrame__smallFrame
        }
    }

    return (
        <div className={`${classes.RoundAnimateFrame} ${styleFrame}`}>
            {children}
        </div>
    )
}