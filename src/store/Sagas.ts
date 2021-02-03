import { fork, all } from "redux-saga/effects";

import AuthSaga from '../services/Auth/authSaga'

export default function* rootSaga() {
  yield all([
    fork(AuthSaga)
  ]);
}