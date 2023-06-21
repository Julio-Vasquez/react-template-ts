import propTypes, { type InferProps } from 'prop-types'

export const NoDataPropTypes = {
  title: propTypes.string.isRequired,
  icon: propTypes.element.isRequired
}

export type NoDataProps = InferProps<typeof NoDataPropTypes>
