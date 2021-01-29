import React from "react";
import ReviewsListItem from "./ReviewListItem";

const ReviewList = (props) => {
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

  return (
    <div>
      <div className="list-group">
        {props.state.list.reviews?.map((item, index) => {
          return (
            <ReviewsListItem
              id={item.id}
              title={item.title}
              text={item.text}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ReviewList;
