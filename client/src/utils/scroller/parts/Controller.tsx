import { ReactNode, useCallback, useContext, useEffect, useState } from "react"
import { ScrollerCtx } from "./Provider"

interface PropsType {
    children: ReactNode
}

const Controller = (props: PropsType) => {
    const { direction, scrollerRef, controllerRef, innerRef, barRef, hasScrollbar, scrollActiveState } = useContext(ScrollerCtx)
    const { isScrollActive, setIsScrollActive } = scrollActiveState
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false)
    const [isBarMouseDown, setIsBarMouseDown] = useState<boolean>(false)
    const [oldScrollPos, setOldScrollPos] = useState<number>(0)
    const [oldMousePos, setOldMousePos] = useState<number>(0)
    const [scrollBarThickness, setScrollBarThickness] = useState<number>(0)

    const mouseDownFn = useCallback((e: MouseEvent | React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const scrollLT = (direction === 'x') ? 'scrollLeft' : 'scrollTop'
        const clientXY = (direction === 'x') ? 'clientX' : 'clientY'
        setIsMouseDown(true)
        const controllerElem = controllerRef?.current
        if (controllerElem) {
            setOldScrollPos(controllerElem[scrollLT])
            setOldMousePos(e[clientXY])
        }
    }, [direction, controllerRef])

    const mouseUpFn = useCallback(() => {
        setIsMouseDown(false)
        setIsBarMouseDown(false)
        setIsScrollActive(false)
    }, [setIsScrollActive])

    const barMouseDownFn = useCallback((e: MouseEvent) => {
        const scrollLT = (direction === 'x') ? 'scrollLeft' : 'scrollTop'
        const clientXY = (direction === 'x') ? 'clientX' : 'clientY'
        setIsBarMouseDown(true)
        const controllerElem = controllerRef?.current
        if (controllerElem) {
            setOldScrollPos(controllerElem[scrollLT])
            setOldMousePos(e[clientXY])
        }
    }, [direction, controllerRef])

    const barMouseUpFn = useCallback(() => {
        setIsBarMouseDown(false)
    }, [])

    const mouseMoveFn = useCallback((e: MouseEvent | React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const clientWH = (direction === 'x') ? 'clientWidth' : 'clientHeight'
        const clientXY = (direction === 'x') ? 'clientX' : 'clientY'
        const controllerElem = controllerRef?.current
        const innerElem = innerRef?.current

        if (controllerElem && innerElem) {
            if (isMouseDown || isBarMouseDown) {
                setIsScrollActive(true)
                const mousePos = e[clientXY]
                let calc = 0
                if (isMouseDown) {
                    calc = ((mousePos - oldMousePos) * -1) + oldScrollPos
                }
                if (isBarMouseDown) {
                    const getScrollPercentage = ((mousePos - oldMousePos) / controllerElem[clientWH]) * 100
                    calc = ((innerElem[clientWH] * getScrollPercentage) / 100) + oldScrollPos
                }
                if (direction === 'x') {
                    controllerElem.scrollTo(calc, 0)
                } else {
                    controllerElem.scrollTo(0, calc)
                }
            }
        }
    }, [direction, controllerRef, innerRef, isMouseDown, isBarMouseDown, oldScrollPos, oldMousePos, setIsScrollActive])

    useEffect(() => {
        const clientWH = (direction === 'x') ? 'clientHeight' : 'clientWidth'
        const offsetWH = (direction === 'x') ? 'offsetHeight' : 'offsetWidth'
        const scrollerElem = scrollerRef?.current
        const controllerElem = controllerRef?.current
        const innerElem = innerRef?.current

        if (scrollerElem && controllerElem && innerElem) {
            const observer = new ResizeObserver(() => {
                const res = controllerElem[offsetWH] - controllerElem[clientWH]
                setScrollBarThickness(res)
            })
            observer.observe(scrollerElem)
            observer.observe(controllerElem)
            observer.observe(innerElem)
        }
    }, [direction, scrollerRef, controllerRef, innerRef, setScrollBarThickness])

    useEffect(() => {
        const barElem = barRef?.current

        document.addEventListener('mousemove', mouseMoveFn)
        document.addEventListener('mouseup', mouseUpFn)

        if (barElem) {
            barElem.addEventListener('mousedown', barMouseDownFn)
            barElem.addEventListener('mouseup', barMouseUpFn)
        }

        return () => {
            document.removeEventListener('mousemove', mouseMoveFn)
            document.removeEventListener('mouseup', mouseUpFn)
            if (barElem) {
                barElem.removeEventListener('mousedown', barMouseDownFn)
                barElem.removeEventListener('mouseup', barMouseUpFn)
            }
        }
    }, [isMouseDown, oldScrollPos, oldMousePos, barRef, hasScrollbar, mouseUpFn, mouseDownFn, mouseMoveFn, barMouseDownFn, barMouseUpFn])

    return (
        <div className="controller" ref={controllerRef}
            onMouseDown={mouseDownFn}
            onMouseUp={mouseUpFn}
            style={{
                marginBottom: direction === 'x' ? (scrollBarThickness * -1) : undefined,
                marginRight: direction === 'y' ? (scrollBarThickness * -1) : undefined
            }}
        >
            {props.children}
            {isScrollActive &&
                <div className="blocker"></div>
            }
        </div>
    )
}

export default Controller