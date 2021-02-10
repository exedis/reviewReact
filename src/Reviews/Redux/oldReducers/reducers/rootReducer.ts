import { combineReducers } from "redux"
import { listReducer } from "./listReducer"
import { formReducer } from "./formReducer"

export const rootReducer = combineReducers({
    list: listReducer,
    form: formReducer
})