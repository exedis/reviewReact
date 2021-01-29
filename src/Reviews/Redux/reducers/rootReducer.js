import { combineReducers } from "redux"
import { formReducer } from "./formReducer"
import { listReducer } from "./listReducer"

export const rootReducer = combineReducers({
    form: formReducer,
    list: listReducer,
})