import { 
    CHECK_PARALLEL, 
    CREATE_PARALLEL, 
    GET_PARALLEL
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

        default:
            return state;
    }
}

export default parallelReducer;