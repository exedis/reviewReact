import React, { useEffect } from "react";
//import { applyMiddleware, combineReducers, createStore } from "redux";
//import thunk,{ThunkMiddleware} from "redux-thunk";
import { useDispatch } from "react-redux";
import axios from "axios";
//import { loadReviewList } from "./Redux/actions";
//import { rootReducer } from "./Redux/reducers/rootReducer";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import { loadReviewList } from "./toolkitRedux/toolkitSlice";


//import { ADD_LOADER } from "./Redux/types";

// type State = {
//   foo: string;
// };
//enum
type Actions = { type: "ADD_LOADER" } | { type: "REMOVE_LOADER" };

const Reviews: React.FC = () => {
  // const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<Actions>));
 

  const loadReviewListAsync = (reviews: any) => {
    return async (dispatch: any) => {
      dispatch(loadReviewList(reviews));
    };
  };

  //store.dispatch({ type: "ADD_LOADER" });
  const dispatch = useDispatch();
  const getReviewsFromServer = async () => {
    try {
      const response = await axios.get(
        `https://reviews-b1257-default-rtdb.firebaseio.com/reviews.json`
      );
      let reviews: Array<object> = [];
      Object.keys(response.data).forEach((key, index) => {
        reviews.push({
          key: key,
          id: index,
          title: response.data[key].title,
          text: response.data[key].text,
        });
      });
       dispatch(loadReviewListAsync(reviews));
      // store?.dispatch(removeLoader({ type: 'REMOVE_LOADER' }));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getReviewsFromServer();
  });

  return (
    <div className="container md-25">
        <ReviewForm />
        <ReviewList />
    </div>
  );
};

export default Reviews;
