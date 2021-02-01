import React from "react";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from 'react-redux'
import { addReview } from "./Redux/actions";
import { rootReducer } from "./Redux/reducers/rootReducer";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

const Reviews = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));


  const addReviewHandler = (formState) => {
    store.dispatch(addReview(formState));
  };


  store.dispatch({type:'__INIT__'});//def load

//   const loadReviewListHandler = () => {
//     store.dispatch(loadReviewList());
//   };

store.subscribe(() => {
  const state = store.getState()
})
  return (
    <div>
      <Provider store={store}>
        <ReviewForm addReview={addReviewHandler} />
        <ReviewList/>
      </Provider>
    </div>
  );
};

export default Reviews;
