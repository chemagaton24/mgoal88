import { ReactNode } from 'react'
import { classArrayToString } from '../../utils/helpers'

interface PropsType {
    children: ReactNode
    name: string
    kind?: string
    classList?: string
    style?: React.CSSProperties | undefined
    onClick?: () => void
}

const Module = (props: PropsType) => {
    const classList = classArrayToString([
        'module',
        `module-${props.name}`,
        props.kind && `module-kind-${props.kind}`,
        props.classList && props.classList
    ])

    return (
        <div className={classList} onClick={props.onClick} style={props.style}>
            {props.children}
        </div>
    )
}

export default Module