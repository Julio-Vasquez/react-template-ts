import { Modal } from 'antd'
import { cloneElement, type FC } from 'react'

import { ControlledDrawerPropTypes } from '../ControlledDrawer/drawer'
import { ControlledModalDefaultProps, type ControlledModalProps } from './modal'

const ControlledModal: FC<ControlledModalProps> = ({
  visibleState,
  children,
  destroyOnClose,
  width,
  centered,
  title,
  footer,
  inheritCloseToChildren
}) => {
  const { visible, closeDialog } = visibleState

  const newChildren = inheritCloseToChildren
    ? cloneElement(children ?? <></>, { closeDialog })
    : children

  return (
    <Modal
      open={visible}
      onCancel={closeDialog}
      destroyOnClose={destroyOnClose}
      centered={centered}
      title={title}
      width={width}
      footer={footer}
    >
      {newChildren}
    </Modal>
  )
}

ControlledModal.propTypes = ControlledDrawerPropTypes

ControlledModal.defaultProps = ControlledModalDefaultProps

export default ControlledModal
