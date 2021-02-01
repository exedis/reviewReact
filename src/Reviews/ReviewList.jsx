import React from "react";
//import { useSelector } from 'react-redux'
import { useDispatch, connect } from "react-redux";
import { deleteReview, editReview } from "./Redux/actions";
import ReviewsListItem from "./ReviewListItem";

const ReviewList = (state) => {
  /*const [state, setState] = useState({ reviews: [] });
    const getReviewsFromServer = async () => {
        try {
          const response = await axios.get(
            `https://reviews-b1257-default-rtdb.firebaseio.com/reviews.json`
          );
          const reviews = new Array;
          Object.keys(response.data).forEach((key, index) => {
            reviews.push({
              id: index,
              title: response.data[key].title,
              text: response.data[key].text,
            });
          });
          setState({ reviews });
        } catch (e) {
          console.log(e);
        }
      };
      useEffect(() => {
        getReviewsFromServer();
      }, []);*/
  //const reviews = useSelector(state => state.list)
  //console.log('reviews',reviews)
  const dispatch = useDispatch();
  const deleteReviewHandler = (id) => {
    dispatch(deleteReview(id));
  };

  const editReviewHandler = (id) => {
    dispatch(editReview(id));
  };
  // console.log("state", state);
  return (
    <div className="list-group">
      {state.list?.map((item, index) => {
        return (
          <ReviewsListItem
            id={item.id}
            title={item.title}
            text={item.text}
            key={index}
            deleteReview={deleteReviewHandler}
            editReview={editReviewHandler}
          />
        );
      })}
    </div>
  );
};

// const mapDispatchToProps = (state) => {
//     return state.deleteReview
// }

const mapStateToProps = (state) => {
  return {
    list: state.list.reviews,
  };
};

export default connect(mapStateToProps, null)(ReviewList);
