import {
  ACCELERATION_INCREMENT,
  ACCELERATION_DECREMENT,
  ACCELERATION_HIGHER_THAN_100,
  ACCELERATION_LOWER_THAN_0,
} from "../constants/actionTypes";

const initialState = {
  acceleration: 0,
};
// export const acceleration = (state = initialState.acceleration, action) => {

export const acceleration = (state = initialState.acceleration, action) => {
  switch (action.type) {
    case ACCELERATION_INCREMENT:
      return state + action.payload;
    case ACCELERATION_DECREMENT:
      return state - action.payload;
    case ACCELERATION_HIGHER_THAN_100:
      return 100;
    case ACCELERATION_LOWER_THAN_0:
      return 0;
    default:
      return state;
  }
};
