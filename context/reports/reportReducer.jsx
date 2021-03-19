import { GET_GROUP_REPORT } from '../../types'

const reportReducer = (state, action) => {
    switch (action.type) {
        case GET_GROUP_REPORT:
            return {
                ...state,
                groupReport : action.payload
            }
        default:
            return state;
    }
}

export default reportReducer;