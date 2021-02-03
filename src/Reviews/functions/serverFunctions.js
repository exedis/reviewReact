import axios from "axios";
import { loadReviewListAsync, removeLoader } from "../Redux/actions";
export const addReviewToServer = async (key,state) => {
    try {
        await axios.put(
        `https://reviews-b1257-default-rtdb.firebaseio.com/reviews/${key}.json`,
        state
        );
    } catch (e) {
        console.log(e);
    }
};

export const removeReviewFromServer = async (key) => {
    try {
        await axios.delete(
        `https://reviews-b1257-default-rtdb.firebaseio.com/reviews/${key}.json`
        );
    } catch (e) {
        console.log(e);
    }
};

export const editReviewOnServer = async (key,state) => {
    try {
        await axios.put(
        `https://reviews-b1257-default-rtdb.firebaseio.com/reviews/${key}.json`,
        state
        );
    } catch (e) {
        console.log(e);
    }
};

export const getReviewsFromServer = async (store) => {
  
    try {
      const response = await axios.get(
        `https://reviews-b1257-default-rtdb.firebaseio.com/reviews.json`
      );
      const reviews = [];
      Object.keys(response.data).forEach((key, index) => {
        reviews.push({
          key: key,
          id: index,
          title: response.data[key].title,
          text: response.data[key].text,
        });
      });
      store?.dispatch(loadReviewListAsync(reviews));
      store?.dispatch(removeLoader());
    } catch (e) {
      console.log(e);
    }
};

export const randomString = () => {
  let rnd = '';
  while (rnd.length < 12) 
      rnd += Math.random().toString(36).substring(2);
  return rnd.substring(0, 12);
};