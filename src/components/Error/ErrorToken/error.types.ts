import propTypes from 'prop-types'

export const ErrorTokenPropTypes = {
    redirect: propTypes.string.isRequired,
    text: propTypes.string,
    errorNumber: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
}

export const ErrorTokenDefaultProps = {
    redirect: '/',
    text: 'Page Not Found',
}

export type ErrorTokenProps = propTypes.InferProps<typeof ErrorTokenPropTypes>
