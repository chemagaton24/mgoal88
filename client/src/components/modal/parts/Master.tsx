import { ReactNode, useContext, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { classArrayToString } from '../../../utils/helpers'
import { useCloseAllModal } from '../hooks'
import { ModalCtx, StateNamesType } from '../Provider'

interface PropsType {
    children: ReactNode
    stateName: StateNamesType
    animation?: 'default' | 'fade-from-top' | 'fade-from-right'
}

const Master = (props: PropsType) => {
    const modalRef = useRef<HTMLDivElement | null>(null)
    const modalState = useContext(ModalCtx)
    const { state } = modalState[props.stateName as keyof typeof modalState]
    const [isActive, setIsActive] = useState<boolean>(false)
    const [isRender, setIsRender] = useState<boolean>(false)
    const closeAll = useCloseAllModal()

    useEffect(() => {
        setTimeout(() => {
            setIsActive(state)
        }, 10)
        if (state) {
            setIsRender(state)
        }
    }, [state])

    useEffect(() => {
        const transitionEndFn = () => {
            if (!state) {
                setIsRender(false)
            }
        }
        const modalElem = modalRef?.current
        if (modalElem) {
            modalElem.firstChild?.addEventListener('transitionend', transitionEndFn)

            return () => {
                modalElem.firstChild?.removeEventListener('transitionend', transitionEndFn)
            }
        }
    }, [state])

    const classList = classArrayToString([
        'modal',
        `modal-animation-${props.animation ? props.animation : 'default'}`,
        isActive ? 'active' : '',
    ])

    return ReactDOM.createPortal(
        <>
            {isRender &&
                <div className={classList} ref={modalRef}>
                    <div className="overlay-close-modal-trigger" onClick={() => closeAll(true)}></div>
                    {props.children}
                </div>
            }
        </>,
        document.getElementById('modal') as HTMLElement
    )
}

export default Master