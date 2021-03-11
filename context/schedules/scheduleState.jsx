import React, { useReducer } from 'react';

//Components
import scheduleContext from './scheduleContext'
import scheduleReducer from './scheduleReducer'
import clienteAxios from '../../config/axios'

//Types
import { 
    CLEAR_DATA,
    ERROR_SCHEDULE,
    SET_DATA, 
    SET_FORM 
} from '../../types'

const ScheduleState = props => {
    const initialState = {
        modality: 0,
        id_parallel: '',
        data: [],
        newForm: false,
        msg: null,
        inicio: [
            {name: "8:00", value: 0},
            {name: "8:20", value: 1},
            {name: "8:40", value: 2},
            {name: "9:00", value: 3},
            {name: "9:20", value: 4},
            {name: "9:40", value: 5},
            {name: "10:00", value: 6},
            {name: "10:20", value: 7},
            {name: "10:40", value: 8},
            {name: "11:00", value: 9},
            {name: "11:20", value: 10},
            {name: "11:40", value: 11}
        ],
        fin: [
            {name: "8:20", value: 1},
            {name: "8:40", value: 2},
            {name: "9:00", value: 3},
            {name: "9:20", value: 4},
            {name: "9:40", value: 5},
            {name: "10:00", value: 6},
            {name: "10:20", value: 7},
            {name: "10:40", value: 8},
            {name: "11:00", value: 9},
            {name: "11:20", value: 10},
            {name: "11:40", value: 11},
            {name: "12:00", value: 12}
        ],
    }

    //Dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(scheduleReducer, initialState)

    //funciones
    const setForm = data => {
        dispatch({
            type: SET_FORM,
            payload: data
        })
    }

    const setData = element => {

        if (checkData(element)) {
            dispatch({
                type: SET_DATA,
                payload: element
            })
        } else {
            dispatch({
                type: ERROR_SCHEDULE,
                payload: "No puede cruzar materias"
            })   
        }   
    }

    const clearData = () => {
        const switcher = state.newForm ? false : true;
        dispatch({
            type: CLEAR_DATA,
            payload: switcher
        })
    }

    const checkData = (element) => {
        const auxData = state.data;
        if(auxData.length > 0) {
            for(let i in auxData) {
                //Comprobar que el día se el mismo
                if(auxData[i].x == element.x) {
                    //Comprobar que se sobrepongan
                    if((element.y.min_inicio >= auxData[i].y.min_inicio && element.y.min_inicio < auxData[i].y.min_fin) || (element.y.min_fin > auxData[i].y.min_inicio && element.y.min_fin <= auxData[i].y.min_fin) || (element.y.min_inicio <= auxData[i].y.min_inicio && element.y.min_fin >= auxData[i].y.min_fin)) {
                        console.log("Error");
                        return false;
                    } else {
                        console.log("Correcto")
                        return true;
                    }
                }
            }
            return true;
        } else {
            return true;
        }
    }

    return (
        <scheduleContext.Provider value={{
            modality: state.modality,
            id_parallel: state.id_parallel,
            data: state.data,
            newForm: state.newForm,
            inicio: state.inicio,
            fin: state.fin,
            msg: state.msg,
            
            setForm,
            setData,
            clearData
        }}>
            {props.children}
        </scheduleContext.Provider>
    )
}

export default ScheduleState;