import { useSelector, TypedUseSelectorHook } from "react-redux";
import { rootState } from "./CombineReducer";

export const useTypeSelectorHook: TypedUseSelectorHook<rootState> = useSelector;
