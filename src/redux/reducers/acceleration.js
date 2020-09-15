import {
  ACCELERATION_INCREMENT,
  ACCELERATION_DECREMENT,
} from "../constants/actionTypes";

const initialState = {
  acceleration: 0,
};

export const acceleration = (state = initialState.acceleration, action) => {
  switch (action.type) {
    case ACCELERATION_INCREMENT:
      return state + action.payload;
    case ACCELERATION_DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
};
