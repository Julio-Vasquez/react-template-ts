export const basicDateConfig: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
}

export const basicDateConfigWithTime: Intl.DateTimeFormatOptions = {
    ...basicDateConfig,
    hour: 'numeric',
    minute: 'numeric',
}

type dateFormat = {
    date: Date
    includeTime?: boolean
    location: string
}

export const formatDate = ({ date, includeTime = false, location }: dateFormat) =>
    new Date(date).toLocaleDateString(
        location,
        includeTime ? { ...basicDateConfigWithTime } : { ...basicDateConfig }
    )
