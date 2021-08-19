import { 
    CHECK_TEACHER, 
    CREATE_TEACHER, 
    ERROR_TEACHER, 
    GET_TEACHER,
    UPDATE_TEACHER,
    DELETE_TEACHER
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

        case UPDATE_TEACHER:
            return {
                ...state,
                teachers: state.teachers.map(teacher => teacher._id === action.payload._id? teacher = action.payload: teacher),
                errorForm: false
            }

        case DELETE_TEACHER:
            return {
                ...state,
                teachers: state.teachers.filter(teacher => teacher._id !== action.payload._id)
            }

        default:
            return state;
    }
}

export default teacherReducer;