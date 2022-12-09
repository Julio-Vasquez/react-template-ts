import { FC } from 'react'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'

import { useIntl } from './../hooks/useIntl'

import store from '../store'
import i18n from '../i18n/config'

const App: FC = () => {
    const { formatMessage } = useIntl()

    return (
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <p>{formatMessage({ id: 'button.login' })}</p>
            </I18nextProvider>
        </Provider>
    )
}

export default App;
