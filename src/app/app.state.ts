
import { combineReducers } from "redux"
import { stateBoolReducer } from "./app.reducers";

export interface IAppState {
    stateBool: boolean;
}

export const INITIAL_STATE: IAppState = {
    stateBool: false,
}

export const rootReducer = combineReducers({
    stateBool: stateBoolReducer,
})