import { ADD_REVIEW, LOAD_REVIEW_LIST } from "./types";

export function addReview(reviewInfo){
    return{
        type:ADD_REVIEW,
        payload: reviewInfo
    }
}

export function loadReviewList(reviewInfo){
    return{
        type:LOAD_REVIEW_LIST,
        payload: reviewInfo
    }
}

export function loadReviewListAsync(){
    return function(dispatch){
        dispatch(loadReviewList())
        //dispatch(increment())
        //dispatch(enableButtons())
    }
}