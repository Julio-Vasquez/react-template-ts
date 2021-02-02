import React, { lazy, Suspense } from 'react'
import { Router, Redirect } from '@reach/router'

import { Loading } from './../../components/Loading'

const Dashboard = lazy( () => import('./Dashboard') )

export const Private = () => {
  return (
    <Suspense fallback={ <Loading message="Loading ..." /> }>
      <Router>
        <Dashboard path="/" />
        <Dashboard path="/dashboard" />
        <Redirect from="/auth" to="/dashboard" noThrow  />
        <Redirect from="*" to="/dashboard" noThrow/>
      </Router>
    </Suspense>
  )
}