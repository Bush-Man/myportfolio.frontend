import { createContext, useReducer,useEffect } from "react";
import { authReducer  } from "./reducers";
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
    dark: false,
    light:true
    
}

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, INITIAL_STATE)
    useEffect(() => {
        
        localStorage.setItem("user", JSON.stringify(state.user));
        
    })
    return (
        <Context.Provider
            value={
                {
                    user: state.user,
                    isFetching: state.isFetching,
                    error: state.error,
                    dark: state.dark,
                    
                    dispatch
                }
        
        }>
    {children}
    
    </Context.Provider >
    )
}