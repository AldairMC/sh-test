import { GET_USER, CHANGE_ID, CLEAN_USER } from "./types"

const AppReducer = (state, action) => {
    const { type, payload } = action

    switch(type){
        case GET_USER:
            return {
                ...state,
                user: payload
            }
        case CHANGE_ID:
            return {
                ...state,
                id: payload
            }
        case CLEAN_USER:
            return {
                ...state,
                user: payload
            }
        default:
            return state
    }
}

export default AppReducer