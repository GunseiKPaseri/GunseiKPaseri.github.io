import { createContext } from "react"
import type { ContentsTag } from "../sourceMeta"

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

export type AppAction =
  | ReturnType<typeof tagClick>
  | ReturnType<typeof tagOnlyClick>

type AppState = {
  selectedTags: ContentsTag[]
}

export const appInitialState: AppState = {
  selectedTags: [],
}

export const appReducer: React.Reducer<AppState, AppAction> = (
  state,
  actions,
) => {
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
    default:
      return state
  }
}

type AppContextState = {
  selectedTags: typeof appInitialState.selectedTags
  dispatch: React.Dispatch<AppAction>
}

export const appContext = createContext<AppContextState>({} as AppContextState)
