import React from 'react'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk';
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'

const Reviews = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    const defReviewState = {
        reviews: [
          { id: 1, data: 5465465464, title: "Новый товар", text: "Нормас" },
          { id: 2, data: 5465465464, title: "Новый товар", text: "Нормас" },
          { id: 3, data: 5465465464, title: "Новый товар", text: "Нормас" },
        ],
      };
    return(
        <div>
            <ReviewForm/>
            <ReviewList/>
        </div>
    )
}

export default Reviews