import { ADD_TO_REVIEW_LIST, DELETE_REVIEW, EDIT_REVIEW, LOAD_REVIEW_LIST } from "./types";

export function addReview(reviewInfo){
    return{
        type:ADD_TO_REVIEW_LIST,
        payload: reviewInfo
    }
}

export function loadReviewList(){
    return{
        type:LOAD_REVIEW_LIST
    }
}

export function deleteReview(id){
    return{
        type:DELETE_REVIEW,
        payload: id
    }
}

export function editReview(id){
    return{
        type:EDIT_REVIEW,
        payload: id
    }
}

export function loadReviewListAsync(){
    return function(dispatch){
        dispatch(loadReviewList())
        //dispatch(increment())
        //dispatch(enableButtons())
    }
}