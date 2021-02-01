import React,{useState} from "react";
import {connect,useSelector} from 'react-redux'

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
 const globalStateForm = useSelector(state => state.form)
 console.log(globalStateForm)
 let title = '';
 let titleBtn = 'Отправить';
 if(globalStateForm.edit){
  title = 'Изменить комментарий'
  titleBtn = 'Сохранить изменения';
 }
//console.log('globalState',globalState)
 const [state,setState] = useState({});
 const addReviewHandler = (state) => {
    props.addReview(state)
}

 const onInputHandler = (name,value) => {
  setState({
    ...state, [name]:value
  })
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
          onClick={() => addReviewHandler(state)}
        >
          {titleBtn}
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (state) => {
    return state.addReview
}

export default connect(null,mapDispatchToProps)(ReviewForm);
