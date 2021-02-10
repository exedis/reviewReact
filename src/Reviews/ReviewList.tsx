import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteReview, editReviewBegin } from "./toolkitRedux/toolkitSlice";
import ReviewsListItem from "./ReviewListItem";

type stateTypeReviews = {
  id: number;
  title: string;
  text: string;
  key: string;
};
type stateType = {
  state: {
    list: {
      reviews: stateTypeReviews[];
    };
    form: {
      edit: boolean;
      editCommentid: undefined;
      loader: boolean;
    };
  };
};

const ReviewList: React.FC = () => {
  const list = useSelector((state: stateType) => state.state.list.reviews);
  const dispatch = useDispatch();
  const deleteReviewHandler = (key: string) => {
    dispatch(deleteReview(key));
  };

  const editReviewHandler = (key: string) => {
    dispatch(editReviewBegin(key));
  };
  return (
    <div className="list-group">
      {list?.map((item, index) => {
        return (
          <ReviewsListItem
            id={item?.id}
            title={item.title}
            text={item.text}
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
