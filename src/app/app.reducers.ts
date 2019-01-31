
import { createReducer } from "./app.reducer-utility";

export const stateBoolReducer = createReducer(false, {
    ChangeBoolState: ChangeBoolState,
});

    function ChangeBoolState(stateBool){
        return !stateBool;
    }