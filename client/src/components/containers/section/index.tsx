import { ReactNode } from 'react'
import { classArrayToString } from '../../../utils/helpers'
import './style.css'

interface PropsType {
    children: ReactNode
    name?: string
    classList?: string
    padded?: boolean
    gray?: boolean
}

const Section = (props: PropsType) => {
    const classList = classArrayToString([
        'section',
        props.name && `section-${props.name}`,
        props.padded && 'section-padded',
        props.gray && 'theme-gray',
        props.classList && props.classList
    ])

    return (
        <section className={classList}>
            {props.children}
        </section>
    )
}

export default Section