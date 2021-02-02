import React from "react";
//import { useSelector } from 'react-redux'
import { useDispatch, connect } from "react-redux";
import { deleteReview, editReviewBegin } from "./Redux/actions";
import ReviewsListItem from "./ReviewListItem";

const ReviewList = (state) => {
  const dispatch = useDispatch();
  const deleteReviewHandler = (key) => {
    dispatch(deleteReview(key));
  };

  const editReviewHandler = (id) => {
    dispatch(editReviewBegin(id));
  };
  console.log('state',state)
  return (
    <div className="list-group">
      {state.list?.map((item, index) => {
        return (
          <ReviewsListItem
            id={item?.id}
            title={item?.title}
            text={item?.text}
            key={index}
            keyItem={item?.key}
            deleteReview={deleteReviewHandler}
            editReview={editReviewHandler}
          />
        );
      })}
    </div>
  );
};

// const mapDispatchToProps = (state) => {
//     return state.deleteReview
// }

const mapStateToProps = (state = []) => {
  return {
    list: state.list.reviews,
  };
};

export default connect(mapStateToProps, null)(ReviewList);
