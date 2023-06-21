export const MIN_PASS_LENGTH = 3

export const APP_ROUTES = {
    HOME: '/',
    PUBLICAR_MASCOTA: '/publicar',
    BUSCAR_MASCOTA: '/buscar',
    COLABORAR: '/colaborar',
    ADOPCIONES: '/adopciones',
    TERMS: '/terminos-de-uso',
    LINCENCE: '/licencia',
    DETALLE_REPORTE: '/reporte/',
    DETALLE_REPORTE_PARAMS: '/reporte/:id',
    EXITO: '/exito/',
    EXITO_PARAMS: '/exito/:id',
    DETALLE_ADOPCION: '/detalle-adopcion/:id',
}

const IP = 'http://127.0.0.1:8000'

export const API_ROUTES = {
    JUST_IP: IP,
    REPORTES: IP +'/api/reportes/',
    REPORTES_SIN_PAGINAR: IP +'/api/reportes/?paginated=false',
    PUBLICAR_MASCOTA: IP +'/reportes-publicar/',
    GET_REPORT_BY_ID: IP + '/reportesget/',
    DETALLE_ADOPCION: IP + '/adopcion/',
}

export const SRC_FILES = {
    COMPLETE_LOGO: 'https://res.cloudinary.com/dhzoxdo6q/image/upload/v1686586283/busca_mascota/complete-logo-without-bg.png',
    ONLY_LOGO: 'https://res.cloudinary.com/dhzoxdo6q/image/upload/v1686586307/busca_mascota/only-logo-without-bg.png',
    DOG: 'https://res.cloudinary.com/dhzoxdo6q/image/upload/v1686528905/busca_mascota/dog_bg_circle.png',
    DOG_NO_BG: 'https://res.cloudinary.com/dhzoxdo6q/image/upload/busca_mascota/dog_bg_circle_without_bg.png',
    GIRL_DOG: 'https://res.cloudinary.com/dhzoxdo6q/image/upload//busca_mascota/girl-hug-dog.png',
    PAW_FIVE: 'https://res.cloudinary.com/dhzoxdo6q/image/upload/busca_mascota/paw-five.png',
    DOG_CAT: 'https://res.cloudinary.com/dhzoxdo6q/image/upload/busca_mascota/dog-cat.png',
    BOOTCAMPERS: 'https://res.cloudinary.com/dhzoxdo6q/image/upload/busca_mascota/bootcampers.png',
    VISION_BANCO: 'https://res.cloudinary.com/dhzoxdo6q/image/upload/busca_mascota/vision-banco.png',
    GIROS_CLARO: 'https://res.cloudinary.com/dhzoxdo6q/image/upload/busca_mascota/giros-claro.png',
}

export const URL_LINKS ={
    REPOSITORIO : 'https://github.com/MedinaZS/busca-mascota'
}

