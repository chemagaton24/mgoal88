import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

interface PropsType {
    children: ReactNode
}

export type StateNamesType = 'login' | 'register' | 'mobilemenu'

export const ModalCtx = createContext<{
    login: {
        state: boolean,
        setState: Dispatch<SetStateAction<boolean>>
    },
    register: {
        state: boolean,
        setState: Dispatch<SetStateAction<boolean>>
    },
    mobilemenu: {
        state: boolean,
        setState: Dispatch<SetStateAction<boolean>>
    }
}>({
    login: {
        state: false,
        setState: () => { }
    },
    register: {
        state: false,
        setState: () => { }
    },
    mobilemenu: {
        state: false,
        setState: () => { }
    }
})

const Provider = (props: PropsType) => {
    const [login, setLogin] = useState(false)
    const [register, setRegister] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)

    const initVal = {
        login: { state: login, setState: setLogin },
        register: { state: register, setState: setRegister },
        mobilemenu: { state: mobileMenu, setState: setMobileMenu }
    }

    return (
        <ModalCtx.Provider value={initVal}>
            {props.children}
        </ModalCtx.Provider>
    )
}

export default Provider