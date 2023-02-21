import { ReactNode } from 'react'

interface PropsType {
    children: ReactNode
}

const Body = (props: PropsType) => {
    return (
        <div className="modal-body">{props.children}</div>
    )
}

export default Body