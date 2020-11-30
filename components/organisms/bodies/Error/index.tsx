import React from "react";
import {RoundAnimateFrame, RoundAnimateFrameStyles} from "../../../atoms/Backgrounds/RoundAnimateFrame";
import styles from './style.module.scss'

interface IErrorBody {
    error?: string
}
export const ErrorBody: React.FC<IErrorBody> = ({error= ""}) : JSX.Element => {
    return (
        <RoundAnimateFrame style={RoundAnimateFrameStyles.small}>
            <div className={styles.ErrorBody__div}>
                <img className={styles.ErrorBody__div__img} src={'/koala.svg'} alt={' '}/>
                <p className={styles.ErrorBody__div__p}>An error has occurred</p>
                <div className={styles.ErrorBody__div__div}>
                    <p className={styles.ErrorBody__div__div__p}>{error}</p>
                </div>
            </div>
        </RoundAnimateFrame>
    )
}