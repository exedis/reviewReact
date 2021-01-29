import {  LOAD_REVIEW_LIST } from "../types"

export function listReducer(state = {}, action){
    if(action.type === LOAD_REVIEW_LIST){
        return{
            state
        }
    }
    return state
}