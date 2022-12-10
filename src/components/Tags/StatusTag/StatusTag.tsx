import { Tag } from 'antd'

import { useIntl } from './../../../hooks/useIntl'
import { STATUS } from '../../../utils/constants/status.constant'

import {
    StatusTagPropTypes,
    StatusTagProps,
    DefaultStatusTagPropTypes,
} from './status.type'

const StatusTag = ({ status }: StatusTagProps) => {
    const { formatMessage } = useIntl()

    const statusValue = STATUS.find(ele => ele.text === status)

    return !!statusValue ? (
        <Tag color={statusValue.color}>{statusValue.text}</Tag>
    ) : (
        <Tag color='red'>{formatMessage({ id: 'text.noData' })}</Tag>
    )
}

StatusTag.defaultProps = DefaultStatusTagPropTypes

StatusTag.propTypes = StatusTagPropTypes

export default StatusTag
