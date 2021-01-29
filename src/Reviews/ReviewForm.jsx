import React from "react";

const ReviewForm = () => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="titleItem" className="form-label">
            Заголовок
          </label>
          <input
            onChange={(event) => {
              onInput("title", event.target.value);
            }}
            type="text"
            className="form-control"
            id="titleItem"
            aria-describedby="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="textItem" className="form-label">
            Текст
          </label>
          <input
            onChange={(event) => {
              onInput("text", event.target.value);
            }}
            type="text"
            className="form-control"
            id="textItem"
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => props.addReview()}
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
