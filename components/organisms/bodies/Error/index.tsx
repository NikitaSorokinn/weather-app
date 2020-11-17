import React from "react";
import {RoundAnimateFrame} from "../../../atoms/Backgrounds/RoundAnimateFrame";

interface IErrorBody {
    error: string
}
export const ErrorBody: React.FC<IErrorBody> = ({error}) : JSX.Element => {
    return (
        <RoundAnimateFrame>
            <p>{error}</p>
        </RoundAnimateFrame>
    )
}