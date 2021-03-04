import React, { useReducer } from 'react';

//Components
import classContext from './classContext'
import classReducer from './classReducer'
import clienteAxios from '../../config/axios'

//Types
import { 
    CHECK_CLASS, 
    CREATE_CLASS, 
    GET_CLASS 
} from '../../types'

const ClassState = props => {
    const initialState = {
        classes: [],
        errorForm: false
    }

    //Dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(classReducer, initialState)

    //funciones para el CRUD
    const getClass = async object => {
        try {
            //Puede ser un profesor o un paralelo
            const resultado = await clienteAxios.get('/api/class', {params: object});
            console.log(resultado);
            dispatch({
                type: GET_CLASS,
                payload: resultado.data.classes
            })
        } catch(error) {
            console.log(error);
        }
    }

    const createClass = async xclass => {
        try{
            const resultado = await clienteAxios.post('/api/class', xclass);
            console.log(resultado);
            dispatch({
                type: CREATE_CLASS,
                payload: xclass
            })
        }catch(error){
            console.log(error)
        }
    }
    

    const checkForm = () => {
        dispatch({
            type: CHECK_CLASS
        })
    }

    return (
        <classContext.Provider value={{
            classes: state.classes,
            errorForm: state.errorForm,

            checkForm,
            getClass,
            createClass
        }}>
            {props.children}
        </classContext.Provider>
    )
}

export default ClassState;