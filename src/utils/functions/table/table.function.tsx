import { Button, Input, InputRef } from 'antd'
import Highlighter from 'react-highlight-words'
import { useState, useRef, ChangeEvent } from 'react'
import { FilterDropdownProps, Key } from 'antd/lib/table/interface'

import { DeleteOutlined, SearchOutlined } from '@ant-design/icons'

import { props, tableConfig, filter, params } from './table.types'

const useColumnSearch = ({ dataIndex, title }: props) => {
    const inputRef = useRef<InputRef>(null)
    const [searchText, setSearchText] = useState<any>('')

    const handleSearch = (selectedKeys: Key[], confirm: Function) => {
        confirm()
        setSearchText(selectedKeys[0])
    }

    const handleReset = (clearFilters: () => void, confirm: Function) => {
        setSearchText('')
        clearFilters()
        confirm()
    }

    return {
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
        }: FilterDropdownProps) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={inputRef}
                    placeholder={`Search by ${title}`}
                    value={selectedKeys[0]}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() => handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type='primary'
                    onClick={() => handleSearch(selectedKeys, confirm)}
                    size='small'
                    style={{ width: 90, marginRight: 8 }}
                >
                    <SearchOutlined />
                    Search
                </Button>
                <Button
                    onClick={() => clearFilters && handleReset(clearFilters, confirm)}
                    size='small'
                    style={{ width: 90 }}
                >
                    <DeleteOutlined />
                    Clean
                </Button>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? 'var(--primary)' : undefined }} />
        ),
        onFilter: (value: string, record: string[]): boolean =>
            record[dataIndex]
                ?.toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownVisibleChange: (visible: boolean) => {
            if (visible) setTimeout(() => inputRef?.current?.focus(), 100)
        },
        render: (text: string) => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[searchText]}
                autoEscape
                textToHighlight={text ? text.toString() : ''}
            />
        ),
    }
}

const getTableConfig = ({ recordKey, scrollX = 'max-content', pagSize }: tableConfig) => {
    let rowKey = (record: any) => record?._id
    const pagination = pagSize
        ? { pagination: { pageSize: pagSize } }
        : { pagination: false }
    if (recordKey) rowKey = record => record[recordKey]
    const scroll = { x: scrollX }
    return { scroll, rowKey, ...pagination }
}

const filterColumn = ({ key, filters, defaultFilteredValue }: filter) => ({
    filters,
    defaultFilteredValue,
    onFilter: (value: string, record: any) => record[key] === value,
})

const sorterColumn = ({ isDate = false, tag, subTag = undefined }: params) => {
    const sort = (a: string | number, b: string | number) => {
        a = typeof a === 'string' ? a.toLowerCase() : a
        b = typeof b === 'string' ? b.toLowerCase() : b
        return a < b ? -1 : b < a ? 1 : 0
    }

    if (isDate) {
        const parser = (d: string) => new Date(d).getTime()
        const date = (a: string, b: string) =>
            subTag
                ? sort(parser(a[tag][subTag]), parser(b[tag][subTag]))
                : sort(parser(a[tag]), parser(b[tag]))
        return { sorter: date }
    }

    const def = (a: string, b: string) =>
        subTag ? sort(a[tag][subTag], b[tag][subTag]) : sort(a[tag], b[tag])

    return { sorter: def }
}

export { useColumnSearch, getTableConfig, filterColumn, sorterColumn }
