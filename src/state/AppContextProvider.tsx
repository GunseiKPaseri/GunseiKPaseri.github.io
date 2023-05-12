import React,{ReactNode, useReducer} from "react";
import {appContext, appInitialState, appReducer} from "./context";

export const AppContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [state,dispatch] = useReducer<typeof appReducer>(appReducer, appInitialState);
    return(
        <appContext.Provider value={{
            selectedTags: state.selectedTags,
            dispatch : dispatch
        }
        }>
            {children}
        </appContext.Provider>
    )
};