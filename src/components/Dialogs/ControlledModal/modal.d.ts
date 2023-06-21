import propTypes from 'prop-types'

export const ControlledModalPropTypes = {
  visibleState: propTypes.shape({
    visible: propTypes.bool.isRequired,
    closeDialog: propTypes.func.isRequired,
    openDialog: propTypes.func
  }).isRequired,
  children: propTypes.element.isRequired,
  destroyOnClose: propTypes.bool.isRequired,
  width: propTypes.number.isRequired,
  centered: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
  footer: propTypes.element.isRequired,
  inheritCloseToChildren: propTypes.bool.isRequired
}

export const ControlledModalDefaultProps = {
  centered: true,
  width: 420,
  footer: undefined,
  inheritCloseToChildren: true,
  destroyOnClose: true
}

export type ControlledModalProps = propTypes.InferProps<
  typeof ControlledModalPropTypes
>
