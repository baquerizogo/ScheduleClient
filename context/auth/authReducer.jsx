import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types/index'

export default (state, action) => {
    switch (action.type) {
        case REGISTRO_EXITOSO:
        case LOGIN_EXITOSO:     
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                token: action.payload,
                autenticado: true,
                mensaje: null
            }

        case LOGIN_ERROR:
        case REGISTRO_ERROR:
        case CERRAR_SESION:

            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                account: null,
                autenticado: null,
                mensaje: action.payload
            }

        case OBTENER_USUARIO:
            return {
                ...state,
                account: action.payload
            }

        default:
            return state;
    }
}