import * as types from "../constants/actionTypes";

export const incrementSpeed = (delta) => {
  return {
    type: types.SPEED_INCREMENT,
    payload: delta,
  };
};

export const decrementSpeed = (delta) => {
  return {
    type: types.SPEED_DECREMENT,
    payload: delta,
  };
};

export default {
  incrementSpeed,
  decrementSpeed,
};
