import React, { useReducer } from 'react';

//Components
import scheduleContext from './scheduleContext'
import scheduleReducer from './scheduleReducer'
import clienteAxios from '../../config/axios'

//Types
import { SET_DATA } from '../../types'

const ScheduleState = props => {
    const initialState = {
        modality: 0,
        id_parallel: ''
    }

    //Dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(scheduleReducer, initialState)

    //funciones
    const setData = data => {
        dispatch({
            type: SET_DATA,
            payload: data
        })
    }

    return (
        <scheduleContext.Provider value={{
            modality: state.modality,
            id_parallel: state.id_parallel,
            
            setData
        }}>
            {props.children}
        </scheduleContext.Provider>
    )
}

export default ScheduleState;