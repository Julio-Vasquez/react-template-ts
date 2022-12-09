import { Tag } from 'antd'

import { useIntl } from './../../../hooks/useIntl'

import {
    StatusTagPropTypes,
    StatusTagProps,
    DefaultStatusTagPropTypes,
} from './status.type'

type StatusType = {
    key: string
    color: string
    text: string
}

const STATUS: StatusType[] = [
    { text: 'active', key: '1', color: '' },
    { text: 'inactive', key: '2', color: '' },
    { text: 'pending', key: '3', color: '' },
]

const StatusTag = ({ status }: StatusTagProps) => {
    const { formatMessage } = useIntl()

    const statusValue = STATUS.find(ele => ele.text === status)

    return !!statusValue ? (
        <Tag color={statusValue.color}>{statusValue.text}</Tag>
    ) : (
        <Tag color='red'>{formatMessage({ id: 'noData' })}</Tag>
    )
}

StatusTag.defaultProps = DefaultStatusTagPropTypes

StatusTag.propTypes = StatusTagPropTypes

export default StatusTag
