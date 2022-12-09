type loginType = {
    username: string
    password: string
}

type loginAction = {
    payload: loginType
    type: string
}

type loginSuccessType = {
    payload: {
        token: string
        message: string
        success: boolean
    }
    type: string
}

type loginFailedType = {
    payload: {
        error: boolean
        message: string
    }
    type: string
}

type state = {
    authentication: boolean | Promise<boolean>
    error: boolean
    loading: boolean
    message: string
    success: boolean
    token: string
    user: string
}

export type { loginAction, loginSuccessType, loginFailedType, state, loginType }
