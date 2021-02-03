import {  DELETE_REVIEW,ADD_TO_REVIEW_LIST, LOAD_REVIEW_LIST, EDIT_REVIEW_DONE } from "../types"
import {addReviewToServer, removeReviewFromServer, editReviewOnServer, getReviewsFromServer, randomString} from '../../functions/serverFunctions'

const  initialState = {
        reviews: []
    }

export function listReducer(state = initialState, action){
    switch(action.type){
        case LOAD_REVIEW_LIST: 
            return{
                ...state, 
                reviews:
                    state.reviews = action.payload
            }
        case ADD_TO_REVIEW_LIST:
            let reviewKey = randomString()
            addReviewToServer(reviewKey,{
                id:state.reviews[state.reviews.length - 1].id + 1,
                title:action.payload?.title,
                text:action.payload?.text,
            })
            return{
                ...state, 
                reviews:
                    state.reviews.concat([{
                        key:reviewKey,
                        id:state.reviews[state.reviews.length - 1].id + 1,
                        title:action.payload?.title,
                        text:action.payload?.text,
                    }])
            }         
            
        case DELETE_REVIEW:
            removeReviewFromServer(action.payload)
            return{
                ...state, 
                reviews:
                    state.reviews = state.reviews.filter(item => item.key !== action.payload)
            }            
        case EDIT_REVIEW_DONE:
            let editedReview = {
                id: action.payload.id,
                title: action.payload.title,
                text: action.payload.text,
            }
            if(action.payload.key){
                editReviewOnServer(action.payload.key, editedReview)
            }else{
                console.error('key is undefined')
            }
            return{
                ...state, 
                reviews:
                    state.reviews = state.reviews.map((item) => {
                        if(item.id === action.payload.id){
                            item.title = action.payload.title;
                            item.text = action.payload.text;
                            return item
                        }else{
                            return item
                        }
                    })
            }
               
        
        default: return state
    }

    
    // if(action.type === LOAD_REVIEW_LIST){
    //     return{
    //         ...state, 
    //         reviews:
    //             state.reviews.concat([action.payload])
    //     }
    // }else if(action.type === ADD_TO_REVIEW_LIST){
    //     let last_id = state.reviews[state.reviews.length - 1].id;
    //     let newReview = {
    //         id:last_id + 1,
    //         title:action.payload?.title,
    //         text:action.payload?.text,
    //     }
    //     return{
    //         ...state, 
    //         reviews:
    //             state.reviews.concat([newReview])
    //     }
    // }

    // return state
}

