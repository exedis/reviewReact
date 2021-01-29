import {  LOAD_REVIEW_LIST } from "../types"

export function listReducer(state = {}, action){
    const defReviewState = {
        reviews: [
          { id: 1, data: 5465465464, title: "Новый товар", text: "Нормас" },
          { id: 2, data: 5465465464, title: "Новый товар", text: "Нормас" },
          { id: 3, data: 5465465464, title: "Новый товар", text: "Нормас" },
        ],
      };
      state = defReviewState;
    if(action.type === LOAD_REVIEW_LIST){
        return{
                reviews: [
                  { id: 1, data: 5465465464, title: "Новый товар", text: "Нормас" },
                  { id: 2, data: 5465465464, title: "Новый товар", text: "Нормас" },
                  { id: 3, data: 5465465464, title: "Новый товар", text: "Нормас" },
                ],
              }
        
    }
    return state
}