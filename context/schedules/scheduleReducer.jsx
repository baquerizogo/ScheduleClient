import { 
    CLEAR_DATA,
    CREATE_SCHEDULE,
    ERROR_SCHEDULE,
    GET_SCHEDULE,
    SET_DATA, 
    SET_FORM
} from '../../types'

const scheduleReducer = (state, action) => {
    switch (action.type) {
        case GET_SCHEDULE:
            return{
                ...state,
                schedules: action.payload
            }

        case SET_FORM:
            let h_start;
            let h_end;
            if(action.payload.modality == 0) {
                h_start = [
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
                ]

                h_end = [
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
                ]
            } else {
                h_start = [
                    {name: "13:00", value: 0},
                    {name: "13:20", value: 1},
                    {name: "13:40", value: 2},
                    {name: "14:00", value: 3},
                    {name: "14:20", value: 4},
                    {name: "14:40", value: 5},
                    {name: "15:00", value: 6},
                    {name: "15:20", value: 7},
                    {name: "15:40", value: 8},
                    {name: "16:00", value: 9},
                    {name: "16:20", value: 10},
                    {name: "16:40", value: 11}
                ]
    
                h_end = [
                    {name: "13:20", value: 1},
                    {name: "13:40", value: 2},
                    {name: "14:00", value: 3},
                    {name: "14:20", value: 4},
                    {name: "14:40", value: 5},
                    {name: "15:00", value: 6},
                    {name: "15:20", value: 7},
                    {name: "15:40", value: 8},
                    {name: "16:00", value: 9},
                    {name: "16:20", value: 10},
                    {name: "16:40", value: 11},
                    {name: "17:00", value: 12}
                ]
            }

            return {
                ...state,
                modality: action.payload.modality,
                id_parallel: action.payload.id_parallel,
                inicio: h_start,
                fin: h_end
            }

        case SET_DATA:
            return {
                ...state,
                data: [
                    ...state.data,
                    action.payload
                ],
                msg: null
            }

        case CREATE_SCHEDULE:
            return{
                ...state,
                schedules: [...state.schedules, action.payload],
                msg: null
            }

        case CLEAR_DATA:
            return {
                ...state,
                data: [],
                newForm: action.payload,
                msg: null
            }
        
        case ERROR_SCHEDULE:
            return {
                ...state,
                msg: action.payload
            }

        default:
            return state;
    }
}

export default scheduleReducer;