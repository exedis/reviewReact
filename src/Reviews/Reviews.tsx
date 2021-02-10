import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import {
  loadReviewList,
  addLoader,
  removeLoader,
} from "./toolkitRedux/toolkitSlice";

const Reviews: React.FC = () => {
  const dispatch = useDispatch();

  const loadReviewListAsync = (reviews: any) => {
    return async (dispatch: any) => {
      dispatch(loadReviewList(reviews));
    };
  };

  dispatch(addLoader());

  const getReviewsFromServer = async () => {
    try {
      const response = await axios.get(
        `https://reviews-b1257-default-rtdb.firebaseio.com/reviews.json`
      );
      let reviews: Array<object> = [];
      Object.keys(response.data).forEach((key, index) => {
        reviews.push({
          key: key,
          id: index,
          title: response.data[key].title,
          text: response.data[key].text,
        });
      });
      dispatch(loadReviewListAsync(reviews));
      dispatch(removeLoader());
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getReviewsFromServer();
  });

  return (
    <div className="container md-25">
      <ReviewForm />
      <ReviewList />
    </div>
  );
};

export default Reviews;
