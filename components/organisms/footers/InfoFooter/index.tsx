import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from './style.module.scss'
import {attributions, socialNetworks} from "../../../../config/variables";

export const InfoFooter: React.FC = (): JSX.Element => {

    const attributionsLength: number = attributions.length - 1

    return (
        <div className={classes.InfoFooter__div}>
            <div className={classes.InfoFooter__attribution__div}>
                <div>
                    Icons made by
                    {' '}
                    {
                        attributions.map((v, i) => {

                            const author: string = v.author

                            return (
                                <span key={i}>
                                    <a href={`https://www.flaticon.com/authors/${author}`} title={author}>{author}</a>
                                    {i === attributionsLength ? "" : ", "}
                                </span>
                            )
                        })
                    }
                    {' '}
                    from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </div>
                <div>
                    <span>Powered by <a href={'https://www.climacell.co/'}>ClimaCell</a></span>
                </div>
            </div>
            <div>
                {
                    socialNetworks.map((v, i) => {
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
        </div>
    )
}