import React from "react";

const ReviewsListItem = (props) => {
  return (
    <div>
      <a
        href="#"
        className="list-group-item list-group-item-action"
        aria-current="true"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            {props.id}. {props.title}
          </h5>
          <small className="red">
            <div onClick={() => props.deleteReview(props.id)}>Удалить!</div>
            <br></br>
            <div onClick={() => props.editReview(props.id)}>Редактировать</div>
          </small>
        </div>
        <p className="mb-1">{props.text}</p>
      </a>
    </div>
  );
};

export default ReviewsListItem;
