import { SHOW_WORKSPACE, HIDE_WORKSPACE } from "./types"

const initialState = {
  workspace: true
}

export const workspaceReducer = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_WORKSPACE:
      return {...state, workspace: true}
    case HIDE_WORKSPACE:
      return {...state, workspace: false}
    default: return state
  }
}
