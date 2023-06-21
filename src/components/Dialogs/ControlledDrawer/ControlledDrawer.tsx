import { Drawer } from 'antd'
import { cloneElement, type FC } from 'react'

import {
  ControlledDrawerDefaultProps,
  type ControlledDrawerProps,
  ControlledDrawerPropTypes
} from './drawer'

const ControlledDrawer: FC<ControlledDrawerProps> = ({
  visibleState,
  children,
  placement,
  width,
  destroyOnClose
}) => {
  const newPlacement: any = placement
  const { visible, closeDialog } = visibleState

  const newChildren = cloneElement(children ?? <></>, {
    closeDialog
  })

  return (
    <Drawer
      open={visible}
      destroyOnClose={destroyOnClose}
      onClose={closeDialog}
      width={width}
      placement={newPlacement}
    >
      {newChildren}
    </Drawer>
  )
}
ControlledDrawer.propTypes = ControlledDrawerPropTypes

ControlledDrawer.defaultProps = ControlledDrawerDefaultProps

export default ControlledDrawer
