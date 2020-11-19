import {createStore, compose, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const middlewares = [logger, thunk];

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middlewares)
));

export const persistor = persistStore(store);

// export default { store, persistor };
