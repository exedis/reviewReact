import {  DELETE_REVIEW,ADD_TO_REVIEW_LIST, LOAD_REVIEW_LIST, EDIT_REVIEW_DONE } from "../types"
import {addReviewToServer, removeReviewFromServer, editReviewOnServer, randomString} from '../../functions/serverFunctions'



type initialStateReviewsType = {
    key:string;
    id:null | number;
    title:string;
    text:string;
}
type initialStateType = {
    reviews: initialStateReviewsType[]
}
const initialState:initialStateType = {
    reviews: [{
        key:'',
        id:0,
        title:'',
        text:''
    }]
}
const initialAction = {
    type : '',
    payload : {
        id: 0,
        key:'',
        title:'',
        text:'',
    }
}

export function listReducer(state = initialState, action = initialAction){
    switch(action.type){
        case LOAD_REVIEW_LIST: 
            return{
                ...state, 
                reviews:
                    state.reviews.push(action.payload)
            }
        case ADD_TO_REVIEW_LIST:
            let reviewKey = randomString()
            addReviewToServer(reviewKey,{
                id:1,
                //id:state.reviews[state.reviews.length - 1].id + 1,
                title:action.payload?.title,
                text:action.payload?.text,
            })
            return{
                ...state, 
                reviews:
                    state.reviews.concat([{
                        key:reviewKey,
                        id:1,
                        //id:state.reviews[state.reviews.length - 1].id + 1,
                        title:action.payload?.title,
                        text:action.payload?.text,
                    }])
            }         
            
        case DELETE_REVIEW:
            removeReviewFromServer(action.payload.key)
            return{
                ...state, 
                reviews:
                    state.reviews = state.reviews.filter(item => item.key !== action.payload.key)/////?
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

