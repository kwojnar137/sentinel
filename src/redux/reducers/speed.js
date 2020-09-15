import { SPEED_INCREMENT, SPEED_DECREMENT } from "../constants/actionTypes";

const initialState = {
  speed: 0,
};

export const speed = (state = initialState.speed, action) => {
  switch (action.type) {
    case SPEED_INCREMENT:
      return state + action.payload;
    case SPEED_DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
};
