import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

import classes from "./style.module.scss"

export const DateHeader: React.FC = (): JSX.Element => {

    const currentDate: string = getCurrentDateString()

    return (
        <header className={classes.DateHeader__header}>
            <div className={classes.DateHeader__header__div}>
                <FontAwesomeIcon
                    className={classes.DateHeader__barIcon}
                    icon={faBars}
                    size={'lg'}
                />
                <p className={classes.DateHeader__header__div__p}>{currentDate}</p>
            </div>
        </header>
    )
}

function getCurrentDateString(): string {
    const date: Date = new Date()
    const locales: string = 'en-US'

    const weekDay: string = date.toLocaleString(locales, {weekday: 'long'})
    const day: string = date.toLocaleString(locales, {day: 'numeric'})
    const month: string = date.toLocaleString(locales, {month: 'long'})

    return `${weekDay}, ${addDaySuffix(Number(day))} ${month}`
}

function addDaySuffix(day: number): string {

    const suffix: string =
          (day % 10 === 1 && day !== 11) ? 'st'
        : (day % 10 === 2 && day !== 12) ? 'nd'
        : (day % 10 === 3 && day !== 13) ? 'rd'
        : 'th'

    return `${day}${suffix}`
}