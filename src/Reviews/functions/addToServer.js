import axios from "axios";

export const addReviewToServer = async (state) => {
    try {
      await axios.post(
        `https://reviews-b1257-default-rtdb.firebaseio.com/reviews.json`,
        state
      );
    } catch (e) {
      console.log(e);
    }
  };

export const removeReviewFromServer = async (key) => {
    try {
      await axios.delete(
        `https://reviews-b1257-default-rtdb.firebaseio.com/reviews/${key}`,
      );
    } catch (e) {
      console.log(e);
    }
  };