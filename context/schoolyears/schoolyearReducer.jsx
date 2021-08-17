import { 
    CHECK_SCHOOLYEAR,
    CREATE_SCHOOLYEAR,
    CURRENT_SCHOOLYEAR,
    ERROR_SCHOOLYEAR,
    GET_SCHOOLYEAR,
    UPDATE_SCHOOLYEAR,
    DELETE_SCHOOLYEAR
} from '../../types'

const schoolyearReducer = (state, action) => {
    switch (action.type) {
        case ERROR_SCHOOLYEAR:
            return {
                ...state,
                msg: action.payload
            }

        case GET_SCHOOLYEAR:
            return {
                ...state,
                schoolyears: action.payload
            }

        case CURRENT_SCHOOLYEAR:
            return {
                ...state,
                schoolyear: state.schoolyears.filter(schoolyear => schoolyear._id === action.payload)
            }

        case CREATE_SCHOOLYEAR:
            return {
                ...state,
                schoolyears: [...state.schoolyears, action.payload],
                errorForm: false
            }

        case CHECK_SCHOOLYEAR:
            return {
                ...state,
                errorForm: true
            }

        case UPDATE_SCHOOLYEAR:
            return {
                ...state,
                schoolyears: state.schoolyears.map(schoolyear => schoolyear._id === action.payload._id? schoolyear = action.payload: schoolyear),
                errorForm: false
            }

        case DELETE_SCHOOLYEAR:
            return {
                ...state,
                schoolyears: state.schoolyears.filter(schoolyear => schoolyear._id !== action.payload._id)
            }

        default:
            return state;
    }
}

export default schoolyearReducer;