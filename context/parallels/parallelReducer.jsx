import { 
    CHECK_PARALLEL, 
    CREATE_PARALLEL, 
    GET_PARALLEL,
    UPDATE_PARALLEL,
    DELETE_PARALLEL
} from '../../types'

const parallelReducer = (state, action) => {
    switch (action.type) {
        case GET_PARALLEL:
            return{
                ...state,
                parallels: action.payload
            }
        
        case CHECK_PARALLEL:
            return{
                ...state,
                errorForm: true
            }
        
        case CREATE_PARALLEL:
        return{
            ...state,
            parallels: [...state.parallels, action.payload],
            errorForm: false
        }

        case UPDATE_PARALLEL:
            return {
                ...state,
                parallels: state.parallels.map(parallel => parallel._id === action.payload._id? parallel = action.payload: parallel),
                errorForm: false
            }

        case DELETE_PARALLEL:
            return {
                ...state,
                parallels: state.parallels.filter(parallel => parallel._id !== action.payload._id)
            }

        default:
            return state;
    }
}

export default parallelReducer;