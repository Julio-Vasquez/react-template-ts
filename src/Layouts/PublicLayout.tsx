import { FC, ReactElement } from 'react'

type props = {
    children: ReactElement
}

export const PublicLayout: FC<props> = ({ children }) => {
    return <div>{children}</div>
}

export default PublicLayout
