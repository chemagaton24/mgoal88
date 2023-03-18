import { createContext, Dispatch, MutableRefObject, ReactNode, SetStateAction } from "react"
import { DirectionType } from "../interfaces"

interface ProviderType {
    direction: DirectionType
    scrollerRef: MutableRefObject<HTMLDivElement | null> | null
    controllerRef: MutableRefObject<HTMLDivElement | null> | null
    innerRef: MutableRefObject<HTMLDivElement | null> | null
    barRef: MutableRefObject<HTMLDivElement | null> | null
    hasScrollbar: boolean
    isMobile: boolean
    classList: string | undefined
    scrollActiveState: {
        isScrollActive: boolean
        setIsScrollActive: Dispatch<SetStateAction<boolean>>
    }
}

interface PropsType {
    children: ReactNode
    value: ProviderType
}

export const ScrollerCtx = createContext<ProviderType>({
    direction: 'x',
    scrollerRef: null,
    controllerRef: null,
    innerRef: null,
    barRef: null,
    hasScrollbar: false,
    isMobile: false,
    classList: '',
    scrollActiveState: {
        isScrollActive: false,
        setIsScrollActive: () => { }
    }
})

const Provider = (props: PropsType) => {
    const { direction, scrollerRef, controllerRef, innerRef, barRef, isMobile, classList, hasScrollbar, scrollActiveState } = props.value

    const providerValue = {
        direction,
        scrollerRef,
        controllerRef,
        innerRef,
        barRef,
        hasScrollbar,
        isMobile,
        classList,
        scrollActiveState
    }

    return (
        <ScrollerCtx.Provider value={providerValue}>
            {props.children}
        </ScrollerCtx.Provider>
    )
}

export default Provider