import { ADD_LOADER, ADD_TO_REVIEW_LIST, DELETE_REVIEW, EDIT_REVIEW_BEGIN, EDIT_REVIEW_DONE, LOAD_REVIEW_LIST, REMOVE_LOADER } from "./types";

export function addReview(reviewInfo){
    return{
        type:ADD_TO_REVIEW_LIST,
        payload: reviewInfo
    }
}

export function loadReviewList(reviewInfo){
    return{
        type:LOAD_REVIEW_LIST,
        payload: reviewInfo
    }
}


export function deleteReview(key){
    return{
        type:DELETE_REVIEW,
        payload: key
    }
}

export function editReviewBegin(id){
    return{
        type:EDIT_REVIEW_BEGIN,
        payload: id
    }
}

export function editReviewDone(id){
    return{
        type:EDIT_REVIEW_DONE,
        payload: id
    }
}
export function addLoader(){
    return{
        type:ADD_LOADER,
    }
}

export function removeLoader(){
    return{
        type:REMOVE_LOADER,
    }
}

export function loadReviewListAsync(reviewInfo){
    return function(dispatch){
        dispatch(loadReviewList(reviewInfo))
        dispatch(removeLoader())
    }
}