import React,{useState} from "react";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { addReview, loadReviewList } from "./Redux/actions";
import { rootReducer } from "./Redux/reducers/rootReducer";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

const Reviews = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  const defReviewState = {
    reviews: [
      { id: 1, data: 5465465464, title: "Новый товар", text: "Нормас" },
      { id: 2, data: 5465465464, title: "Новый товар", text: "Нормас" },
      { id: 3, data: 5465465464, title: "Новый товар", text: "Нормас" },
    ],
  };

  const addReviewHandler = () => {
    store.dispatch(addReview());
  };

  const loadReviewListHandler = () => {
    store.dispatch(loadReviewList());
  };
  return (
    <div>
      <ReviewForm addReview={addReviewHandler} />
      <ReviewList loadList={loadReviewListHandler} />
    </div>
  );
};

export default Reviews;
