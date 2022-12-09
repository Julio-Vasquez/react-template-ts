import propTypes from 'prop-types'

export const Error404PropTypes = {
    redirect: propTypes.string,
    title: propTypes.string,
}

export const Error404DefaultProps = {
    redirect: '/',
    title: 'Page Not Found',
}

export type Error404Props = propTypes.InferProps<typeof Error404PropTypes>
