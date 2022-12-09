import { useSelector } from 'react-redux'

import { RootState } from '../store/Reducers'

type props = { reducer: string }

export const useData = ({ reducer }: props) => {
    const data = useSelector((state: RootState) => state[reducer])
    return { ...data }
}

export default useData
