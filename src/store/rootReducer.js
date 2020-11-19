import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { notesReducer } from "./notesReducer";
import { workspaceReducer } from "./workspaceReducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['notes']
}

const rootReducer = combineReducers({
  notes: notesReducer,
  workspace: workspaceReducer
});

export default persistReducer(persistConfig, rootReducer);
