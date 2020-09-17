import {
  SPEED_INCREMENT,
  SPEED_DECREMENT,
  SPEED_CORRECT,
} from "../constants/actionTypes";

const initialState = {
  speed: 0,
};

export const speed = (state = initialState.speed, action) => {
  switch (action.type) {
    case SPEED_INCREMENT:
      return state + action.payload;
    case SPEED_DECREMENT:
      return state + action.payload;
    case SPEED_CORRECT:
      return (state = 0);
    default:
      return state;
  }
};
