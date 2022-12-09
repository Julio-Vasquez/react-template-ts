import { Key } from 'antd/lib/table/interface'

type DataType = {}
type DataIndex = keyof DataType

export type props = {
    title: string
    dataIndex: DataIndex
}

export type tableConfig = {
    pagSize: number
    recordKey: Key
    scrollX: string
}

export type filter = {
    key: string
    filters: any[]
    defaultFilteredValue: any[]
}

export type params = {
    isDate: boolean
    tag: string | number | any
    subTag: string | undefined | any
}
