import { 
    CHECK_COURSE,
    GET_COURSE_INFO,
    CREATE_COURSE, 
    GET_COURSE 
} from '../../types'

const courseReducer = (state, action) => {
    switch (action.type) {
        case GET_COURSE:
            return{
                ...state,
                courses: action.payload
            }

        case GET_COURSE_INFO:
        return{
            ...state,
            courseInfo: action.payload
        }
            
        case CREATE_COURSE:
            return{
                ...state,
                courses: [...state.courses, action.payload],
                errorForm: false
            }
        
        case CHECK_COURSE:
            return{
                ...state,
                errorForm: true
            }

        default:
            return state;
    }
}

export default courseReducer;