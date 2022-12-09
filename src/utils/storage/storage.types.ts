export type payload = {
    key?: string
    newItem: string
    type?: 'sessionStorage' | 'localStorage'
}

export type key = Omit<payload, 'newItem'>
