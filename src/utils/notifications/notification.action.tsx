import { notification } from 'antd'

const placement = 'bottomRight'

const successNotification = (description: string) => {
  notification.success({ message: 'Success', description, placement })
}

const infoNotification = (description: string) => {
  notification.info({ message: 'Info', description, placement })
}

const warningNotification = (description: string) => {
  notification.warning({ message: 'Info', description, placement })
}

const errorNotification = (error: any) => {
  notification.open({
    type: 'error',
    message: 'Error',
    placement,
    description: error?.response
      ? error.response.data.message
      : error?.message || error
  })
}

export {
  successNotification,
  errorNotification,
  infoNotification,
  warningNotification
}
