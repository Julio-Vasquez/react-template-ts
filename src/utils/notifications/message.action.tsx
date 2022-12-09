import { message } from 'antd'

const infoMessage = (description: string) => message.info(description)

const successMessage = (description: string) => message.success(description)

const warningMessage = (description: string) => message.warning(description)

const errorMessage = (error: any) =>
    message.error(
        error?.response ? error.response.data.message : error?.message || error,
        5
    )

export { infoMessage, successMessage, warningMessage, errorMessage }
