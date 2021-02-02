import React, { lazy, Suspense } from 'react'
import { Redirect, Router } from '@reach/router'

import { Loading } from './../../components/Loading';

const Login = lazy( () => import('./Login') ) 

export const Public = () => {
  return (
    <Suspense fallback={ <Loading message="Loading ..." /> }>
      <Router>
        <Login path="/" />
        <Login path="/auth" />
        <Redirect from="*" to="/" noThrow/>
      </Router>
    </Suspense>
  )
}
