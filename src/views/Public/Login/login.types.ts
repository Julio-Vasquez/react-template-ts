import propTypes from 'prop-types'

export const LoginPropTypes = {
    description: propTypes.string,
}

export const LoginDefaultProps = {
    description: 'Login',
}

export type LoginProps = propTypes.InferProps<typeof LoginPropTypes>
