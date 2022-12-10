type body = {
    [key: number]: string
}

export const RESPONSE_API: body = {
    400: 'No se pudo interpretar la solicitud dada',
    401: 'No Autorizado',
    404: 'El servidor no pudo encontrar el contenido solicitado',
    500: 'Ocurrio un error en el servicdor',
}
