import React, { lazy, Suspense } from 'react'
import { Router } from '@reach/router'

import { Loading } from './../../components/Loading'

const Dashboard = lazy( () => import('./Dashboard') )

export const Private = () => {
  return (
    <Suspense fallback={ <Loading message="Loading ..." /> }>
      <Router>
        <Dashboard path="/" />
      </Router>
    </Suspense>
  )
}