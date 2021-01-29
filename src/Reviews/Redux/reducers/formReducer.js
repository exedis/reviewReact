import { ADD_REVIEW } from "../types"

const initialState = {
    title: '',
    text: '',
}
export function formReducer(state = initialState, action){
    if(action.type === ADD_REVIEW){
        let add = state.reviews.push(state.payload)
        return{
            ...state, reviews:add
        }
    }
    return state
}