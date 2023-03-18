import { ReactNode, useContext } from 'react'
import { AccordionWrapCtx } from './Wrap'

interface PropsType {
    children: ReactNode
}

const Parent = (props: PropsType) => {
    const { state, setState } = useContext(AccordionWrapCtx)

    const isClickedFn = () => {
        setState(!state)
    }

    return (
        <div className="accordion-parent"
            onClick={isClickedFn}
        >{props.children}</div>
    )
}

export default Parent