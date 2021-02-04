import React, { useEffect } from "react";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import axios from "axios";
import {
  addLoader,
  loadReviewListAsync,
  removeLoader,
} from "./Redux/actions";
import { rootReducer } from "./Redux/reducers/rootReducer";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
//import { getReviewsFromServer } from "./functions/serverFunctions";

const Reviews: React.FC = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));

  // const addReviewHandler = (formState) => {
  //   store.dispatch(addReview(formState));
  // };

  store.dispatch(addLoader());
  const getReviewsFromServer = async () => {
    try {
      const response = await axios.get(
        `https://reviews-b1257-default-rtdb.firebaseio.com/reviews.json`
      );
      const reviews = new Array;
      Object.keys(response.data).forEach((key, index) => {
        reviews.push({
          key: key,
          id: index,
          title: response.data[key].title,
          text: response.data[key].text,
        });
      });
      store?.dispatch(loadReviewListAsync(reviews));
      store?.dispatch(removeLoader());
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getReviewsFromServer();
  });

  return (
    <div className="container md-25">
      <Provider store={store}>
        <ReviewForm/>
        <ReviewList />
      </Provider>
    </div>
  );
};

export default Reviews;
