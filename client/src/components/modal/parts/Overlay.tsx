import { useState, useLayoutEffect, useContext } from 'react'
import ReactDOM from 'react-dom'
import { useCloseAllModal } from '../hooks'
import { classArrayToString } from '../../../utils/helpers'
import { ModalCtx } from '../Provider'

const Overlay = () => {
    const modalState = useContext(ModalCtx)
    const [isActive, setIsActive] = useState<boolean>(false)
    const [isRender, setIsRender] = useState<boolean>(false)
    const [hasActive, setHasActive] = useState<boolean>(false)
    const closeAll = useCloseAllModal()

    const classList = classArrayToString([
        'overlay',
        isActive ? 'active' : '',
    ])

    useLayoutEffect(() => {
        let hasActiveCollect = false
        Object.entries(modalState).forEach(([key, value]) => {
            if (value.state === true) {
                hasActiveCollect = true
            }
        })
        setHasActive(hasActiveCollect)
    }, [modalState])

    useLayoutEffect(() => {
        setTimeout(() => {
            setIsActive(hasActive)
        }, 10)
        if (hasActive) {
            setIsRender(hasActive)
        }
    }, [hasActive])

    const transitionEndFn = () => {
        if (!hasActive) {
            setIsRender(false)
        }
    }

    return ReactDOM.createPortal(
        <>
            {isRender &&
                <div className={classList} onTransitionEnd={transitionEndFn} onClick={() => closeAll(true)}></div>
            }
        </>,
        document.getElementById('modal') as HTMLElement
    )
}

export default Overlay