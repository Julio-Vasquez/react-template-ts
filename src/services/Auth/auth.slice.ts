import { createSlice } from '@reduxjs/toolkit'

import { TokenIsValid } from '../../utils/storage'
import { AUTH } from '../../utils/constants/redux.constants'
import { loginAction, loginFailedType, loginSuccessType, state } from './auth.types'

export const initialState: state = {
    authentication: TokenIsValid(), //verification token
    error: false,
    loading: false,
    message: '',
    success: false,
    token: '', //the token
    user: '',
}

export const AuthSlice = createSlice({
    name: AUTH,
    initialState,
    reducers: {
        login: (state, { payload }: loginAction) => ({
            ...state,
            error: false,
            loading: true,
            user: payload.username,
        }),
        loginFailed: (state, { payload }: loginFailedType) => ({
            ...state,
            error: payload.error,
            success: false,
            loading: false,
            message: payload.message,
            user: '',
        }),
        loginSuccess: (state, { payload }: loginSuccessType) => ({
            ...state,
            authentication: true,
            error: false,
            loading: false,
            success: payload.success,
            token: payload.token,
            message: payload.message,
        }),
        logout: state => ({ ...state, ...initialState }),
    },
})

export const { login, loginFailed, loginSuccess, logout } = AuthSlice.actions
export default AuthSlice.reducer
