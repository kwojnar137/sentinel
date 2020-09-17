import * as types from "../constants/actionTypes";

export const incrementAcceleration = (step) => {
  return {
    type: types.ACCELERATION_INCREMENT,
    payload: step,
  };
};

export const decrementAcceleration = (step) => {
  return {
    type: types.ACCELERATION_DECREMENT,
    payload: step,
  };
};

export default {
  incrementAcceleration,
  decrementAcceleration,
};
