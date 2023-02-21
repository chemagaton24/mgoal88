import { ReactNode } from 'react'
import { classArrayToString } from '../../helpers'

interface PropsType {
    children: ReactNode
    openStyle?: 'default' | 'dropdown'
}

const Master = (props: PropsType) => {
    const classList = classArrayToString([
        'accordion',
        `accordion-open-style-${props.openStyle ? props.openStyle : 'default'}`
    ])

    return (
        <div className={classList}>
            {props.children}
        </div>
    )
}

export default Master