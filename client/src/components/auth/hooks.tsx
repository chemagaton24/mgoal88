import { gql, useMutation } from '@apollo/client'
import { useCallback } from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { setAccessToken } from '../../redux/slice/users/accessTokenSlice'

const VERIFY_ACCESS_TOKEN = gql`
mutation VerifyAccessToken {
    verifyAccessToken
}
`

const REFRESH_TOKEN = gql`
mutation RefreshToken {
    refreshToken {
        accessToken
    }
}
`

export const useVerifyAccessToken = () => {
    const [verifyAccessToken] = useMutation(VERIFY_ACCESS_TOKEN)
    const [refreshToken] = useMutation(REFRESH_TOKEN)
    const dispatch = useAppDispatch()

    const verifyAccessTokenFn = useCallback(async (token: string | undefined): Promise<any> => {
        try {
            await verifyAccessToken({
                context: {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                }
            })
            return true
        } catch {
            try {
                const resultRefreshToken = await refreshToken()
                const newAccessToken = resultRefreshToken.data.refreshToken.accessToken
                dispatch(setAccessToken(newAccessToken))
                return true
            } catch {
                return false
            }
        }
    }, [dispatch, verifyAccessToken, refreshToken])

    return verifyAccessTokenFn
}