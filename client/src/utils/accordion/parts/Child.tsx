import { ReactNode } from 'react'

interface PropsType {
    children: ReactNode
}

const Child = (props: PropsType) => {
    return (
        <div className="accordion-child">{props.children}</div>
    )
}

export default Child