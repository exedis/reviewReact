import { createSlice } from "@reduxjs/toolkit";
import {
  addReviewToServer,
  randomString,
  removeReviewFromServer,
} from "../functions/serverFunctions";

const toolkitSliceList = createSlice({
  name: "list",
  initialState: {
    list: {
      reviews: [
        {
          key: "",
          id: 0,
          title: "",
          text: "",
        },
      ],
    },
    form: {
      edit: false,
      editCommentid: "",
    },
  },
  reducers: {
    addReview(state, action) {
      let reviewKey = randomString();
      let arrElem = state.list.reviews[state.list.reviews.length - 1];
      addReviewToServer(reviewKey, {
        id: Number(arrElem?.id) + 1,
        title: action.payload?.title,
        text: action.payload?.text,
      });
      state.list.reviews.concat([
        {
          key: reviewKey,
          id: Number(arrElem?.id) + 1,
          title: action.payload?.title,
          text: action.payload?.text,
        },
      ]);
    },
    loadReviewList(state, action) {
      state.list.reviews = state.list.reviews.concat(action.payload);
    },
    deleteReview(state, action) {
      removeReviewFromServer(action.payload.key);
      state.list.reviews = state.list.reviews.filter(
        (item) => item.key !== action.payload.key
      );
    },
    editReviewBegin(state, action) {
      if (action.payload) {
        state.form.edit = true;
        state.form.editCommentid = action.payload;
      } else {
        console.error("edit begin: error. Key underfined");
      }
    },

    removeLoader(state) {
      //  state.loader = false
    },
  },
});

export default toolkitSliceList.reducer;
export const {
  addReview,
  loadReviewList,
  deleteReview,
  editReviewBegin,
} = toolkitSliceList.actions;
