import { ReactNode, useContext, } from "react"
import { ScrollerCtx } from "./Provider"

interface PropsType {
    children: ReactNode
}

const Inner = (props: PropsType) => {
    const { innerRef } = useContext(ScrollerCtx)

    return (
        <div className="inner" ref={innerRef}>
            {props.children}
        </div>
    )
}

export default Inner