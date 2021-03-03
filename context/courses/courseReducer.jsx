import { 
    CHECK_COURSE,
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