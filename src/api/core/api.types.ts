export type mutation = {
    url: string
    params?: any
    body?: any
    method: string
}

export type query = Omit<mutation, 'body' | 'method'>
