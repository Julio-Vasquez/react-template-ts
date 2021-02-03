import React, {ChangeEvent, FormEvent, useState} from 'react'
import { RouteComponentProps } from '@reach/router'
import { useDispatch } from 'react-redux'

import { login } from './../../../services/Auth/authSlice'

interface IForm {
  username: string;
  password: string;
}

const Login = (path: RouteComponentProps) => {
  const [form, setForm] = useState<IForm>({username : '', password: ''});

  const dispatch = useDispatch();

  const onChange = (e: ChangeEvent<HTMLFormElement>) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
    console.log(`${[e.target.name]} : ${e.target.value}`)
  }

  const onSubmit = (e: FormEvent) =>{
    e.preventDefault()
    dispatch(login(form))
  }

  return (
    <div>
      <form onChange={onChange} onSubmit={onSubmit}>
        <input type="text" name="username"/>
        <input type="password" name="password"/>
        <input type="submit" value="login"/>
      </form>
    </div>
  )
}

export default Login
