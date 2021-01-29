import React,{useState} from "react";

const ReviewForm = (props) => {
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
 const [state,setState] = useState({title:'',text:''});
 const onInputHandler = (name,value) => {
  setState({
    ...state, [name]:value
  })
  console.log('form state',state)
 }
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="titleItem" className="form-label">
            Заголовок
          </label>
          <input
            onInput={(event) => {
              onInputHandler("title", event.target.value);
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
            onInput={(event) => {
              onInputHandler("text", event.target.value);
            }}
            type="text"
            className="form-control"
            id="textItem"
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => props.addReview(state)}
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
