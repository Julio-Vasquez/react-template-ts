import { combineReducers, AnyAction } from "@reduxjs/toolkit";

import authReducer from './../services/Auth/authSlice';

export const appReducer = combineReducers({
  Auth: authReducer
});

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === "auth/logout") state = undefined
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof appReducer>

export default rootReducer