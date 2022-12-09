import { FC } from 'react'
import { Col } from 'antd'

import { NoDataProps, NoDataPropTypes } from './no-data.types'

import styles from './NoData.module.scss'

export const NoData: FC<NoDataProps> = ({ title, icon }) => (
    <Col xs={24} className={styles['no-data__empty']}>
        <div className={styles['no-data__icon']}>{icon}</div>
        <span className={styles['no-data__description']}>
            You have no {title}, Use below button to add
        </span>
    </Col>
)

NoData.propTypes = NoDataPropTypes
