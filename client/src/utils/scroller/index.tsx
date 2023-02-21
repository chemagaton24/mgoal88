import { ReactNode, useEffect, useRef, useState } from "react"
import { isMobileFn } from "../helpers"
import { DirectionType } from "./interfaces"
import Parts from "./parts"
import "./style.css"

interface PropsType {
    children: ReactNode
    direction: DirectionType
    classList?: string
}

const Scroller = (props: PropsType) => {
    const { direction, classList } = props
    const scrollerRef = useRef<HTMLDivElement | null>(null)
    const controllerRef = useRef<HTMLDivElement | null>(null)
    const innerRef = useRef<HTMLDivElement | null>(null)
    const barRef = useRef<HTMLDivElement | null>(null)
    const [isMobile, setIsMobile] = useState(isMobileFn())
    const [isScrollActive, setIsScrollActive] = useState(false)
    const [hasScrollbar, setHasScrollbar] = useState(false)

    const setIsMobileFn = () => {
        setIsMobile(isMobileFn())
    }

    useEffect(() => {
        window.addEventListener('resize', setIsMobileFn)

        return () => window.removeEventListener('resize', setIsMobileFn)
    }, [])

    useEffect(() => {
        const scrollerElem = scrollerRef?.current
        const controllerElem = controllerRef?.current
        const innerElem = innerRef?.current
        const clientWH = (direction === 'x') ? 'clientWidth' : 'clientHeight'
        if (scrollerElem && controllerElem && innerElem) {
            const observer = new ResizeObserver(() => {
                const controllerElemWH = controllerElem[clientWH]
                const innerElemWH = innerElem[clientWH]

                if (innerElemWH > controllerElemWH) {
                    setHasScrollbar(true)
                } else {
                    setHasScrollbar(false)
                }
            })
            observer.observe(scrollerElem)
            observer.observe(controllerElem)
            observer.observe(innerElem)
        }
    }, [direction])

    const providerValue = {
        direction,
        scrollerRef,
        controllerRef,
        innerRef,
        barRef,
        hasScrollbar,
        isMobile,
        classList,
        scrollActiveState: {
            isScrollActive,
            setIsScrollActive
        }
    }

    return (
        <Parts.Provider value={providerValue}>
            <Parts.Scroller>
                <Parts.Controller>
                    <Parts.Inner>
                        {props.children}
                    </Parts.Inner>
                </Parts.Controller>
                {(!isMobile && hasScrollbar) &&
                    <Parts.Scrollbar />
                }
            </Parts.Scroller>
        </Parts.Provider>
    )
}

export default Scroller