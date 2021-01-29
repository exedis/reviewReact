import React from "react";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from 'react-redux'
import { addReview, loadReviewList } from "./Redux/actions";
import { rootReducer } from "./Redux/reducers/rootReducer";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

const Reviews = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));


  const addReviewHandler = (formState) => {
    store.dispatch(addReview(formState));
  };
  store.dispatch(loadReviewList());//def load

  const loadReviewListHandler = () => {
    store.dispatch(loadReviewList());
  };


  return (
    <div>
      <Provider store={store}>
        <ReviewForm addReview={addReviewHandler} />
        <ReviewList loadList={loadReviewListHandler} state={store.getState()} />
      </Provider>
    </div>
  );
};

export default Reviews;
