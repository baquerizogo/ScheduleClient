import {  
    CHECK_CLASS,
    CREATE_CLASS,
    GET_ALL_CLASSES,
    GET_CLASS
} from '../../types'

const classReducer = (state, action) => {
    switch (action.type) {
        case GET_CLASS:
            return{
                ...state,
                classes: action.payload
            }
        
        case CHECK_CLASS:
            return{
                ...state,
                errorForm: true
            }

        case GET_ALL_CLASSES:
            return{
                ...state,
                allClasses: action.payload
            }
        
        case CREATE_CLASS:
        return{
            ...state,
            classes: [...state.classes, action.payload],
            errorForm: false
        }

        default:
            return state;
    }
}

export default classReducer;