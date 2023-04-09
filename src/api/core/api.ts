import store from '../../store'
import { GetItem } from '../../utils/storage'
import { mutation, query } from './api.types'
import { logout } from '../../services/Auth/auth.slice'
import { Methods, getHeader, getUrl } from '../../utils/api/api.util'
import { Unauthorized } from '../../utils/constants/response.constant'
import { MAX_TIME_FETCH } from '../../utils/constants/environment.constant'

const Query = async ({ url, params }: query) => {
    const newUrl = getUrl({ url, params })

    try {
        const res = await fetch(newUrl, {
            method: Methods.get,
            ...getHeader(await GetItem({})),
        })
        if (res.status === Unauthorized) {
            store.dispatch(logout())
            return res
        }
        const data = await res.json()
        return data
    } catch (err) {
        return err
    }
}

const Mutation = async ({ url, body, params, method }: mutation) => {
    const newUrl = getUrl({ url, params })

    return Promise.race<Response>([
        fetch(newUrl, {
            method,
            ...getHeader(await GetItem({})),
            body: JSON.stringify(body),
        }),
        new Promise((_res, rej) =>
            setTimeout(() => rej({ payload: { error: 'TIMEOUT' } }), MAX_TIME_FETCH)
        ),
    ])
        .then(async res => {
            if (res.status === 401) {
                store.dispatch(logout())
                return res
            }
            res = await res.json()
            return res
        })
        .catch(err => err)
}

export { Query, Mutation }
