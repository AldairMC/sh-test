import { useReducer } from "react";
import axios from "axios";

//types
import { GET_USER } from "./types";

//reducer
import AppReducer from "./AppReducer";
import AppContext from "./AppContext";


const AppProvider = ({ children }) => {
    const { REACT_APP_URI } = process.env

    const initialState = {
        user: []
    }

    const [ appState, dispatch ] = useReducer(AppReducer, initialState)

    const getUser = async (id) => {
        const user = await axios.get(`${REACT_APP_URI}/users/${id}`)
        dispatch({
            type: GET_USER,
            payload: user.data
        })
    }

    return (
        <AppContext.Provider value={{
            user: appState.user,
            getUser
        }}>
            { children }
        </AppContext.Provider>
    )
}

export default AppProvider;