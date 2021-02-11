import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addReviewToServer,
  editReviewOnServer,
  removeReviewFromServer,
} from "../functions/serverFunctions";

export type StoreReviewType = {
  key: string;
  id: number;
  title: string;
  text: string;
};

type StoreListType = {
  reviews: StoreReviewType[];
};

type StoreFormType = {
  loader: boolean;
  edit: boolean;
  editCommentid: string;
  error: string;
};

type InitialStateType = {
  list: StoreListType;
  form: StoreFormType;
};

const initialState: InitialStateType = {
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
    error: "",
  },
};

export const getReviews = createAsyncThunk("list/getReviews", async () => {
  const response = await axios.get(
    `https://reviews-b1257-default-rtdb.firebaseio.com/reviews.json`
  );
  let reviews: StoreReviewType[] = [];
  Object.keys(response.data).forEach((key, index) => {
    reviews.push({
      key: key,
      id: index,
      title: response.data[key].title,
      text: response.data[key].text,
    });
  });
  return reviews;
});

export const addReviews = createAsyncThunk(
  "list/addReviews",
  async ({ key, state }: { key: string; state: StoreReviewType }) => {
    addReviewToServer(key, state);
  }
);

export const deleteReview = createAsyncThunk(
  "list/deleteReview",
  async (key: string) => {
    removeReviewFromServer(key);
  }
);

export const editReviewDone = createAsyncThunk(
  "list/editReview",
  async ({ key, state }: { key: string; state: StoreReviewType }) => {
    editReviewOnServer(key, state);
  }
);

const toolkitSliceList = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    loadReviewList(state, action) {
      state.list.reviews = state.list.reviews.concat(action.payload);
    },
    editReviewBegin(state, action) {
      if (action.payload) {
        state.form.edit = true;
        state.form.editCommentid = action.payload;
      } else {
        console.error("edit begin: error. Key underfined");
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.pending, (state, action) => {
        state.form.error = "";
        state.form.loader = true;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.form.loader = false;
        state.list.reviews = state.list.reviews.concat(action.payload);
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.form.loader = false;
        state.form.error = action.error.message || "unknown error";
      })
      .addCase(addReviews.fulfilled, (state, action) => {
        let arrElem = state.list.reviews[state.list.reviews.length - 1];
        state.list.reviews = state.list.reviews.concat([
          {
            key: action.meta.arg.key,
            id: Number(arrElem?.id) + 1,
            title: action.meta.arg.state.title,
            text: action.meta.arg.state.text,
          },
        ]);
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.list.reviews = state.list.reviews.filter(
          (item) => item.key !== action.meta.arg
        );
      })
      .addCase(editReviewDone.fulfilled, (state, action) => {
        state.form.edit = false;
        state.form.editCommentid = "";
        if (action.meta.arg.state.key) {
          state.list.reviews = state.list.reviews.map((item) => {
            if (item.id === action.meta.arg.state.id) {
              item.title = action.meta.arg.state.title;
              item.text = action.meta.arg.state.text;
              return item;
            } else {
              return item;
            }
          });
        } else {
          console.error("key is undefined");
        }
      });
  },
});

export default toolkitSliceList.reducer;
export const { loadReviewList, editReviewBegin } = toolkitSliceList.actions;
