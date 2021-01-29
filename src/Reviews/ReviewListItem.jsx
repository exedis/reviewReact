import React, { useState } from "react";



const ReviewsListItem = (props) => {
  const [state, setState] = useState({id:[]});
  const deleteReview = () => {
      console.log(id)
  };
  return (
    <a
      href="#"
      className="list-group-item list-group-item-action"
      aria-current="true"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">
          {props.id}. {props.title}
        </h5>
        <small className="red" onClick={() => deleteReview(props.id)}>
          Удалить!
        </small>
      </div>
      <p className="mb-1">{props.text}</p>
    </a>
  );
};

export default ReviewsListItem;
