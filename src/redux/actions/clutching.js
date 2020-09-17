import * as types from "../constants/actionTypes";

export const incrementClutching = (step) => {
  return {
    type: types.CLUTCHING_INCREMENT,
    payload: step,
  };
};

export const decrementClutching = (step) => {
  return {
    type: types.CLUTCHING_DECREMENT,
    payload: step,
  };
};

export default {
  incrementClutching,
  decrementClutching,
};
