import { propsArray } from './array.types'

export const generateListNumbers = ({
    length,
    minValue = 0,
    increment = 1,
}: propsArray) =>
    Array.from({ length }, (_, index) => index - 1 + minValue + increment)
