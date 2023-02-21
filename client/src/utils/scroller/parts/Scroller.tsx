import { ReactNode, useContext } from "react"
import { classArrayToString } from "../../helpers"
import { ScrollerCtx } from "./Provider"

interface PropsType {
    children: ReactNode
}

const Scroller = (props: PropsType) => {
    const { direction, scrollerRef, isMobile, classList: classListProps, hasScrollbar, scrollActiveState } = useContext(ScrollerCtx)
    const { isScrollActive } = scrollActiveState

    const classList = classArrayToString([
        'scroller',
        `direction-${direction}`,
        isScrollActive && 'scroll-active',
        isMobile && 'is-mobile',
        hasScrollbar && 'has-scrollbar',
        classListProps && classListProps
    ])

    return (
        <div className={classList} ref={scrollerRef}>
            {props.children}
        </div>
    )
}

export default Scroller