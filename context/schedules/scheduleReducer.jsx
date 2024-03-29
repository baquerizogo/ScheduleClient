import { 
    CLEAR_DATA,
    CREATE_SCHEDULE,
    ERROR_SCHEDULE,
    GET_SCHEDULE,
    GET_SCHEDULE_BY_PARALLEL,
    SET_DATA, 
    SET_FORM,
    CHECK_SCHEDULE,
    CREATE_AUTO,
    UPDATE_SCHEDULE,
    DELETE_SCHEDULE,
    REMOVE_DATA,
    SET_MOD_DATA
} from '../../types'

const scheduleReducer = (state, action) => {
    let h_start;
    let h_end;

    const setTimes = () => {
        if(action.payload[0].modality == 0) {
            h_start = [
                {name: "8:00", value: 0},
                {name: "8:20", value: 1},
                {name: "8:40", value: 2},
                {name: "9:00", value: 3},
                {name: "9:20", value: 4},
                {name: "9:40", value: 5},
                {name: "10:40", value: 6},
                {name: "11:00", value: 7},
                {name: "11:20", value: 8},
                {name: "11:40", value: 9}
            ]

            h_end = [
                {name: "8:20", value: 1},
                {name: "8:40", value: 2},
                {name: "9:00", value: 3},
                {name: "9:20", value: 4},
                {name: "9:40", value: 5},
                {name: "10:00", value: 6},
                {name: "11:00", value: 7},
                {name: "11:20", value: 8},
                {name: "11:40", value: 9},
                {name: "12:00", value: 10}
            ]
        } else if (action.payload[0].modality == 1){
            h_start = [
                {name: "13:00", value: 0},
                {name: "13:20", value: 1},
                {name: "13:40", value: 2},
                {name: "14:00", value: 3},
                {name: "14:20", value: 4},
                {name: "14:40", value: 5},
                {name: "15:40", value: 6},
                {name: "16:00", value: 7},
                {name: "16:20", value: 8},
                {name: "16:40", value: 9}
            ]

            h_end = [
                {name: "13:20", value: 1},
                {name: "13:40", value: 2},
                {name: "14:00", value: 3},
                {name: "14:20", value: 4},
                {name: "14:40", value: 5},
                {name: "15:00", value: 6},
                {name: "16:00", value: 7},
                {name: "16:20", value: 8},
                {name: "16:40", value: 9},
                {name: "17:00", value: 10}
            ]
        }
    }

    const setTimes2 = () => {
        if(action.payload.modality == 0) {
            h_start = [
                {name: "8:00", value: 0},
                {name: "8:20", value: 1},
                {name: "8:40", value: 2},
                {name: "9:00", value: 3},
                {name: "9:20", value: 4},
                {name: "9:40", value: 5},
                {name: "10:40", value: 6},
                {name: "11:00", value: 7},
                {name: "11:20", value: 8},
                {name: "11:40", value: 9}
            ]

            h_end = [
                {name: "8:20", value: 1},
                {name: "8:40", value: 2},
                {name: "9:00", value: 3},
                {name: "9:20", value: 4},
                {name: "9:40", value: 5},
                {name: "10:00", value: 6},
                {name: "11:00", value: 7},
                {name: "11:20", value: 8},
                {name: "11:40", value: 9},
                {name: "12:00", value: 10}
            ]
        } else if (action.payload.modality == 1){
            h_start = [
                {name: "13:00", value: 0},
                {name: "13:20", value: 1},
                {name: "13:40", value: 2},
                {name: "14:00", value: 3},
                {name: "14:20", value: 4},
                {name: "14:40", value: 5},
                {name: "15:40", value: 6},
                {name: "16:00", value: 7},
                {name: "16:20", value: 8},
                {name: "16:40", value: 9}
            ]

            h_end = [
                {name: "13:20", value: 1},
                {name: "13:40", value: 2},
                {name: "14:00", value: 3},
                {name: "14:20", value: 4},
                {name: "14:40", value: 5},
                {name: "15:00", value: 6},
                {name: "16:00", value: 7},
                {name: "16:20", value: 8},
                {name: "16:40", value: 9},
                {name: "17:00", value: 10}
            ]
        }
    }
   

    switch (action.type) {
        case GET_SCHEDULE:
            return{
                ...state,
                schedules: action.payload
            }

        case GET_SCHEDULE_BY_PARALLEL:
            setTimes();
            return{
                ...state,
                inicio: h_start,
                fin: h_end,
                activeSchedule: action.payload
            }

        case SET_FORM:
            setTimes2();
            return {
                ...state,
                modality: action.payload.modality,
                id_course: action.payload.id_course,
                id_parallel: action.payload.id_parallel,
                inicio: h_start,
                fin: h_end,
                courseName: action.payload.courseName,
                parallelName: action.payload.parallelName
            }

        case SET_DATA:
            return {
                ...state,
                data: [
                    ...state.data,
                    action.payload
                ],
                msg: null,
                errorForm: false
            }
        
        case SET_MOD_DATA:
            return {
                ...state,
                data: state.activeSchedule[0].data
            }

        case REMOVE_DATA:
            return {
                ...state,
                data: state.data.filter(e => (e.x != action.payload.x || e.y.min_inicio != action.payload.y.min_inicio))
            }

        case CREATE_SCHEDULE:
            return{
                ...state,
                schedules: [...state.schedules, action.payload],
                msg: null,
                errorForm: false
            }

        case CLEAR_DATA:
            return {
                ...state,
                data: [],
                activeSchedule: [],
                newForm: action.payload,
                msg: null
            }
        
        case ERROR_SCHEDULE:
            return {
                ...state,
                msg: action.payload
            }

        case CHECK_SCHEDULE:
            return{
                ...state,
                errorForm: true
            }

        case CREATE_AUTO:
            return{
                ...state,
                auto: {
                    msg: action.payload.msg,
                    status: action.payload.status
                }
            }

        case UPDATE_SCHEDULE:
            return {
                ...state,
                schedules: state.schedules.map(schedule => schedule._id === action.payload._id? schedule = action.payload: schedule),
                errorForm: false
            }

        case DELETE_SCHEDULE:
            return {
                ...state,
                schedules: state.schedules.filter(schedule => schedule._id !== action.payload._id),
                activeSchedule: []
            }

        default:
            return state;
    }
}

export default scheduleReducer;