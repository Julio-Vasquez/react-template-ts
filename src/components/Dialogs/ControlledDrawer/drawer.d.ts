import propTypes from 'prop-types'
type Placement = 'left' | 'right' | 'top' | 'bottom'
export const ControlledDrawerPropTypes = {
  visibleState: propTypes.shape({
    visible: propTypes.bool.isRequired,
    closeDialog: propTypes.func.isRequired,
    openDialog: propTypes.func
  }).isRequired,
  placement: propTypes.oneOf(['left', 'right', 'top', 'bottom']).isRequired,
  children: propTypes.element.isRequired,
  width: propTypes.number.isRequired,
  destroyOnClose: propTypes.bool.isRequired
}

export const ControlledDrawerDefaultProps = {
  width: 450,
  destroyOnClose: true,
  placement: 'right'
}

export type ControlledDrawerProps = propTypes.InferProps<
  typeof ControlledDrawerPropTypes
>
