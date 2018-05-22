import {
  createStore,
  combineReducers,
  applyMiddleware
} from "redux";
import { createLogger } from "redux-logger";
import { default as thunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import user from "./user";

const reducer = combineReducers({ user });

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({
    collapsed: true
  })
));


const persistedState = localStorage.getItem("store") ? JSON.parse(localStorage.getItem("store")) : {};

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_USER") {
    state = undefined;
  }
  return reducer(state, action);
};

const store = createStore(rootReducer, persistedState, middleware);

store.subscribe(() => localStorage.setItem("store", JSON.stringify(store.getState())));


export * from './user';

export default store;
