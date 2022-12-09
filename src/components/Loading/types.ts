import propTypes from 'prop-types'

export const LoadingPropTypes = {
    message: propTypes.string.isRequired,
}

export const DefaultLoadingPropTypes = {
    message: 'Cargando',
}

export type LoadingProps = propTypes.InferProps<typeof LoadingPropTypes>
