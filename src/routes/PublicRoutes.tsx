import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Loading } from './../components/Loading'
import { PublicLayout } from '../Layouts/PublicLayout'

const Error404 = lazy(() => import('./../components/Error/Error404'))
const Login = lazy(() => import('../Views/Public/Login'))

export const PublicRoutes = () => {
    return (
        <PublicLayout>
            <BrowserRouter>
                <Suspense fallback={<Loading message='loading' />}>
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/404' element={<Error404 />} />
                        <Route path='*' element={<Navigate replace to='/404' />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </PublicLayout>
    )
}
