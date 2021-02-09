import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addReview, editReviewDone } from "./Redux/actions";


type stateTypeReviews = {
  id:number;
  title:string;
  text:string;
  key:string | undefined;
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
    
  
  
const ReviewForm: React.FC = () => {
  //const selectIsDefState = (state: stateType) => state
  const dispatch = useDispatch();
  const globalStateForm = useSelector((state:stateType) => state);
  let title = "";
  let titleBtn = "Отправить";

  const initialState:stateTypeReviews = {
    key: "",
    id: 0,
    title: "",
    text: "",
  };
  const [state, setState] = useState<stateTypeReviews>(initialState);
  if (globalStateForm.form?.edit) {
    title = "Изменить комментарий";
    titleBtn = "Сохранить изменения";
  }
  console.log('globalStateForm',globalStateForm)
  useEffect(() => {
    if (globalStateForm.form?.edit) {
      setState({
        key: globalStateForm.form.editCommentid,
        id: globalStateForm.list.reviews.filter(
          (item) => item.key === globalStateForm.form.editCommentid
        )[0]?.id,
        title: globalStateForm.list.reviews.filter(
          (item) => item.key === globalStateForm.form.editCommentid
        )[0]?.title,
        text: globalStateForm.list.reviews.filter(
          (item) => item.key === globalStateForm.form.editCommentid
        )[0]?.text,
      });
    }
  }, [globalStateForm]);

  const addReviewHandler = (state:stateTypeReviews) => {
    if (state.title && state.text) {
      if (globalStateForm.form.edit) {
        dispatch(editReviewDone(state));
      } else {
        dispatch(addReview(state));
      }
      setState(initialState);
    }else{
        alert('Заполните поля!')
    }
  };

  const onInputHandler = (name:string, value:string) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  let loader = "";
  if (globalStateForm.form?.loader) {
    loader = "Загрузка......";
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
            onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
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
            onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
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
      <br />
      <br />
      <br />
      {loader}
    </div>
  );
};

export default ReviewForm;
