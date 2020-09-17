import * as types from "../constants/actionTypes";

export const incrementRpm = (delta) => {
  return {
    type: types.RPM_INCREMENT,
    payload: delta,
  };
};

export const decrementRpm = (delta) => {
  return {
    type: types.RPM_DECREMENT,
    payload: delta,
  };
};

export default {
  incrementRpm,
  decrementRpm,
};
