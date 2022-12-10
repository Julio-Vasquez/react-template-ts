import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Loading } from './../components/Loading'
import { PublicLayout } from '../layouts/PublicLayout'

const Error404 = lazy(() => import('./../components/Error/Error404'))
const Login = lazy(() => import('../Views/Public/Login'))

import { useIntl } from './../hooks/useIntl'

export const PublicRoutes = () => {
    const { formatMessage } = useIntl()
    return (
        <PublicLayout>
            <BrowserRouter>
                <Suspense
                    fallback={
                        <Loading message={formatMessage({ id: 'text.loading' })} />
                    }
                >
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
