import React, { useReducer } from 'react';

//Components
import reportContext from './reportContext'
import reportReducer from './reportReducer'
import clienteAxios from '../../config/axios'

//Types
import { 
    GET_GROUP_REPORT, GET_INDIVIDUAL_REPORT 
} from '../../types'

const ReportState = props => {
    const initialState = {
        groupReport: {},
        individualReport: []
    }

    //Dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(reportReducer, initialState)

    //funciones para el CRUD
    const getGroupReport = async (data) => {
        try {
            const resultado = await clienteAxios.get('/api/report/groupReport', {params: data});
            console.log(resultado);

            dispatch({
                type: GET_GROUP_REPORT,
                payload: resultado.data
            })
        } catch(error) {
            console.log(error)
        }
    }

    const getIndividualReport = async (data) => {
        try {
            const resultado = await clienteAxios.get('/api/report/individualReport', {params: data});
            console.log(resultado);

            dispatch({
                type: GET_INDIVIDUAL_REPORT,
                payload: resultado.data
            })
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <reportContext.Provider value={{
            groupReport: state.groupReport,
            individualReport: state.individualReport,

            getGroupReport,
            getIndividualReport
        }}>
            {props.children}
        </reportContext.Provider>
    )
}

export default ReportState;