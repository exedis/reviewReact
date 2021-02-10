import { createSlice } from "@reduxjs/toolkit";
import {
  addReviewToServer,
  editReviewOnServer,
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
      loader: false,
      edit: false,
      editCommentid: "",
    },
  },
  reducers: {
    addReview(state, action) {
      let reviewKey = randomString();
      let arrElem = state.list.reviews[state.list.reviews.length - 1];
      console.log(reviewKey, action);
      addReviewToServer(reviewKey, {
        id: Number(arrElem?.id) + 1,
        title: action.payload?.title,
        text: action.payload?.text,
      });
      state.list.reviews = state.list.reviews.concat([
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
        console.log('action.payload.key',action)
      removeReviewFromServer(action.payload);
      state.list.reviews = state.list.reviews.filter(
        (item) => item.key !== action.payload
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

    addLoader(state) {
      state.form.loader = true;
    },

    removeLoader(state) {
      state.form.loader = false;
    },

    editReviewDone(state, action) {
      state.form.edit = false;
      state.form.editCommentid = "";
      let editedReview = {
        id: action.payload.id,
        title: action.payload.title,
        text: action.payload.text,
      };
      if (action.payload.key) {
        editReviewOnServer(action.payload.key, editedReview);
        state.list.reviews = state.list.reviews.map((item) => {
          if (item.id === action.payload.id) {
            item.title = action.payload.title;
            item.text = action.payload.text;
            return item;
          } else {
            return item;
          }
        });
      } else {
        console.error("key is undefined");
      }
    },
  },
});

export default toolkitSliceList.reducer;
export const {
  addReview,
  loadReviewList,
  deleteReview,
  addLoader,
  removeLoader,
  editReviewBegin,
  editReviewDone,
} = toolkitSliceList.actions;
