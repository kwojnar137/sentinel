import * as types from "../constants/actionTypes";

export const incrementBreaking = (step) => {
  return {
    type: types.BREAKING_INCREMENT,
    payload: step,
  };
};

export const decrementBreaking = (step) => {
  return {
    type: types.BREAKING_DECREMENT,
    payload: step,
  };
};

export default {
  incrementBreaking,
  decrementBreaking,
};
