export interface state {
  loading: boolean
  error?: boolean
  data?: []
}

export interface mutationType {
  cancelError?: boolean
  onCompleted: () => void
  onError?: () => void
}

export type queryType<T> = Omit<mutationType, 'onCompleted'> & {
  variables?: T
  cancelFirstEffect: boolean
}

export interface func {
  functionFetch: Function
}

export enum FetchCase {
  loading = 'loading',
  fetched = 'fetched',
  error = 'error'
}
