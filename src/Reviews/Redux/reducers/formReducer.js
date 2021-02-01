import { EDIT_REVIEW_BEGIN, EDIT_REVIEW_DONE } from "../types"

const initialState = {
    edit:false
}


export function formReducer(state = initialState, action){

    switch(action.type){
        case EDIT_REVIEW_BEGIN: 
        console.log('edit begin')
            return{
                ...state, 
                edit:true
            }
   
        case EDIT_REVIEW_DONE: 
            return{
                ...state, 
                edit:false
            }

        default: return state
    }

    
}

