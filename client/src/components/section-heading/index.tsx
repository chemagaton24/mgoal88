import React, { ReactNode } from 'react'
import { classArrayToString } from '../../utils/helpers'
import './style.css'

interface MainProps {
    text: string
    className?: string
    col2?: ReactNode
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const SectionHeading = (props: MainProps) => {
    let classNameArr = [
        'section-heading',
        props.className && ''
    ]
    const classNameList = classArrayToString(classNameArr)

    const HTag = props.type as React.ElementType || 'h3'

    return (
        <div className="row m-b-40 flex flex-jc-b g-col-16">
            <div className="col-1">
                <HTag className={classNameList}>{props.text}</HTag>
            </div>
            {props.col2 &&
                <div className="col col-2">{props.col2}</div>
            }
        </div>
    )
}

export default SectionHeading