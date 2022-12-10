export const JWT_KEY: string = import.meta.env.VITE_JWT_KEY

export const MAX_TIME_FETCH: number = +import.meta.env.VITE_MAX_TIME_FETCH // milisecons

export const URL_API: string = import.meta.env.VITE_BASE_URL

export const APP_NAME: string = import.meta.env.VITE_APP_NAME

export const MODES = {
    dev: 'dev',
    prod: 'production',
    staging: 'staging',
}

export const IS_DEV: boolean = import.meta.env.VITE_MODE === MODES.dev

export const IS_PROD: boolean = import.meta.env.VITE_MODE === MODES.prod

export const IS_STAGING: boolean = import.meta.env.VITE_MODE === MODES.staging
