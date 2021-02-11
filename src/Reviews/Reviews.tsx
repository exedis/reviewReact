import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import { getReviews } from "./toolkitRedux/toolkitSlice";

const Reviews: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReviews());
  });

  return (
    <div className="container md-25">
      <ReviewForm />
      <ReviewList />
    </div>
  );
};

export default Reviews;
