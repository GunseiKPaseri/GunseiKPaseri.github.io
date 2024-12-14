import type React from "react"
import { type ReactNode, useReducer } from "react"
import { appContext, appInitialState, appReducer } from "./context"

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(appReducer, appInitialState)
  return (
    <appContext.Provider
      value={{
        selectedTags: state.selectedTags,
        searchWord: state.searchWord,
        dispatch: dispatch,
      }}
    >
      {children}
    </appContext.Provider>
  )
}
