import { Tag } from 'antd'
import { type FC } from 'react'

import { useIntl } from './../../../hooks/useIntl'
import { STATUS } from '../../../utils/constants/status.constant'

import {
  StatusTagPropTypes,
  type StatusTagProps,
  DefaultStatusTagPropTypes
} from './status'

const StatusTag: FC<StatusTagProps> = ({ status }) => {
  const { formatMessage } = useIntl()

  const statusValue = STATUS.find(ele => ele.text === status)

  if (statusValue == null) {
    return <Tag color='red'>{formatMessage({ id: 'text.noData' })}</Tag>
  }

  return <Tag color={statusValue?.color}>{statusValue?.text}</Tag>
}

StatusTag.defaultProps = DefaultStatusTagPropTypes

StatusTag.propTypes = StatusTagPropTypes

export default StatusTag
