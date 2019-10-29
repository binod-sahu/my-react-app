import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import MembersReducer from "./reducers/MembersReducer";
import MessagesReducer from './reducers/MessagesReducer';

const windowObj = typeof window === 'undefined' ? null : (window);
const composeEnhancer =
    (windowObj.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        windowObj.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            trace: true,
            traceLimit: 25,
        })) ||
    compose;

const middleware = applyMiddleware(thunk, logger);
const reducers = combineReducers({members: MembersReducer, messages: MessagesReducer});

export const store = createStore(reducers, composeEnhancer(middleware));

