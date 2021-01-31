import { ADD_REVIEW } from "../types"

const initialState = {
    title: '',
    text: '',
}
export function formReducer(state = initialState, action){
    console.log('state',state)
    if(action.type === ADD_REVIEW){
        let add = state.form.reviews?.push(action.payload)
        return{
            ...state.form.reviews, reviews:add
        }
    }
    return state
}