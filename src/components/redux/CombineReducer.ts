import { combineReducers } from "redux";
import { addCartReducer } from "./AddCartRedux";

export const rooteReducer = combineReducers({ data: addCartReducer });

export type rootState = ReturnType<typeof rooteReducer>;
