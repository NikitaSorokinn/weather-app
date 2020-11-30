import React from 'react'

import styles from './style.module.scss'

interface IFullScreenOverlay {
    height?: string
    backgroundColor?: string
    style?: object
}

export const FullScreenOverlay: React.FC<IFullScreenOverlay> = ({children, backgroundColor, height, style}): JSX.Element => {
    return (
        <div
            style={{
                backgroundColor: backgroundColor !== undefined ? backgroundColor: '',
                height: height !== undefined ? height: '100vh',
                ...style
            }}
            className={styles.FullScreenOverlay__div}
        >
            {children}
        </div>
    )
}
