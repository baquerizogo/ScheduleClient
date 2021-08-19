import React, { useReducer } from 'react';

//Components
import teacherContext from './teacherContext'
import teacherReducer from './teacherReducer'
import clienteAxios from '../../config/axios'

//Types
import { 
    CHECK_TEACHER, 
    CREATE_TEACHER, 
    ERROR_TEACHER, 
    GET_TEACHER,
    UPDATE_TEACHER,
    DELETE_TEACHER
} from '../../types'

const TeacherState = props => {
    const initialState = {
        teachers: [],
        errorForm: false,
        msg: null
    }

    //Dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(teacherReducer, initialState)

    //funciones para el CRUD
    const getTeacher = async schoolyear => {
        try {
            const resultado = await clienteAxios.get('/api/teacher', {params: schoolyear});
            console.log(resultado);
            dispatch({
                type: GET_TEACHER,
                payload: resultado.data.teachers
            })
        } catch(error) {
            console.log(error);
        }
    }

    const createTeacher = async teacher => {
        try{
            const resultado = await clienteAxios.post('/api/teacher', teacher);
            console.log(resultado);
            dispatch({
                type: CREATE_TEACHER,
                payload: teacher
            })
        }catch(error){
            console.log(error.response);
            const msg = error.response.data.msg;

            dispatch({
                type: ERROR_TEACHER,
                payload: msg
            })
        }
    }

    const checkForm = () => {
        dispatch({
            type: CHECK_TEACHER
        })
    }

    const updateTeacher = async (teacher) => {
        try {
            const resultado = await clienteAxios.put(`/api/teacher/${teacher._id}`, teacher)
            console.log(resultado);
            dispatch({
                type: UPDATE_TEACHER,
                payload: resultado.data.teacher
            })
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTeacher = async (teacher) => {
        try {
            await clienteAxios.delete(`/api/teacher/${teacher._id}`, {params: {teacher}});

            dispatch({
                type: DELETE_TEACHER,
                payload: teacher
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <teacherContext.Provider value={{
            errorForm: state.errorForm,
            teachers: state.teachers,
            msg: state.msg,

            checkForm,
            getTeacher,
            createTeacher,
            updateTeacher,
            deleteTeacher
        }}>
            {props.children}
        </teacherContext.Provider>
    )
}

export default TeacherState;