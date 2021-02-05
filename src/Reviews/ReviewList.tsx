import React from "react";
import { useSelector,useDispatch } from 'react-redux'
import { deleteReview, editReviewBegin } from "./Redux/actions";
import ReviewsListItem from "./ReviewListItem";


type stateTypeReviews = {
  id:number;
  title:string;
  text:string;
  key:string;
}
type stateType = {
    list: {
      reviews: stateTypeReviews[]
    },
    form: {
      edit:boolean,
      editCommentid: undefined,
      loader:boolean
    },
}

const ReviewList: React.FC = () => {
  const list = useSelector((state:stateType) => state.list.reviews);
  const dispatch = useDispatch();
  const deleteReviewHandler = (key:string) => {
    dispatch(deleteReview(key));
  };

  const editReviewHandler = (key:string) => {
    dispatch(editReviewBegin(key));
  };
  return (
    <div className="list-group">
      {list?.map((item, index) => {
        if(item.key){
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
        }
      })}
    </div>
  );
};

export default ReviewList;
