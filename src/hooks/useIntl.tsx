import { useTranslation } from 'react-i18next'

type props = {
    id: string
    objVars?: Object
}

export const useIntl = () => {
    const { t } = useTranslation()

    const formatMessage = ({ id, objVars }: props): string =>
        objVars ? t(id, objVars) : t(id)

    return { formatMessage }
}

export default useIntl
