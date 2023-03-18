import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

interface loginState {
    value: boolean | undefined
}

const initialState: loginState = {
    value: undefined,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state) => {
            state.value = true
        },
        logout: (state) => {
            state.value = false
        }
    },
})

export const { login, logout } = loginSlice.actions

export const selectCount = (state: RootState) => state.login.value

export default loginSlice.reducer