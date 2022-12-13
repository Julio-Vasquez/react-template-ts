import { FC } from 'react'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'

import { PrivateRoutes, PublicRoutes } from '../routes'

import store from '../store'
import i18n from '../i18n/config'

const App: FC = () => {
    return (
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                {true === true ? <PublicRoutes /> : <PrivateRoutes />}
            </I18nextProvider>
        </Provider>
    )
}

export default App
