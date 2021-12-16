import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user:null,
    fetching:false,
    iserror:false
}

export const AuthContext = createContext(INITIAL_STATE) 

export const AuthContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE)
    return(
        <AuthContext.Provider value={{
            user:state.user,
            fetching:state.fetching,
            iserror:state.iserror,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}