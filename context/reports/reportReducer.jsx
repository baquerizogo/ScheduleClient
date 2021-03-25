import { GET_GROUP_REPORT, GET_INDIVIDUAL_REPORT } from '../../types'

const reportReducer = (state, action) => {
    switch (action.type) {
        case GET_GROUP_REPORT:
            return {
                ...state,
                groupReport : action.payload
            }
        case GET_INDIVIDUAL_REPORT:
            return {
                ...state,
                individualReport : action.payload
            }
        default:
            return state;
    }
}

export default reportReducer;