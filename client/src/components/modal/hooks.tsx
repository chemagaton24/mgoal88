import { useContext, useEffect, useState } from 'react'
import { ModalCtx } from './Provider'

export const useModal = (target: 'plain' | 'login' | 'register' | 'mobilemenu') => {
    const [val, setVal] = useState<boolean | 'inactive'>('inactive')
    const modalState = useContext(ModalCtx)

    useEffect(() => {
        if (typeof val === "boolean") {
            Object.entries(modalState).forEach(([key]) => {
                if (key !== target) {
                    modalState[key as keyof typeof modalState].setState(false)
                } else {
                    modalState[key as keyof typeof modalState].setState(val)
                }
            })
            setVal('inactive')
        }
    }, [val, modalState, target])

    return setVal
}

export const useCloseAllModal = () => {
    const [val, setVal] = useState<boolean>(false)
    const modalState = useContext(ModalCtx)

    useEffect(() => {
        if (val === true) {
            Object.entries(modalState).forEach(([key]) => {
                modalState[key as keyof typeof modalState].setState(false)
            })
            setVal(false)
        }
    }, [val, modalState])

    return setVal
}