import { 
    CHECK_TEACHER, 
    CREATE_TEACHER, 
    ERROR_TEACHER, 
    GET_TEACHER 
} from '../../types'

const teacherReducer = (state, action) => {
    switch (action.type) {
        case GET_TEACHER:
            return{
                ...state,
                teachers: action.payload
            }

        case CREATE_TEACHER:
            return{
                ...state,
                teachers: [...state.teachers, action.payload],
                errorForm: false,
                msg: null
            }
        
        case ERROR_TEACHER:
            return {
                ...state,
                msg: action.payload
            }
        
        case CHECK_TEACHER:
            return{
                ...state,
                errorForm: true
            }

        default:
            return state;
    }
}

export default teacherReducer;