import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addReview, editReviewDone } from "./Redux/actions";

const ReviewForm = () => {
  /*
    
  */
  const dispatch = useDispatch();
  const globalStateForm = useSelector((state) => state);
  let title = "";
  let titleBtn = "Отправить";

  const initialState = {
    title:'',
    text:''
  }
  const [state, setState] = useState(initialState);
  if (globalStateForm.form.edit) {
    title = "Изменить комментарий";
    titleBtn = "Сохранить изменения";
  }
  useEffect(() => {
    if (globalStateForm.form.edit) {
      setState({
        id: globalStateForm.list.reviews.filter(item => item.id === globalStateForm.form.editCommentid)[0].id,
        title: globalStateForm.list.reviews.filter(item => item.id === globalStateForm.form.editCommentid)[0].title,
        text: globalStateForm.list.reviews.filter(item => item.id === globalStateForm.form.editCommentid)[0].text,
      });
    }
  }, [globalStateForm]);

  const addReviewHandler = (state) => {
    if (globalStateForm.form.edit) {
      dispatch(editReviewDone(state));
    } else {
      dispatch(addReview(state));
    }
    setState(initialState)
  };

  const onInputHandler = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  let loader = '';
  if(globalStateForm.form.loader){
    loader = 'Загрузка......';
  }
  return (
    <div>
      {title}
      <form>
        <div className="mb-3">
          <label htmlFor="titleItem" className="form-label">
            Заголовок
          </label>
          <input
            value={state.title}
            onInput={(event) => {
              onInputHandler("title", event.target.value);
            }}
            type="text"
            className="form-control"
            id="titleItem"
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
            value={state.text}
            type="text"
            className="form-control"
            id="textItem"
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => addReviewHandler(state)}
        >
          {titleBtn}
        </button>
      </form>
      <br/>
      <br/>
      <br/>
      {loader}
    </div>
  );
};

export default ReviewForm;
