import React from "react";

type ReviewsListItemType = {
  id: number;
  title: string;
  text: string;
  keyItem: string;
  deleteReview: (a: string) => void;
  editReview: (a: string) => void;
};

const ReviewsListItem: React.FC<ReviewsListItemType> = (props) => {
  if (props.keyItem) {
    return (
      <div className="review">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            {props.id + 1}. {props.title}
          </h5>
          <small>
            <div
              className="deleteBtn"
              onClick={() => props.deleteReview(props.keyItem)}
            >
              Удалить!
            </div>
            <br></br>
            <div
              className="editBtn"
              onClick={() => props.editReview(props.keyItem)}
            >
              Редактировать
            </div>
          </small>
        </div>
        <p className="mb-1">{props.text}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default ReviewsListItem;
