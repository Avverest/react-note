import { CREATE_NOTE, EDIT_NOTE, OPEN_NOTE, EDIT_CURRENT_NOTE } from "./types";

const initialState = {
  notes: [],
  noteMap: {},
  currentNote: {}
}

const arrMap = notes => (
  notes.reduce(
    (map, element, index) => ({
      ...map,
      [element['id']]: index
    }),
    {}
  )
)

export const notesReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_NOTE:
      const notes = state.notes.concat(action.payload);
      return {...state, notes, noteMap: arrMap(notes)}
    case EDIT_NOTE:
      return {}
    case OPEN_NOTE:
      return {...state, currentNote: state.notes[state.noteMap[action.payload]]}
    // case EDIT_CURRENT_NOTE:
    //   const note = {
    //     ...action.payload
    //   }
    //   return {...state, currentNote: note}
    default: return state;
  }
}
