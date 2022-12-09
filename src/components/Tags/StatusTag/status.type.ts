import propTypes, { InferProps } from 'prop-types'

export const StatusTagPropTypes = {
    status: propTypes.oneOf(['active', 'inactive', 'pending']).isRequired,
}

export const DefaultStatusTagPropTypes = {
    status: 'Cargando',
}

export type StatusTagProps = InferProps<typeof StatusTagPropTypes>
