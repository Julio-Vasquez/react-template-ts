import { useState } from 'react'

import { errorNotification } from '../../utils/notifications/notification.action'

import { mutationType, state, func } from './api.types'

export const useMutation = <T>(
    { functionFetch }: func,
    { onCompleted, cancelError, onError }: mutationType
) => {
    const [req, setReq] = useState<state>({
        loading: false,
        error: false,
    })

    const execFunction = async (variables: T) => {
        setReq({ loading: true, error: false })
        try {
            const data = await functionFetch(variables)
            console.log('data', data)
            setReq({ data, loading: false })
            if (onCompleted) onCompleted({ data, variables })
            return data
        } catch (error: any) {
            if (!cancelError) errorNotification(error)
            setReq({ loading: false })
            if (onError) onError(error)
            return undefined
        }
    }

    return { execFunction, ...req }
}
