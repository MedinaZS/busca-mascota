export const MIN_PASS_LENGTH = 3;

export const APP_ROUTES = {
    HOME: '/',
    PUBLICAR_MASCOTA: '/publicar',
    BUSCAR_MASCOTA: '/buscar',
    COLABORAR: '/colaborar',
    ADOPCIONES: '/adopciones',
    PUBLICAR_ADOPCION: '/publicar-adopcion',
    TERMS: '/terminos-de-uso',
    LINCENCE: '/licencia',
    DETALLE_REPORTE: '/reporte/',
    DETALLE_REPORTE_PARAMS: '/reporte/:id',
    EXITO: '/exito/',
    EXITO_PARAMS: '/exito/:id',
    DETALLE_ADOPCION: '/detalle-adopcion/',
    DETALLE_ADOPCION_PARAMS: '/detalle-adopcion/:id',
    EXITO_ADOPCION: '/exito-adopcion/',
    EXITO_ADOPCION_PARAMS: '/exito-adopcion/:id',

}

const IP = 'http://192.168.16.90:9000/'
// const IP = 'http://144.126.141.89:8888'

export const API_ROUTES = {
    JUST_IP: IP,
    REPORTES: IP + '/api/reportes/',
    REPORTES_SIN_PAGINAR: IP + '/api/reportes/?paginated=false',
    PUBLICAR_MASCOTA: IP + '/reportes-publicar/',
    GET_REPORT_BY_ID: IP + '/reportesget/',
    DETALLE_ADOPCION: IP + '/adopcion/',
    ADOPCIONES: IP + "/adopciones",
    PUBLICAR_ADOPCION: IP + "/adopciones-publicar/",
    REPORT_SUCCESS: IP + '/exito-api/',
    REPORTE_ADOPCIONES: IP + '/pets/',
};

export const SRC_FILES = {
    COMPLETE_LOGO:
        "https://res.cloudinary.com/dhzoxdo6q/image/upload/v1686586283/busca_mascota/complete-logo-without-bg.png",
    ONLY_LOGO:
        "https://res.cloudinary.com/dhzoxdo6q/image/upload/v1686586307/busca_mascota/only-logo-without-bg.png",
    DOG: "https://res.cloudinary.com/dhzoxdo6q/image/upload/v1686528905/busca_mascota/dog_bg_circle.png",
    DOG_NO_BG:
        "https://res.cloudinary.com/dhzoxdo6q/image/upload/busca_mascota/dog_bg_circle_without_bg.png",
    GIRL_DOG:
        "https://res.cloudinary.com/dhzoxdo6q/image/upload//busca_mascota/girl-hug-dog.png",
    PAW_FIVE:
        "https://res.cloudinary.com/dhzoxdo6q/image/upload/busca_mascota/paw-five.png",
    DOG_CAT:
        "https://res.cloudinary.com/dhzoxdo6q/image/upload/busca_mascota/dog-cat.png",
    BOOTCAMPERS:
        "https://res.cloudinary.com/dhzoxdo6q/image/upload/busca_mascota/bootcampers.png",
    VISION_BANCO:
        "https://res.cloudinary.com/dhzoxdo6q/image/upload/busca_mascota/vision-banco.png",
    GIROS_CLARO:
        "https://res.cloudinary.com/dhzoxdo6q/image/upload/busca_mascota/giros-claro.png",
};

export const URL_LINKS = {
    REPOSITORIO_FRONTEND: "https://github.com/MedinaZS/busca-mascota",
    REPOSITORIO_BACKEND: "https://github.com/OscarGonzalez97/buscamascota",
};

export const showFormattedDate = (oldDate: string) => {
    let newDate = ''
    // Si hay fechas ya cargadas con formato dd/mm/yyyy
    if (oldDate.split("-").length != 1) {
        newDate = oldDate.split("-").reverse().join("/")
    } else {
        newDate = oldDate
    }
    return newDate;
}

export const capitalizeFirstLetter = (str : string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
