import {CREATE_NOTE, EDIT_NOTE, SHOW_WORKSPACE, HIDE_WORKSPACE, OPEN_NOTE, EDIT_CURRENT_NOTE} from './types'

export function createNote(note) {
  return {
    type: CREATE_NOTE,
    payload: note
  }
}

export function editNote(note) {
  return {
    type: EDIT_NOTE,
    payload: note
  }
}

export function openNote(id) {
  return {
    type: OPEN_NOTE,
    payload: id
  }
}

export function editCurrentNote(note) {
  return {
    type: EDIT_CURRENT_NOTE,
    payload: note
  }
}

export function showWorkspace() {
  return {
    type: SHOW_WORKSPACE
  }
}

export function hideWorkspace() {
  return {
    type: HIDE_WORKSPACE
  }
}
