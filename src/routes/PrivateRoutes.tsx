import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Loading } from './../components/Loading'
import { PrivateLayout } from './../Layouts/PrivateLayout'

const Home = lazy(() => import('./../Views/Private/Home'))
const Error404 = lazy(() => import('./../components/Error/Error404'))

import { useIntl } from './../hooks/useIntl'

export const PrivateRoutes = () => {
    const { formatMessage } = useIntl()

    return (
        <PrivateLayout>
            <BrowserRouter>
                <Suspense
                    fallback={
                        <Loading message={formatMessage({ id: 'text.loading' })} />
                    }
                >
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/404' element={<Error404 />} />
                        <Route path='*' element={<Navigate replace to='/404' />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </PrivateLayout>
    )
}
