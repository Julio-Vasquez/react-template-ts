import { put, takeLatest, all } from "redux-saga/effects";
import { login, loginSuccess } from './authSlice'

//const FetchLogout = () => localStorage.clear();

interface Payload {
  type: string
  payload: {
    username: string
    password: string
  }
}

function* FetchLogin(payload: Payload) {
  console.log('Estoy en la saga 3:D')
  console.log(payload)
  console.log(payload.type);
  yield put(loginSuccess('Logeado'))
}

function* ActionWatcher() {
  yield takeLatest(login, FetchLogin);
  //yield takeLatest(auth.logout, FetchLogout);
}

export default function* AuthSaga() {
  yield all([ActionWatcher()]);
}