import { ADD_REVIEW } from "../types"

const initialState = {
    title: '',
    text: '',
}
export function formReducer(state = initialState, action){
    if(action.type === ADD_REVIEW){
        return{
            ...state, list = (state)
        }
    }
    return state
}