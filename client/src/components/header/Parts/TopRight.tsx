import { useAppSelector } from '../../../redux/hooks'
import { Button } from '../../button'
import { useModal } from '../../modal'

const TopRight = () => {
    const modalLogin = useModal('login')
    const modalRegister = useModal('register')
    const isLogged = useAppSelector((state) => state.login.value)

    return (
        <ul className="flex g-col-16">
            {!isLogged && <>
                <li><Button text="Login" theme="transparent-light" onClick={() => modalLogin(true)} /></li>
                <li><Button text="Register" onClick={() => modalRegister(true)} /></li>
            </>}
            {isLogged &&
                <li>zxczxc</li>
            }
        </ul>
    )
}

export default TopRight