import { ReactNode, useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { useVerifyAccessToken } from '../hooks'
import { login, logout } from '../../../redux/slice/users/loginSlice'

interface LoggedOutType {
    children?: never
}

interface LoggedInType {
    children: ReactNode
    showChildrenOnLoggedOut?: true | never
}

type PropsType = {
    promptLogin?: true | never
} & (LoggedInType | LoggedOutType)

const PersistentLogin = (props: PropsType) => {
    const verifyAccessToken = useVerifyAccessToken()
    const [isRender, setIsRender] = useState<boolean | undefined>()
    const accessToken = useAppSelector((state) => state.accessToken.value)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const verifyAccessTokenFn = async () => {
            const result = await verifyAccessToken(accessToken)
            if (result) {
                setIsRender(true)
                dispatch(login())
            } else {
                setIsRender(false)
                dispatch(logout())
            }
        }
        verifyAccessTokenFn()
    }, [accessToken, dispatch, verifyAccessToken])

    return (<>
        {isRender && <Outlet />}
        {(isRender === false && props.promptLogin) && <Navigate to="/" state={{ login: true }} />}
        {(props.children && props.showChildrenOnLoggedOut) && <>
            {isRender === false && props.children}
        </>}
        {(props.children && !props.showChildrenOnLoggedOut) && <>
            {isRender && props.children}
        </>}
    </>)
}

export default PersistentLogin