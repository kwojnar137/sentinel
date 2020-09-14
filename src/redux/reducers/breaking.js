import {
  BREAKING_INCREMENT,
  BREAKING_DECREMENT,
} from "../constants/actionTypes";

const initialState = {
  breaking: 0,
};
// export const acceleration = (state = initialState.acceleration, action) => {

export const breaking = (state = initialState.breaking, action) => {
  switch (action.type) {
    case BREAKING_INCREMENT:
      return state + action.payload;
    case BREAKING_DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
};
