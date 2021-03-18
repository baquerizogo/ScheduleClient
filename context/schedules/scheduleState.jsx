import React, { useReducer } from 'react';

//Components
import scheduleContext from './scheduleContext'
import scheduleReducer from './scheduleReducer'
import clienteAxios from '../../config/axios'

//Types
import { 
    CLEAR_DATA,
    CREATE_SCHEDULE,
    ERROR_SCHEDULE,
    GET_SCHEDULE,
    GET_SCHEDULE_BY_PARALLEL,
    SET_DATA, 
    SET_FORM 
} from '../../types'

const ScheduleState = props => {
    const initialState = {
        modality: 0,                // 0 => Matutino // 1 => Vespertino
        id_parallel: '',            // Id del paralelo y curso al que pertenece
        data: [],                   // Asignaturas colocadas en el horario (Staging)
        newForm: false,             // Switch para resetear formularios cuando se creen horarios nuevos
        msg: null,                  // Mensaje que se muestra en caso de advertencias
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
        ],                          // Horas de inicio
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
        ],                          // Horas de fin
        schedules: [],              // Todos los horarios de clases en el periodo lectivo
        activeSchedule: []          // Horario de clase seleccionado por paralelo
    }

    //Dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(scheduleReducer, initialState)

    //funciones
    const getSchedule = async schoolyear => {
        try {
            const resultado = await clienteAxios.get('/api/schedule/all', {params: schoolyear});
            console.log(resultado);
            dispatch({
                type: GET_SCHEDULE,
                payload: resultado.data.schedule
            })
        } catch(error) {
            console.log(error);
        }
    }

    const getScheduleByParallel = async id_parallel => {
        try {
            const resultado = await clienteAxios.get('/api/schedule', {params: id_parallel});
            console.log(resultado);
            dispatch({
                type: GET_SCHEDULE_BY_PARALLEL,
                payload: resultado.data.schedule
            })
        } catch(error) {
            console.log(error);
        }
    }

    const setForm = data => {
        dispatch({
            type: SET_FORM,
            payload: data
        })
    }

    const setData = element => {
        const ans = checkData(element);

        if (ans.value) {
            dispatch({
                type: SET_DATA,
                payload: element
            })
        } else {
            dispatch({
                type: ERROR_SCHEDULE,
                payload: ans.msg
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

    const createSchedule = async schedule => {
        try{
            const resultado = await clienteAxios.post('/api/schedule', schedule);
            console.log(resultado);
            dispatch({
                type: CREATE_SCHEDULE,
                payload: schedule
            })
        }catch(error){
            console.log(error)
        }
    }

    const checkData = (element) => {
        const data = state.data;
        const schedules = state.schedules;
        let ans;

        //Comprobar que no se crucen los horarios de forma local
        if(data.length > 0) {
            for(let i in data) {
                //Comprobar que el día se el mismo
                if(data[i].x == element.x) {
                    //Comprobar que se sobrepongan
                    if((element.y.min_inicio >= data[i].y.min_inicio && element.y.min_inicio < data[i].y.min_fin) || (element.y.min_fin > data[i].y.min_inicio && element.y.min_fin <= data[i].y.min_fin) || (element.y.min_inicio <= data[i].y.min_inicio && element.y.min_fin >= data[i].y.min_fin)) {
                        console.log("Error");
                        ans = {
                            value: false,
                            msg: "No puede cruzar materias"
                        }
                        return ans;
                    }
                }
            }
        }

        //Comprobar con los demas cursos
        if(schedules.length > 0) {
            console.log("1")
            //Recorrer todos los horarios
            for(let i in schedules) {
                if(schedules[i].data.length > 0) {
                    console.log("2")
                    //Recorrer la data de cada horario
                    for(let j in schedules[i].data) {
                        //Comprobar si el profesor coincide
                        if((schedules[i].data[j].teacher._id === element.teacher._id) && (schedules[i].modality == state.modality)) {
                            console.log("Coincide profe y modalidad")
                            //Comprobar si el dia es el mismo
                            if(schedules[i].data[j].x == element.x) {
                                console.log("Coincide dia")
                                //Comprobar que se sobrepongan
                                if((element.y.min_inicio >= schedules[i].data[j].y.min_inicio && element.y.min_inicio < schedules[i].data[j].y.min_fin) || (element.y.min_fin > schedules[i].data[j].y.min_inicio && element.y.min_fin <= schedules[i].data[j].y.min_fin) || (element.y.min_inicio <= schedules[i].data[j].y.min_inicio && element.y.min_fin >= schedules[i].data[j].y.min_fin)) {
                                    console.log("Error");
                                    ans = {
                                        value: false,
                                        msg: "El profesor ya tiene esta hora ocupada en otro curso"
                                    }
                                    return ans;
                                }
                            }
                        }
                    }
                }
            }
        }

        ans = {
            value: true,
            msg: ""
        }

        return ans;
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
            schedules:  state.schedules,
            activeSchedule: state.activeSchedule,
            
            getScheduleByParallel,
            getSchedule,
            createSchedule,
            setForm,
            setData,
            clearData
        }}>
            {props.children}
        </scheduleContext.Provider>
    )
}

export default ScheduleState;