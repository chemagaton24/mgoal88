import { useCallback, useContext, useEffect, useState } from "react"
import { getPercent } from "../../helpers"
import { ScrollerCtx } from "./Provider"

const Scrollbar = () => {
    const { direction, scrollerRef, controllerRef, innerRef, barRef } = useContext(ScrollerCtx)
    const [barLength, setBarLength] = useState(0)
    const [barPos, setBarPos] = useState(0)

    const scrollEventFn = useCallback(() => {
        const scrollLT = (direction === 'x') ? 'scrollLeft' : 'scrollTop'
        const clientWH = (direction === 'x') ? 'clientWidth' : 'clientHeight'
        const controllerElem = controllerRef?.current
        const innerElem = innerRef?.current
        const barElem = barRef?.current

        if (barElem && controllerElem && innerElem) {
            const percentage = getPercent(controllerElem[scrollLT], innerElem[clientWH] - controllerElem[clientWH])
            const res = Math.floor(((controllerElem[clientWH] - barElem[clientWH]) * percentage) / 100)
            setBarPos(res)
        }
    }, [direction, controllerRef, innerRef, barRef])

    useEffect(() => {
        const clientWH = (direction === 'x') ? 'clientWidth' : 'clientHeight'
        const scrollerElem = scrollerRef?.current
        const controllerElem = controllerRef?.current
        const innerElem = innerRef?.current

        if (scrollerElem && controllerElem && innerElem) {
            const observer = new ResizeObserver(() => {
                const percentage = getPercent(controllerElem[clientWH], innerElem[clientWH])
                const calc = controllerElem[clientWH] * percentage / 100
                setBarLength(calc)
                scrollEventFn()
            })
            observer.observe(scrollerElem)
            observer.observe(controllerElem)
            observer.observe(innerElem)
        }

    }, [direction, scrollerRef, controllerRef, innerRef, scrollEventFn])

    useEffect(() => {
        const controllerElem = controllerRef?.current

        if (controllerElem) {
            controllerElem.addEventListener('scroll', scrollEventFn)

            return () => {
                controllerElem.removeEventListener('scroll', scrollEventFn)
            }
        }
    }, [controllerRef, scrollEventFn])

    return (
        <div className="scrollbar">
            <div className="track">
                <div className="bar" ref={barRef} style={{
                    width: direction === 'x' ? barLength : undefined,
                    height: direction === 'y' ? barLength : undefined,
                    left: direction === 'x' ? barPos : undefined,
                    top: direction === 'y' ? barPos : undefined
                }}></div>
            </div>
        </div>
    )
}

export default Scrollbar