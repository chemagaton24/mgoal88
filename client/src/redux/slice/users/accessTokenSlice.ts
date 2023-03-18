import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

interface jwtState {
    value?: string
}

const initialState: jwtState = {
    value: undefined,
}

export const accessTokenSlice = createSlice({
    name: 'access token',
    initialState,
    reducers: {
        setAccessToken: (state, action: PayloadAction<string | undefined>) => {
            state.value = action.payload
        }
    },
})

export const { setAccessToken } = accessTokenSlice.actions

export const selectCount = (state: RootState) => state.accessToken.value

export default accessTokenSlice.reducer