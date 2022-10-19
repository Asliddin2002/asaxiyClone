import { createStore, applyMiddleware } from "redux";
import { rooteReducer } from "./CombineReducer";
import thunk from "redux-thunk";

export const store = createStore(rooteReducer, applyMiddleware(thunk));
