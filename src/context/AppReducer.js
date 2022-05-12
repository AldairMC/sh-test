import { GET_USER } from "./types"

const AppReducer = (state, action) => {
    const { type, payload } = action

    switch(type){
        case GET_USER:
            return {
                ...state,
                user: payload
            }
        default:
            return state
    }
}

export default AppReducer