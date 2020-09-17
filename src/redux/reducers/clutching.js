import {
  CLUTCHING_INCREMENT,
  CLUTCHING_DECREMENT,
} from "../constants/actionTypes";

const initialState = {
  clutching: 0,
};

export const clutching = (state = initialState.clutching, action) => {
  switch (action.type) {
    case CLUTCHING_INCREMENT:
      return state + action.payload;
    case CLUTCHING_DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
};
