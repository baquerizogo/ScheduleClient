import React, { useReducer } from 'react';

//Components
import schoolyearContext from './schoolyearContext'
import schoolyearReducer from './schoolyearReducer'
import clienteAxios from '../../config/axios'

//Types
import { 
    CHECK_SCHOOLYEAR,
    CREATE_SCHOOLYEAR,
    CURRENT_SCHOOLYEAR,
    ERROR_SCHOOLYEAR,
    GET_SCHOOLYEAR
} from '../../types'

const SchoolyearState = props => {
    const initialState = {
        schoolyears : [],
        schoolyear : null,
        errorForm: false,
        msg: null
    }

    //Dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(schoolyearReducer, initialState)

    //funciones para el CRUD

    const checkForm = () => {
        dispatch({
            type: CHECK_SCHOOLYEAR
        })
    }

    const createSchoolyear = async schoolyear => {
        try{
            const resultado = await clienteAxios.post('/api/schoolyear', schoolyear);
            console.log(resultado);

            // insertar periodo lectivo en state
            dispatch({
                type: CREATE_SCHOOLYEAR,
                payload: resultado.data
            })

        } catch(error){
            const alerta = {
                msg: 'Hubo un error'
            }
            dispatch({
                type: ERROR_SCHOOLYEAR,
                payload: alerta
            })
        }
    }

    const currentSchoolyear = (proyectoId) => {
        dispatch({
            type: CURRENT_SCHOOLYEAR,
            payload: proyectoId
        })
    }

    const getSchoolyear = async () => {
        try {
            const resultado = await clienteAxios.get('/api/schoolyear');
            console.log(resultado);

            dispatch({
                type: GET_SCHOOLYEAR,
                payload: resultado.data.schoolyears
            })
        } catch(error) {
            const alerta = {
                msg: 'Hubo un error',
            }
            dispatch({
                type: ERROR_SCHOOLYEAR,
                payload: alerta
            })
        }
    }

    return (
        <schoolyearContext.Provider value={{
            schoolyears: state.schoolyears,
            errorForm: state.errorForm,
            msg: state.msg,
            schoolyear: state.schoolyear,

            checkForm,
            createSchoolyear,
            getSchoolyear,
            currentSchoolyear
        }}>
            {props.children}
        </schoolyearContext.Provider>
    )
}

export default SchoolyearState;