import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './slice/users/loginSlice'
import accessTokenSlice from './slice/users/accessTokenSlice'

export const store = configureStore({
	reducer: {
		login: loginSlice,
		accessToken: accessTokenSlice
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch