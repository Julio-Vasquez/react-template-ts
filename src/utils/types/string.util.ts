export const capitalize = (str: string) =>
  str
    .split(' ')
    .map(w => `${w[0].toUpperCase()}${w.substring(1).toLowerCase()}`)
    .join(' ')

interface reduce {
  value: string
  maxLength: number
  ellipsis?: boolean
}

export const reduceString = ({ value, maxLength, ellipsis = true }: reduce) => {
  if (!value || !maxLength) return value
  if (value?.length <= maxLength) return value
  return value.slice(0, maxLength).concat(ellipsis ? '...' : '')
}
