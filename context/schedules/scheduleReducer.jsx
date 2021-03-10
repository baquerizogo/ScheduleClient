import { 
    SET_DATA
} from '../../types'

const scheduleReducer = (state, action) => {
    switch (action.type) {
        case SET_DATA:
            console.log(action.payload)
            return {
                modality: action.payload.modality,
                id_parallel: action.payload.id_parallel
            }
        default:
            return state;
    }
}

export default scheduleReducer;