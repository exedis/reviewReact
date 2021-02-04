import { ADD_LOADER, EDIT_REVIEW_BEGIN, EDIT_REVIEW_DONE, REMOVE_LOADER } from "../types"

const initialState = {
    edit:false,
    editCommentid: undefined,
    loader:false
}
 const initialAction = {
    type : '',
    payload : '',
 }

export function formReducer(state = initialState, action = initialAction){

    switch(action.type){
        case EDIT_REVIEW_BEGIN: 
            if(!action.payload){
                console.error('edit begin: error. Key underfined')
                return state
            }
            return{
                ...state, 
                edit:true,
                editCommentid: action.payload
            }
   
        case EDIT_REVIEW_DONE: 
            return{
                ...state, 
                edit:false,
                editCommentid:undefined
            }
        case ADD_LOADER:
            return{
                ...state, 
                    loader:true
                }           
            
        case REMOVE_LOADER:
            return{
                ...state, 
                loader: false
            }   
        default: return state
    }

    
}

