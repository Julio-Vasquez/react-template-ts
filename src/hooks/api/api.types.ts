export type state = {
    loading: boolean
    error?: boolean
    data?: []
}

export type mutationType = {
    cancelError?: boolean
    onCompleted: Function
    onError?: Function
}

export type queryType<T> = Omit<mutationType, 'onCompleted'> & {
    variables?: T
    cancelFirstEffect: Function
}

export type func = { functionFetch: Function }

export enum FetchCase {
    loading = 'loading',
    fetched = 'fetched',
    error = 'error',
}
