import React from "react";
import ReviewsListItem from "./ReviewsListItem";

const ReviewList = () => {
  return (
    <div>
      <div className="list-group">
        {state.reviews?.map((item, index) => {
          return (
            <ReviewsListItem
              id={item.id}
              title={item.title}
              text={item.text}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ReviewList;
