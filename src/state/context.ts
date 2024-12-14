import { type Dispatch, type Reducer, createContext } from "react"
import type { ContentsTag } from "../sourceMeta"
import { assertUnReachable } from "../util"

const TagClickAction = "tagclick" as const
export const tagClick = (tag: ContentsTag) => ({
  type: TagClickAction,
  payload: { tag },
})

const TagOnlyClickAction = "tagonlyclick" as const
export const tagOnlyClick = (tag: ContentsTag) => ({
  type: TagOnlyClickAction,
  payload: { tag },
})

const SetSearchWordAction = "setsearchword" as const
export const setSearchWord = (searchWord: string) => ({
  type: SetSearchWordAction,
  payload: { searchWord },
})

const QueryClearAction = "queryclear" as const
export const queryClear = () => ({
  type: QueryClearAction,
})

export type AppAction =
  | ReturnType<typeof tagClick>
  | ReturnType<typeof tagOnlyClick>
  | ReturnType<typeof setSearchWord>
  | ReturnType<typeof queryClear>

type AppState = {
  selectedTags: ContentsTag[]
  searchWord: string
}

export const appInitialState: AppState = {
  selectedTags: [],
  searchWord: "",
}

export const appReducer: Reducer<AppState, AppAction> = (state, actions) => {
  switch (actions.type) {
    case TagClickAction:
      return {
        ...state,
        selectedTags: state.selectedTags.includes(actions.payload.tag)
          ? state.selectedTags.filter((t) => t !== actions.payload.tag)
          : [...state.selectedTags, actions.payload.tag],
      }
    case TagOnlyClickAction:
      return {
        ...state,
        selectedTags: [actions.payload.tag],
      }
    case SetSearchWordAction:
      return {
        ...state,
        searchWord: actions.payload.searchWord,
      }
    case QueryClearAction:
      return {
        ...state,
        searchWord: "",
        selectedTags: [],
      }
    default:
      return assertUnReachable(actions)
  }
}

type AppContextState = AppState & {
  //selectedTags: typeof appInitialState.selectedTags
  dispatch: Dispatch<AppAction>
}

export const appContext = createContext<AppContextState>({} as AppContextState)
