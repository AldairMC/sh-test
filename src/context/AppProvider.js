import { useReducer } from "react";
import axios from "axios";

//types
import { GET_USER, CHANGE_ID, CLEAN_USER } from "./types";

//reducer
import AppReducer from "./AppReducer";
import AppContext from "./AppContext";


const AppProvider = ({ children }) => {
    const { REACT_APP_URI } = process.env

    const initialState = {
        user: [],
        id: null
    }

    const [ appState, dispatch ] = useReducer(AppReducer, initialState)

    const getUser = async (id) => {
        const user = await axios.get(`${REACT_APP_URI}/users/${id}`)
        dispatch({
            type: GET_USER,
            payload: user.data
        })
    }

    const changeId = (id) => {
        dispatch({
            type: CHANGE_ID,
            payload: id
        })
    }

    const cleanUser = (arr) => {
        dispatch({
            type: CLEAN_USER,
            payload: arr
        })
    }

    return (
        <AppContext.Provider value={{
            user: appState.user,
            id: appState.id,
            getUser,
            changeId,
            cleanUser
        }}>
            { children }
        </AppContext.Provider>
    )
}

export default AppProvider;