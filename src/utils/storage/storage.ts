import jwtDecode from 'jwt-decode'

import { type key, type payload } from './storage.types'
import { JWT_KEY } from '../constants/environment.constant'

export const SaveItem = ({
  key = JWT_KEY,
  newItem,
  type = 'localStorage'
}: payload) => {
  type === 'sessionStorage'
    ? sessionStorage.setItem(key, newItem)
    : localStorage.setItem(key, newItem)
}

export const GetItem = ({ key = JWT_KEY }: key) => localStorage.getItem(key)

export const RemoveItem = ({ key = JWT_KEY, type = 'localStorage' }: payload) => {
  type === 'sessionStorage'
    ? sessionStorage.removeItem(key)
    : localStorage.removeItem(key)
}

export const TokenIsValid = () => {
  try {
    const token: string = jwtDecode(JWT_KEY)
    return ![undefined, null, ''].includes(token)
  } catch (e) {
    return false
  }
}

export const ClearData = (key = JWT_KEY) => {
  localStorage.removeItem(key)
}
