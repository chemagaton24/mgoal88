import { ReactNode, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Modal, { useModal } from '../modal'
import Auth from '../auth'
import Footer from '../footer'
import Header from '../header'
import Login from '../login'
import Register from '../register'

interface PropsType {
    children: ReactNode
}

const MasterContainer = (props: PropsType) => {
    const { state } = useLocation()
    const modalLogin = useModal('login')

    useEffect(() => {
        const stateLogin = state?.login
        if (stateLogin) {
            modalLogin(true)
            window.history.replaceState({}, document.title)
        }
    }, [state, modalLogin])

    return (<>
        <Header />
        <div className="main">
            {props.children}
        </div>
        <Footer />
        <Auth.PersistentLogin />
        <Login.Modal />
        <Register.Modal />
        <Modal.Parts.Overlay />
    </>)
}

export default MasterContainer