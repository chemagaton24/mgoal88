import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { classArrayToString } from '../../helpers'

interface PropsType {
    children: ReactNode
}

export const AccordionWrapCtx = createContext<{
    state: boolean
    setState: Dispatch<SetStateAction<boolean>>
}>({
    state: false,
    setState: () => { }
})

const Wrap = (props: PropsType) => {
    const [isHover, setIsHover] = useState<boolean>(false)
    const [isActive, setIsActive] = useState<boolean>(false)

    const isMouseEnterFn = (state: boolean) => {
        setIsHover(state)
    }

    const classList = classArrayToString([
        'accordion-wrap',
        isHover && 'hovered',
        isActive && 'active'
    ])

    return (
        <div className={classList}
            onMouseEnter={() => isMouseEnterFn(true)}
            onMouseLeave={() => isMouseEnterFn(false)}
        >
            <AccordionWrapCtx.Provider value={{ state: isActive, setState: setIsActive }}>
                {props.children}
            </AccordionWrapCtx.Provider>
        </div>
    )
}

export default Wrap