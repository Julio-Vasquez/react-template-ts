interface props {
  value: number
  decimalLength?: number
  location: string
  type: string
}

export const formatPrice = ({ value, decimalLength = 2, location, type }: props) => {
  const formatter = new Intl.NumberFormat(location, {
    style: 'currency',
    currency: type,
    currencySign: 'standard',
    minimumFractionDigits: decimalLength,
    maximumFractionDigits: decimalLength
  })

  return formatter.format(value)
}
