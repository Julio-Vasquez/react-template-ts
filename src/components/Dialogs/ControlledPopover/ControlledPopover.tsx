import { Popover } from 'antd'
import { cloneElement, type FC } from 'react'

import {
  ControlledPopoverDefaultTypes,
  ControlledPopoverPropTypes,
  type ControlledPopoverProps
} from './popover'

const ControlledPopover: FC<ControlledPopoverProps> = ({
  visibleState,
  children,
  destroyOnClose,
  title,
  content,
  placement,
  inheritCloseToChildren
}) => {
  const newPlacement: any = placement
  const { visible, closeDialog } = visibleState

  const newContent = inheritCloseToChildren
    ? cloneElement(content ?? <></>, { closeDialog })
    : content

  const onVisibleChange = (currVisible: boolean): boolean =>
    !currVisible && closeDialog()

  return (
    <Popover
      open={visible}
      content={newContent}
      title={title}
      destroyTooltipOnHide={destroyOnClose}
      onOpenChange={onVisibleChange}
      placement={newPlacement}
      trigger='click'
    >
      {children}
    </Popover>
  )
}

ControlledPopover.propTypes = ControlledPopoverPropTypes

ControlledPopover.defaultProps = ControlledPopoverDefaultTypes

export default ControlledPopover
