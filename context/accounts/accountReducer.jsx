import { 
    CHECK_ACCOUNT, 
    CREATE_ACCOUNT, 
    ERROR_ACCOUNT, 
    GET_ACCOUNT,
    UPDATE_ACCOUNT,
    DELETE_ACCOUNT
} from '../../types'

const accountReducer = (state, action) => {
    switch (action.type) {
        case GET_ACCOUNT:
            return{
                ...state,
                accounts: action.payload
            }

        case CREATE_ACCOUNT:
            return{
                ...state,
                accounts: [...state.accounts, action.payload],
                errorForm: false,
                msg: null
            }
        
        case ERROR_ACCOUNT:
            return {
                ...state,
                msg: action.payload
            }
        
        case CHECK_ACCOUNT:
            return{
                ...state,
                errorForm: true
            }

        case UPDATE_ACCOUNT:
            return {
                ...state,
                accounts: state.accounts.map(account => account._id === action.payload._id? account = action.payload: account),
                errorForm: false
            }

        case DELETE_ACCOUNT:
            return {
                ...state,
                accounts: state.accounts.filter(account => account._id !== action.payload._id)
            }

        default:
            return state;
    }
}

export default accountReducer;