import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
// uses local storage, session storage can aslo be accessed (look at redux-persis docs for path to use session storage)
// local storage persists on refresh and window close; session storage only persists on refresh, not on window close
import storage from 'redux-persist/lib/storage';
import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart-reducer";
import directoryReducer from "./directory/directory-reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer
})

export default persistReducer(persistConfig, rootReducer);