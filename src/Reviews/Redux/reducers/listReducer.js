import {  DELETE_REVIEW,ADD_TO_REVIEW_LIST, LOAD_REVIEW_LIST, EDIT_REVIEW_DONE } from "../types"
import {addReviewToServer, removeReviewFromServer} from '../../functions/addToServer'

const  initialState = {
        // reviews: [
        //     { id: 1, data: 5465465464, title: "Новый товар 1", text: "Нормас" },
        //     { id: 2, data: 5465465464, title: "Новый товар 2", text: "Нормас" },
        //     { id: 3, data: 5465465464, title: "Новый товар 3", text: "Нормас" },
        // ],
    }

export function listReducer(state = initialState, action){
    switch(action.type){
        case LOAD_REVIEW_LIST: 
        console.log('reducer action',action)
            return{
                ...state, 
                reviews:
                    state.reviews = action.payload
            }
        case ADD_TO_REVIEW_LIST:
            let last_id = state.reviews[state.reviews.length - 1].id;
            let newReview = {
                id:last_id + 1,
                title:action.payload?.title,
                text:action.payload?.text,
            }
            addReviewToServer(newReview)
            return{
                ...state, 
                reviews:
                    state.reviews.concat([newReview])
            }         
            
        case DELETE_REVIEW:
            let key = state.reviews.filter(item => item.id !== action.payload)
            console.log('key',key)
            console.log('action.payload',action.payload)
            removeReviewFromServer(action.payload)
            return{
                ...state, 
                reviews:
                    state.reviews = state.reviews.filter(item => item.id !== action.payload)
            }            
        case EDIT_REVIEW_DONE: 
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

