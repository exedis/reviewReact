import axios from "axios";
export const addReviewToServer = async (key: string, state: object) => {
  try {
    await axios.put(
      `https://reviews-b1257-default-rtdb.firebaseio.com/reviews/${key}.json`,
      state
    );
  } catch (e) {
    console.log(e);
  }
};

export const removeReviewFromServer = async (key: string) => {
  try {
    await axios.delete(
      `https://reviews-b1257-default-rtdb.firebaseio.com/reviews/${key}.json`
    );
  } catch (e) {
    console.log(e);
  }
};

export const editReviewOnServer = async (key: string, state: object) => {
  try {
    await axios.put(
      `https://reviews-b1257-default-rtdb.firebaseio.com/reviews/${key}.json`,
      state
    );
  } catch (e) {
    console.log(e);
  }
};

export const randomString = () => {
  let rnd = "";
  while (rnd.length < 12) rnd += Math.random().toString(36).substring(2);
  return rnd.substring(0, 12);
};
