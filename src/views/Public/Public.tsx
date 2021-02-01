import React, { lazy, Suspense } from 'react'
import { Router } from '@reach/router'

import { Loading } from './../../components/Loading';

const Login = lazy( () => import('./Login') ) 

export const Public = () => {
  return (
    <Suspense fallback={ <Loading message="Loading ..." /> }>
      <Router>
        <Login path="/" />
        <Login path="/login" />
      </Router>
    </Suspense>
  )
}
