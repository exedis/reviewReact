import { createAction, createReducer } from "@reduxjs/toolkit";
import { addReviewToServer, randomString } from "../functions/serverFunctions";
//import { ADD_LOADER, ADD_TO_REVIEW_LIST, DELETE_REVIEW, EDIT_REVIEW_BEGIN, EDIT_REVIEW_DONE, LOAD_REVIEW_LIST, REMOVE_LOADER } from "./types";
type ReviewAction = {
  type: string;
};
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



export const ADD_TO_REVIEW_LIST = createAction("ADD_TO_REVIEW_LIST", function addReview(reviewInfo: string) {
  return {
    payload:reviewInfo
  }
});


