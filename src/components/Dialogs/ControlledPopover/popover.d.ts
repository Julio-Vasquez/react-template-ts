import propTypes from 'prop-types'

export const ControlledPopoverPropTypes = {
  visibleState: propTypes.shape({
    visible: propTypes.bool.isRequired,
    closeDialog: propTypes.func.isRequired,
    openDialog: propTypes.func
  }).isRequired,
  children: propTypes.element.isRequired,
  destroyOnClose: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
  content: propTypes.any.isRequired,
  inheritCloseToChildren: propTypes.bool.isRequired,
  placement: propTypes.oneOf([
    'top',
    'left',
    'right',
    'bottom',
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
    'leftTop',
    'leftBottom',
    'rightTop',
    'rightBottom'
  ]).isRequired
}
export const ControlledPopoverDefaultTypes = {
  inheritCloseToChildren: true,
  destroyOnClose: true,
  children: undefined,
  placement: 'leftTop'
}

export type ControlledPopoverProps = propTypes.InferProps<
  typeof ControlledPopoverPropTypes
>
