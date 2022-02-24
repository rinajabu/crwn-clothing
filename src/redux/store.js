import { createStore, applyMiddleware } from "redux";
// logger will log the action payloads to the console for us, helpful for debugging redux code
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;