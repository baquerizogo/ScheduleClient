import React, { useReducer, useEffect } from 'react';

//Components
import AuthContext from './authContext'
import AuthReducer from './authReducer'
import ClienteAxios from '../../config/axios'
import tokenAuth from '../../config/tokenAuth'

import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types/index'

const AuthState  = (props) => {

    let local;
    useEffect(()=>{
        local = localStorage.getItem('token');
        if(local) {
            usuarioAutenticado(local);
            revisarAutenticacion(local);
        }
    },[]);

    const initialState = {
        token: local,
        autenticado: null,
        account: null,
        mensaje: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //Funciones
    const registrarUsuario = async datos => {
        try {
            const respuesta = await ClienteAxios.post('/api/account', datos);
            console.log(respuesta.data.token);
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data.token
            })

            //Obtener usuario
            usuarioAutenticado(respuesta.data.token);
        } catch(error){
            console.log(error.response);

            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    const usuarioAutenticado = async(token) => {
        if(token) {
            tokenAuth(token);
        }
        console.log(token); 

        try {
            const respuesta = await ClienteAxios.get('/api/auth');
            console.log(respuesta);
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.account
            })

        } catch(error){
            console.log(error);
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    const revisarAutenticacion = async(token) => {
        try {
            dispatch({
                type: LOGIN_EXITOSO,
                payload: token
            })
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    const iniciarSesion = async (datos) => {
        try{
            const respuesta = await ClienteAxios.post('/api/auth', datos);
            console.log(respuesta.data.token);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data.token
            })

            //Obtener usuario
            usuarioAutenticado(respuesta.data.token)
        } catch (error) {
            console.log(error.response);

            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
    }

    const cerrarSesion = async () => {
        dispatch({
            type: CERRAR_SESION
        })
    }

    return (  
        <AuthContext.Provider value={{
            token: state.token,
            autenticado: state.autenticado,
            account: state.account,
            mensaje: state.mensaje,

            registrarUsuario,
            iniciarSesion,
            cerrarSesion,
            revisarAutenticacion
        }}>{props.children}
        </AuthContext.Provider>
    );
}
 
export default AuthState;