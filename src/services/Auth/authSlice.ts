import { createSlice, PayloadAction } from '@reduxjs/toolkit'
//definir type para el estado inicial
interface IState {
  authentication: boolean,
  error: boolean,
  success: boolean,
  loading: boolean,
  token: string,
  message: string,
  username: string
}
//stado inicial
export const initialState: IState = {
  authentication: false,
  error: false,
  success: true,
  loading: false,
  token: '',
  message: '',
  username: ''
}
//definir interfaces para la entrega de payloads en caso de ser necesario
interface ILogin {
  username: string;
  password: string;
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers:{
    login(state, action: PayloadAction<ILogin>) {
      const { username } = action.payload
      state.loading = true
      state.error = false
      state.success = false
      state.message = 'Cargando'
      state.username = username.toUpperCase()
    },

    loginSuccess(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = false
      state.success = true
      state.message = 'SUCCESS_LOGIN'
      state.token = action.payload
      state.authentication = true
    },

    loginFailed(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = true
      state.success = false
      state.message = action.payload
      state.token = ''
      state.authentication = true
    }
  }
});

export const { login, loginSuccess, loginFailed } = AuthSlice.actions

export default AuthSlice.reducer