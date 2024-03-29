import React, { useReducer } from 'react';

//Components
import classContext from './classContext'
import classReducer from './classReducer'
import clienteAxios from '../../config/axios'

//Types
import { 
    CHECK_CLASS, 
    CREATE_CLASS, 
    GET_ALL_CLASSES, 
    GET_CLASS,
    UPDATE_CLASS,
    DELETE_CLASS
} from '../../types'

const ClassState = props => {
    const initialState = {
        classes: [],
        errorForm: false,
        allClasses: []
    }

    //Dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(classReducer, initialState)

    //funciones para el CRUD
    const getClass = async object => {
        try {
            //Puede ser un profesor o un curso
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

    const getAllClasses = async id_schoolyear => {
        try {
            const resultado = await clienteAxios.get('/api/class/all', {params: id_schoolyear});
            console.log(resultado);
            dispatch({
                type: GET_ALL_CLASSES,
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

    const updateClass = async (xclass) => {
        try {
            const resultado = await clienteAxios.put(`/api/class/${xclass._id}`, xclass)
            console.log(resultado);
            dispatch({
                type: UPDATE_CLASS,
                payload: resultado.data.xclass
            })
        } catch (error) {
            console.log(error)
        }
    }

    const deleteClass = async (xclass) => {
        try {
            await clienteAxios.delete(`/api/class/${xclass._id}`, {params: {xclass}});

            dispatch({
                type: DELETE_CLASS,
                payload: xclass
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <classContext.Provider value={{
            classes: state.classes,
            allClasses: state.allClasses,
            errorForm: state.errorForm,

            checkForm,
            getClass,
            createClass,
            getAllClasses,
            updateClass,
            deleteClass
        }}>
            {props.children}
        </classContext.Provider>
    )
}

export default ClassState;