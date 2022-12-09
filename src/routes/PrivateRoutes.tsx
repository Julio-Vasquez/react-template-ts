import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Loading } from './../components/Loading'

import { LayoutPrivate } from './../components/Layout'

const Home = lazy(() => import('./../views/Private/Home'))
const Error404 = lazy(() => import('./../components/Error404'))

export const PrivateRoutes = () => {
    return (
        <BrowserRouter>
            <LayoutPrivate>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/404' element={<Error404 />} />
                        <Route path='*' element={<Navigate replace to='/404' />} />
                    </Routes>
                </Suspense>
            </LayoutPrivate>
        </BrowserRouter>
    )
}
