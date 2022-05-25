import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import { containerReducer} from "./containerReducer";
import {notificationReducer} from "./notificationsReducer";

const rootReducer = combineReducers({
    containers: containerReducer,
    notifications: notificationReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))