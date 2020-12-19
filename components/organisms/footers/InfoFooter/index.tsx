import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, IconDefinition} from "@fortawesome/free-brands-svg-icons";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";

import classes from './style.module.scss'

interface aList {
    icon: IconDefinition,
    href: string
}

export const InfoFooter: React.FC = (): JSX.Element => {

    const array: Array<aList> = [
        { icon : faGithub, href: 'https://github.com/NikitaSorokinn'},
        { icon: faUserCircle, href: ''}
    ]

    return (
        <div className={classes.InfoFooter__div}>
            {
                array.map((v, i) => {
                    return (
                        <a
                            key={i}
                            className={classes.InfoFooter__svg}
                            href={v.href}
                            target={'_blank'}
                        >
                            <FontAwesomeIcon
                                icon={v.icon}
                                size={'lg'}
                            />
                        </a>
                    )
                })
            }
        </div>
    )
}