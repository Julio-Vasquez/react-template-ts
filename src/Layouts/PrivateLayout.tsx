import { FC, ReactElement } from 'react'

type props = {
    children: ReactElement
}

export const PrivateLayout: FC<props> = ({ children }) => {
    return <div>{children}</div>
}

export default PrivateLayout
