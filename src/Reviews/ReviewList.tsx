import React from "react";
import { useSelector,useDispatch } from 'react-redux'
import { deleteReview, editReviewBegin } from "./Redux/actions";
import ReviewsListItem from "./ReviewListItem";

type ReviewListType = {
  id:number;
}

type ReviewsListItemType = {
  id:number;
  title:string;
  text:string;
  key:string;
  keyItem:string;
  deleteReview:object;
  editReview:object
}

const ReviewList: React.FC<ReviewListType> = () => {
  const list = useSelector(state => state.list.reviews);
  const dispatch = useDispatch();
  const deleteReviewHandler = (key:string) => {
    dispatch(deleteReview(key));
  };

  const editReviewHandler = (key:string) => {
    dispatch(editReviewBegin(key));
  };
  return (
    <div className="list-group">
      {list?.map((item:ReviewsListItemType, index:string) => {
        return (
          <ReviewsListItem
            id={item?.id}
            title={item?.title}
            text={item?.text}
            key={index}
            keyItem={item.key}
            deleteReview={deleteReviewHandler}
            editReview={editReviewHandler}
          />
        );
      })}
    </div>
  );
};

export default ReviewList;
