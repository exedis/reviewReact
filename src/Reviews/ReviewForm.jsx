import React from "react";

const ReviewForm = () => {
    /*
    const addReviewToServer = async () => {
    try {
      const response = await axios.post(
        `https://reviews-b1257-default-rtdb.firebaseio.com/reviews.json`,
        state
      );
      setState({
        title: "",
        text: "",
      });
      //document.querySelector('#textItem').nodeValue()
    } catch (e) {
      console.log(e);
    }
  };
  */
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
