import React from 'react'

import styles from './style.module.scss'

interface IFullScreenOverlay {
    height?: string
    backgroundColor?: string
    style?: object
    styleClass?: string
}

export const FullScreenOverlay: React.FC<IFullScreenOverlay> = ({children,
    backgroundColor = '', height = '100vh', style = {},
    styleClass = ''}): JSX.Element => {

    return (
        <div
            style={{
                backgroundColor: backgroundColor,
                height: height,
                ...style
            }}
            className={`${styles.FullScreenOverlay__div} ${styleClass}`}
        >
            {children}
        </div>
    )
}
