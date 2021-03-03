import React, { useReducer } from 'react';

//Components
import parallelContext from './parallelContext'
import parallelReducer from './parallelReducer'
import clienteAxios from '../../config/axios'

//Types
import { 
    CHECK_PARALLEL, 
    CREATE_PARALLEL, 
    GET_PARALLEL
} from '../../types'

const ParallelState = props => {
    const initialState = {
        parallels: [],
        errorForm: false
    }

    //Dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(parallelReducer, initialState)

    //funciones para el CRUD
    const getParallel = async course => {
        try {
            const resultado = await clienteAxios.get('/api/parallel', {params: course});
            console.log(resultado);
            dispatch({
                type: GET_PARALLEL,
                payload: resultado.data.parallels
            })
        } catch(error) {
            console.log(error);
        }
    }

    const createParallel = async parallel => {
        try{
            const resultado = await clienteAxios.post('/api/parallel', parallel);
            console.log(resultado);
            dispatch({
                type: CREATE_PARALLEL,
                payload: parallel
            })
        }catch(error){
            console.log(error)
        }
    }
    

    const checkForm = () => {
        dispatch({
            type: CHECK_PARALLEL
        })
    }

    return (
        <parallelContext.Provider value={{
            parallels: state.parallels,
            errorForm: state.errorForm,

            checkForm,
            getParallel,
            createParallel
        }}>
            {props.children}
        </parallelContext.Provider>
    )
}

export default ParallelState;