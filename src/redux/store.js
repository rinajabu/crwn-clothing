import { createStore, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist';
// logger will log the action payloads to the console for us, helpful for debugging redux code
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

// export default { store, persistor };